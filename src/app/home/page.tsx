"use client";

import { BlogCard } from "@/app/components/BlogCard";
import { FeaturedSection } from "@/app/components/FeaturedSection";
import { Newsletter } from "@/app/components/Newsletter";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { BlogCardDTO } from "@/dtos/BlogCardDTO";
import { fetchBlogCards } from "@/services/blogServices";
import { useEffect, useState } from "react";

export function HomePage() {
  const [blogPosts, setBlogPosts] = useState<BlogCardDTO[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogCardDTO[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchBlogCards();
      setBlogPosts(data);
    };
    loadPosts();
  }, []); // only fetch once on mount

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(
        (post) => post.category.name.toLowerCase() === selectedCategory
      );
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, blogPosts]); // run when category or posts change

  return (
    <main className="container mx-auto px-4 py-8">
      <FeaturedSection
        image="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYwNjU5OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        category="Featured"
        title="Discover Amazing Stories from Around the World"
        excerpt="Join thousands of readers exploring thought-provoking articles on technology, travel, lifestyle, and everything in between."
        author="BlogSpace Team"
        date="Oct 18, 2025"
      />

      <div className="mb-8">
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList>
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      <Newsletter />
    </main>
  );
}
