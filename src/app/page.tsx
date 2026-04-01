import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ClientsSection from "@/components/clients-section";
import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";

export const metadata = {
  title: "KISAN CARTS - Fresh Fruits & Vegetables Exporter | Mumbai",
  description: "KISAN CARTS is a leading exporter of farm-fresh fruits and vegetables in Mumbai. Quality produce, timely delivery, and global standards of safety and freshness.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
