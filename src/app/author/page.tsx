"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/BlogCard";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Link2,
  Twitter,
  Linkedin,
} from "lucide-react";

export function AuthorPage() {
  const router = useRouter();
  const { authorName } = useParams();
  const [author, setAuthor] = useState<any>(null);
  const [authorPosts, setAuthorPosts] = useState<any[]>([]);

  useEffect(() => {
    // Find posts by this author
    const posts = blogPosts.filter(
      (post) =>
        post.author.name.toLowerCase().replace(/\s+/g, "-") === authorName
    );

    if (posts.length > 0) {
      setAuthor(posts[0].author);
      setAuthorPosts(posts);
    }

    window.scrollTo(0, 0);
  }, [authorName]);

  if (!author) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl mb-4">Author Not Found</h1>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 mb-6"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg flex-shrink-0">
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="text-4xl">
                {author.initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-4xl mb-2">{author.name}</h1>
              {author.role && (
                <p className="text-xl text-gray-300 mb-4">{author.role}</p>
              )}
              {author.bio && (
                <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                  {author.bio}
                </p>
              )}

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>
                    {author.name.toLowerCase().replace(/\s+/g, ".")}
                    @blogspace.com
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="secondary" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent text-white border-white hover:bg-white/20"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent text-white border-white hover:bg-white/20"
                >
                  <Link2 className="w-4 h-4 mr-2" />
                  Website
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-1">{authorPosts.length}</div>
                <div className="text-sm text-gray-300">Articles</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-1">
                  {authorPosts.reduce(
                    (sum, post) => sum + (post.likes || 0),
                    0
                  )}
                </div>
                <div className="text-sm text-gray-300">Likes</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-1">
                  {authorPosts.reduce(
                    (sum, post) => sum + (post.comments || 0),
                    0
                  )}
                </div>
                <div className="text-sm text-gray-300">Comments</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Published Articles</h2>
          <Badge variant="secondary">{authorPosts.length} Posts</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authorPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {authorPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No articles published yet.</p>
          </div>
        )}
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6">About {author.name}</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                {author.bio ||
                  `${author.name} is a passionate writer and content creator who shares insights and stories with readers around the world.`}
              </p>

              <p className="text-gray-700 mb-4">
                With expertise in{" "}
                {authorPosts.length > 0
                  ? authorPosts[0].category.toLowerCase()
                  : "various topics"}
                , {author.name.split(" ")[0]} brings a unique perspective to
                every article, combining research, personal experience, and
                engaging storytelling.
              </p>

              <p className="text-gray-700">
                When not writing, you can find {author.name.split(" ")[0]}{" "}
                exploring new ideas, connecting with fellow writers, and
                continuously learning to bring the best content to readers.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(
                  new Set(authorPosts.map((post) => post.category))
                ).map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
                {authorPosts
                  .flatMap((post) => post.tags || [])
                  .filter((tag, index, self) => self.indexOf(tag) === index)
                  .slice(0, 5)
                  .map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
