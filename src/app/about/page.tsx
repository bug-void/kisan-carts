import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";

export const metadata = {
  title: "About Us - KISAN CARTS | Fresh Fruits & Vegetables Exporter",
  description: "Learn about KISAN CARTS, a leading exporter of farm-fresh fruits and vegetables in Mumbai. Our commitment to quality, freshness, and customer satisfaction.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <AboutSection />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
