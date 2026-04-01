"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, User, Package, Phone, PhoneCall } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();

  const navItems = [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "about", icon: User, label: "About", href: "/about" },
    { id: "products", icon: Package, label: "Products", href: "/products" },
    { id: "contact", icon: Phone, label: "Contact", href: "/contact" },
    { id: "call", icon: PhoneCall, label: "Call", href: "tel:+917738402118" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg transform-gpu">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 relative ${
                isActive ? "text-primary" : "text-gray-500"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-gray-500"}`} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
