"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCard } from "@/components/BlogCard";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import {
  Clock,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

export function SinglePostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === Number(id));
    setPost(foundPost || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl mb-4">Post Not Found</h1>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const handleShare = (platform: string) => {
    toast.success(`Shared to ${platform}!`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-8">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 mb-4"
              onClick={() => router.push("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-5xl text-white mb-4 max-w-4xl">{post.title}</h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
              onClick={() =>
                router.push(
                  `/author/${post.author.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                )
              }
            >
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                {post.author.role && (
                  <div className="text-sm text-gray-500">
                    {post.author.role}
                  </div>
                )}
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="h-12 hidden md:block"
            />

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                onClick={() => setLiked(!liked)}
              >
                <Heart
                  className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`}
                />
                {post.likes}
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                {post.comments}
              </Button>
              <Button
                variant={bookmarked ? "default" : "outline"}
                size="sm"
                onClick={() => setBookmarked(!bookmarked)}
              >
                <Bookmark
                  className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`}
                />
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Share Section */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Share this article</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("Facebook")}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("Twitter")}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare("LinkedIn")}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleCopyLink}>
                    <Link2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Author Bio */}
          {post.author.bio && (
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Avatar className="w-20 h-20 flex-shrink-0">
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl mb-2">About {post.author.name}</h3>
                    <p className="text-gray-600 mb-4">{post.author.bio}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        router.push(
                          `/author/${post.author.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        )
                      }
                    >
                      View All Posts
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Comments Section */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6">Comments ({post.comments})</h3>

              {/* Comment Form */}
              <div className="mb-8 pb-8 border-b">
                <textarea
                  className="w-full p-4 border rounded-lg resize-none"
                  rows={4}
                  placeholder="Share your thoughts..."
                />
                <div className="flex justify-end mt-4">
                  <Button onClick={() => toast.success("Comment posted!")}>
                    Post Comment
                  </Button>
                </div>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">John Doe</span>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Great article! I really enjoyed reading about this topic.
                      The insights you shared are very valuable.
                    </p>
                    <Button variant="ghost" size="sm">
                      Reply
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Alice Smith</span>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Thanks for sharing! I've been looking for information like
                      this. Can't wait to try out these tips.
                    </p>
                    <Button variant="ghost" size="sm">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} {...relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
