"use client";

import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1
              className="text-2xl cursor-pointer"
              onClick={() => router.push("/")}
            >
              BlogSpace
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => router.push("/")}
                className={`text-gray-600 hover:text-gray-900 transition ${
                  pathname === "/" ? "text-gray-900" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => router.push("/portfolio")}
                className={`text-gray-600 hover:text-gray-900 transition ${
                  pathname?.startsWith("/portfolio") ? "text-gray-900" : ""
                }`}
              >
                Portfolio
              </button>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Technology
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Lifestyle
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Travel
              </a>
              <button
                onClick={() => router.push("/about")}
                className={`text-gray-600 hover:text-gray-900 transition ${
                  pathname?.startsWith("/about") ? "text-gray-900" : ""
                }`}
              >
                About
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0"
              />
            </div>
            <Button className="hidden md:inline-flex">Subscribe</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
