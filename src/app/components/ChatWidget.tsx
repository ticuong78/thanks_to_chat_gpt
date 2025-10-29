"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { toast } from "sonner";
import { Bot, Send, X } from "lucide-react";

type Role = "user" | "assistant" | "system" | "error";

type Message = {
  id: string;
  role: Role;
  content: string;
  sources?: Array<{
    id?: string | number | null;
    chunk?: number | string | null;
    score?: number | null;
    metadata?: Record<string, any>;
  }>;
};

export type ChatContext = {
  postId?: number;
  title?: string;
  author?: string;
  category?: string;
  contentSnippet?: string;
  [k: string]: any;
};

export function ChatWidget({
  apiUrl,
  contextType = "global",
  context,
  greet = true,
  language = "vi",
  promptStyle = "structured",
  k = 6,
  mmr = false,
  fetchK,
  scoreThreshold,
  initialOpen = false,
  position = "br",
  zIndex = 9999,
  title = "BlogSpace AI",
  buttonLabel = "Open BlogSpace AI",
  disableTypingAnimation = false,
  inputPlaceholder,
}: {
  apiUrl?: string;
  contextType?: "global" | "post";
  context?: ChatContext;
  greet?: boolean;
  language?: string;
  promptStyle?: "concise" | "structured" | "qa";
  k?: number;
  mmr?: boolean;
  fetchK?: number;
  scoreThreshold?: number;
  initialOpen?: boolean;
  position?: "br" | "bl";
  zIndex?: number;
  title?: string;
  buttonLabel?: string;
  disableTypingAnimation?: boolean;
  inputPlaceholder?: string;
}) {
  const resolvedApiUrl = apiUrl || process.env.NEXT_PUBLIC_LLM_CHAT_URL || "";
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(initialOpen);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimerRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Ensure portal mounts after client hydration
  useEffect(() => setMounted(true), []);

  // Cleanup timers and pending requests on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) cancelAnimationFrame(typingTimerRef.current);
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  // Auto-greet when the box first opens
  useEffect(() => {
    if (open && greet && messages.length === 0) {
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            contextType === "post"
              ? "Xin chào! Tôi là BlogSpace AI. Tôi có thể trả lời về nội dung của bài viết này. Bạn muốn biết gì?"
              : "Xin chào! Tôi là BlogSpace AI. Hãy hỏi tôi bất kỳ điều gì về các bài viết trên BlogSpace.",
        },
      ]);
    }
  }, [open, greet, messages.length, contextType]);

  // Scroll to bottom on new messages (only if near bottom)
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    if (nearBottom) el.scrollTo({ top: el.scrollHeight });
  }, [messages]);

  // Focus input when panel opens; Esc to close
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const disabled = useMemo(() => !resolvedApiUrl, [resolvedApiUrl]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || pending) return;
    if (disabled) {
      toast.error("Chưa cấu hình LLM API URL (NEXT_PUBLIC_LLM_CHAT_URL)");
      return;
    }

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setPending(true);

    try {
      // Build query for your Flask RAG server (/query)
      const scopePrefix =
        contextType === "post"
          ? `Chỉ dựa trên bài viết hiện tại${
              context?.title ? `: "${context.title}"` : ""
            }${context?.author ? `, tác giả ${context.author}` : ""}. `
          : "";
      const finalQuery = `${scopePrefix}${text}`.trim();

      const payload: Record<string, any> = {
        query: finalQuery,
        language,
        prompt_style: promptStyle,
        k,
        mmr,
      };
      if (typeof fetchK === "number") payload.fetch_k = fetchK;
      if (typeof scoreThreshold === "number")
        payload.score_threshold = scoreThreshold;
      // Optionally send context for future server support (ignored by current API)
      payload.client_context = { type: contextType, ...context };

      const endpoint = /\/query\/?$/.test(resolvedApiUrl)
        ? resolvedApiUrl
        : resolvedApiUrl.replace(/\/$/, "") + "/query";
      // Abort ongoing
      if (abortRef.current) abortRef.current.abort();
      abortRef.current = new AbortController();
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: abortRef.current.signal,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Parse Flask RAG response
      const data = await res.json().catch(() => ({}));
      if (data?.error) throw new Error(String(data.error));
      const answer: string =
        typeof data?.answer === "string"
          ? data.answer
          : typeof data?.message === "string"
          ? data.message
          : typeof data?.text === "string"
          ? data.text
          : JSON.stringify(data);
      const sources = Array.isArray(data?.sources) ? data.sources : undefined;

      if (disableTypingAnimation) {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: answer,
            sources,
          },
        ]);
      } else {
        const id = crypto.randomUUID();
        setMessages((prev) => [
          ...prev,
          { id, role: "assistant", content: "", sources },
        ]);

        await new Promise<void>((resolve) => {
          const total = answer.length;
          let i = 0;
          const step = () => {
            i += Math.max(1, Math.round(total / 120));
            const next = answer.slice(0, i);
            setMessages((prev) =>
              prev.map((m) => (m.id === id ? { ...m, content: next } : m))
            );
            const el = listRef.current;
            if (el) el.scrollTo({ top: el.scrollHeight });
            if (i >= total) {
              if (typingTimerRef.current)
                cancelAnimationFrame(typingTimerRef.current);
              typingTimerRef.current = null;
              resolve();
            } else {
              typingTimerRef.current = requestAnimationFrame(
                step
              ) as unknown as number;
            }
          };
          typingTimerRef.current = requestAnimationFrame(
            step
          ) as unknown as number;
        });
      }
    } catch (err: any) {
      const errMsg: Message = {
        id: crypto.randomUUID(),
        role: "error",
        content: `Lỗi gọi API: ${err?.message || "Unknown"}`,
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setPending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendMessage();
  }

  // Lightweight Markdown to HTML (escaped) renderer
  function escapeHtml(str: string) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function mdToHtml(md: string) {
    let text = md.replace(/\r\n?/g, "\n");
    text = escapeHtml(text);
    // Code fences ```...```
    text = text.replace(
      /```([\s\S]*?)```/g,
      (_m, p1) =>
        `<pre class=\"overflow-auto rounded-lg bg-muted p-3\"><code>${p1}</code></pre>`
    );
    // Headings
    text = text.replace(
      /^######\s+(.*)$/gm,
      '<h6 class="font-medium mt-3 mb-2">$1</h6>'
    );
    text = text.replace(
      /^#####\s+(.*)$/gm,
      '<h5 class="font-medium mt-3 mb-2">$1</h5>'
    );
    text = text.replace(
      /^####\s+(.*)$/gm,
      '<h4 class="font-medium mt-3 mb-2">$1</h4>'
    );
    text = text.replace(
      /^###\s+(.*)$/gm,
      '<h3 class="font-medium mt-3 mb-2">$1</h3>'
    );
    text = text.replace(
      /^##\s+(.*)$/gm,
      '<h2 class="font-medium mt-3 mb-2">$1</h2>'
    );
    text = text.replace(
      /^#\s+(.*)$/gm,
      '<h1 class="font-medium mt-3 mb-2">$1</h1>'
    );
    // Blockquote
    text = text.replace(
      /^>\s?(.*)$/gm,
      '<blockquote class="border-l-2 pl-3 text-muted-foreground italic my-2">$1</blockquote>'
    );
    // Lists
    text = text.replace(/^(\d+)\.\s+(.+)$/gm, "<ol><li>$2</li></ol>");
    text = text.replace(/^[-*+]\s+(.+)$/gm, "<ul><li>$1</li></ul>");
    // Bold/Italic/Inline code
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/(^|\W)\*(.+?)\*(?=\W|$)/g, "$1<em>$2</em>");
    text = text.replace(/(^|\W)_(.+?)_(?=\W|$)/g, "$1<em>$2</em>");
    text = text.replace(
      /`([^`]+?)`/g,
      '<code class="rounded bg-muted px-1 py-0.5">$1</code>'
    );
    // Paragraphs
    text = text
      .split(/\n{2,}/)
      .map((blk) =>
        /^<h\d|^<pre|^<blockquote|^<ul>|^<ol>/i.test(blk)
          ? blk
          : `<p>${blk.replace(/\n/g, "<br/>")}</p>`
      )
      .join("\n");
    // Merge consecutive lists
    text = text.replace(/<\/ul>\s*<ul>/g, "");
    text = text.replace(/<\/ol>\s*<ol>/g, "");
    return text;
  }

  const portalUi = (
    <>
      {/* Animations */}
      <style>{`
@keyframes chat-pop { from { transform: translateY(8px) scale(.98); opacity:0 } to { transform: translateY(0) scale(1); opacity:1 } }
@keyframes panel-pop { from { transform: translateY(16px) scale(.98); opacity:0 } to { transform: translateY(0) scale(1); opacity:1 } }
      `}</style>
      {/* Floating button */}
      <button
        aria-label={buttonLabel}
        className={`fixed bottom-6 ${
          position === "bl" ? "left-6" : "right-6"
        } size-14 rounded-full shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white flex items-center justify-center outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50`}
        style={{ zIndex }}
        onClick={() => setOpen((v) => !v)}
      >
        <Bot className="size-7" />
      </button>

      {/* Chat panel */}
      {open && (
        <Card
          className={`fixed bottom-24 ${
            position === "bl" ? "left-6" : "right-6"
          } w-[22rem] md:w-[26rem] h-[28rem] rounded-2xl shadow-2xl border bg-background overflow-hidden`}
          style={{ animation: "panel-pop .18s ease-out both", zIndex }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <Avatar className="size-7">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="leading-none">
                <div className="text-sm font-medium">{title}</div>
                <div className="text-xs text-muted-foreground">
                  {contextType === "post"
                    ? "Ngữ cảnh: bài viết hiện tại"
                    : "Ngữ cảnh: toàn bộ blog"}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </Button>
          </div>

          <CardContent className="px-3 pb-3 pt-0 h-[calc(100%-3rem)] grid grid-rows-[1fr,auto] gap-3">
            <div
              ref={listRef}
              className="overflow-y-auto p-2 pr-1 space-y-3 rounded-lg"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[80%] rounded-xl bg-primary text-primary-foreground px-3 py-2 shadow"
                      : m.role === "assistant"
                      ? "mr-auto max-w-[80%] rounded-xl bg-muted text-foreground px-3 py-2 shadow prose prose-sm"
                      : "mr-auto max-w-[80%] rounded-xl bg-destructive text-white px-3 py-2 shadow"
                  }
                  style={{ animation: "chat-pop .18s ease-out both" }}
                >
                  {m.role === "assistant" ? (
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: mdToHtml(m.content) }}
                    />
                  ) : (
                    <div className="whitespace-pre-wrap text-sm">
                      {m.content}
                    </div>
                  )}
                  {/* Hidden: nguồn tham khảo (id:chunk) theo yêu cầu */}
                </div>
              ))}
              {pending && (
                <div className="mr-auto max-w-[80%] rounded-xl bg-muted/70 px-3 py-3">
                  <div className="flex gap-3 items-start">
                    <div className="mt-1 h-6 w-6 rounded-full bg-accent animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-5/6 rounded bg-accent animate-pulse" />
                      <div className="h-3 w-2/3 rounded bg-accent animate-pulse" />
                      <div className="h-3 w-3/5 rounded bg-accent animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <div className="flex items-center gap-2 flex-1 rounded-xl border bg-background px-2.5 py-2 shadow-sm">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  ref={inputRef}
                  placeholder={
                    inputPlaceholder ??
                    (contextType === "post"
                      ? "Hỏi về bài viết này…"
                      : "Hỏi về nội dung BlogSpace…")
                  }
                  className="flex-1 h-10 bg-transparent border-0 focus-visible:ring-0 focus:outline-none"
                  disabled={pending}
                />
                <Button
                  type="submit"
                  disabled={pending}
                  className="cursor-pointer"
                >
                  <Send className="size-4 mr-1" />
                  Gửi
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );

  if (!mounted) return null;
  return createPortal(portalUi, document.body);
}

export default ChatWidget;
