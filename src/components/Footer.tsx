import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl mb-4">BlogSpace</h3>
            <p className="text-sm">
              Your go-to destination for insightful articles on technology, lifestyle, travel, and more.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Technology</a></li>
              <li><a href="#" className="hover:text-white transition">Lifestyle</a></li>
              <li><a href="#" className="hover:text-white transition">Travel</a></li>
              <li><a href="#" className="hover:text-white transition">Food</a></li>
              <li><a href="#" className="hover:text-white transition">Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 BlogSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
