"use client";

import { BlogCard } from "@/app/components/BlogCard";
import { FeaturedSection } from "@/app/components/FeaturedSection";
import { Newsletter } from "@/app/components/Newsletter";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { BlogCardDTO } from "@/dtos/BlogCardDTO";
import { fetchBlogCards } from "@/services/blogServices";
import { useEffect, useState } from "react";
import { HomePageSkeleton } from "../components/HomePageSkeleton";

export default function HomePage() {
  const [isFetching, setIsFetching] = useState(true);
  const [blogPosts, setBlogPosts] = useState<BlogCardDTO[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogCardDTO[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchBlogCards();
      setBlogPosts(data);
      setIsFetching(false);
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

  if (isFetching) {
    return <HomePageSkeleton />;
  }

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

      <div className="mb-8 flex justify-start">
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full max-w-3xl"
        >
          <TabsList
            className="
              flex justify-between gap-2
              bg-gray-100 rounded-full
              p-1 shadow-inner
              overflow-x-auto scrollbar-hide
            "
          >
            {[
              { value: "all", label: "All Posts" },
              { value: "networking", label: "Networking" },
              { value: "javascript", label: "Javascript" },
              { value: "java", label: "Java" },
              { value: "devsecops", label: "DevSecOps" },
              { value: "food", label: "Food" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="
                  flex-1 text-sm font-medium
                  rounded-full px-4 py-2
                  transition-all
                  data-[state=active]:bg-white
                  data-[state=active]:shadow-sm
                  data-[state=active]:text-black
                  data-[state=inactive]:text-gray-600
                  hover:text-black
                  cursor-pointer
                "
              >
                {tab.label}
              </TabsTrigger>
            ))}
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
