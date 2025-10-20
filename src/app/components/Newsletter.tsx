import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12 my-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
          <Mail className="w-8 h-8" />
        </div>
        <h2 className="text-3xl mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-8">
          Get the latest articles and insights delivered directly to your inbox every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white text-gray-900 flex-1"
          />
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Subscribe
          </Button>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
