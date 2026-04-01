"use client";

import { Linkedin, Mail, MessageCircle, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            {/* Logo removed as requested */}
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">TRUSTED SELLER</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Your trusted partner for fresh fruits and vegetables export
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/company/kisan-carts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a
              href="mailto:support@kisancarts.com"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"
            >
              <Mail className="h-6 w-6" />
            </a>
            
            <a
              href="https://wa.me/917738402118"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 KISAN CARTS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
