import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Toaster } from "@/app/components/ui/sonner";
import HomePage from "@/app/home/page";

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
