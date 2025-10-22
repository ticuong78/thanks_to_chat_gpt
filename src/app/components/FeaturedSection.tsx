import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeaturedSectionProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export function FeaturedSection({
  image,
  category,
  title,
  excerpt,
  author,
  date,
}: FeaturedSectionProps) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <Badge className="mb-4" variant="secondary">
          {category}
        </Badge>
        <h2 className="text-4xl mb-4 max-w-3xl">{title}</h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span>By {author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
          <Button
            variant="outline"
            className="
              bg-gray-100 border-none
              text-black hover:bg-gray-200
              rounded-md shadow-sm hover:shadow-md
              transition-all duration-200
            "
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
