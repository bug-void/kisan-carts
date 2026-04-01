import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";

export const metadata = {
  title: "Contact Us - KISAN CARTS | Fresh Fruits & Vegetables Exporter",
  description: "Contact KISAN CARTS for your farm-fresh fruits and vegetables export needs. Quality produce, timely delivery, and customer satisfaction.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 pb-16 md:pb-0">
        <ContactSection />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
