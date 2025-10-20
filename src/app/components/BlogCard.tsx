"use client";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Clock, Heart, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRouter } from "next/navigation";
import { BlogCardDTO } from "@/dtos/BlogCardDTO";

export function BlogCard({
  id,
  title,
  excerpt,
  author,
  category,
  date,
  readTime,
  image,
  likes = 0,
  comments = 0,
  featured = false,
}: BlogCardDTO) {
  const router = useRouter();

  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
        featured ? "md:col-span-2" : ""
      }`}
      onClick={() => router.push(`/post/${id}`)}
    >
      <div className={`${featured ? "md:flex" : ""}`}>
        <div
          className={`relative ${featured ? "md:w-1/2" : ""} overflow-hidden`}
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className={`w-full object-cover ${
              featured ? "h-full min-h-[300px]" : "h-[240px]"
            } hover:scale-105 transition-transform duration-300`}
          />
          <Badge className="absolute top-4 left-4">{category}</Badge>
        </div>

        <div className={`${featured ? "md:w-1/2" : ""}`}>
          <CardHeader>
            <h3 className={`${featured ? "text-2xl" : "text-xl"} line-clamp-2`}>
              {title}
            </h3>
          </CardHeader>

          <CardContent>
            <p
              className={`text-gray-600 ${
                featured ? "line-clamp-3" : "line-clamp-2"
              }`}
            >
              {excerpt}
            </p>
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm">{author.name}</span>
                <span className="text-xs text-gray-500">{date}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{comments}</span>
              </div>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
