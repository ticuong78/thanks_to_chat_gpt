import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { HomePage } from "@/app/home/page";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
      <Toaster />
    </div>
  );
}
