"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Package, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface NewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProductModal = ({ isOpen, onClose }: NewProductModalProps) => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    quantity: "",
    specifications: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello KISAN CARTS,

I would like to request a new product that is not listed on your website:

Product Name: ${formData.productName}
Category: ${formData.category}
Quantity: ${formData.quantity}
Specifications: ${formData.specifications}
${formData.message ? `Additional Requirements: ${formData.message}` : ''}

Please help me source this product and provide the best options available.

Thank you!`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917738402118?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({ productName: "", category: "", quantity: "", specifications: "", message: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Plus className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Request New Product</h2>
                    <p className="text-sm text-gray-600">We&rsquo;ll help you source it</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Product Name */}
                <div>
                  <Label htmlFor="productName" className="text-sm font-medium text-gray-700">
                    Product Name *
                  </Label>
                  <Input
                    id="productName"
                    name="productName"
                    type="text"
                    value={formData.productName}
                    onChange={handleChange}
                    required
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="Enter product name"
                  />
                </div>

                {/* Category */}
                <div>
                  <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                    Category *
                  </Label>
                  <Input
                    id="category"
                    name="category"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="e.g., Seasonal Fruits, Root Vegetables, etc."
                  />
                </div>

                {/* Quantity */}
                <div>
                  <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                    Quantity *
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    min="1"
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="Enter quantity needed"
                  />
                </div>

                {/* Specifications */}
                <div>
                  <Label htmlFor="specifications" className="text-sm font-medium text-gray-700">
                    Technical Specifications *
                  </Label>
                  <Textarea
                    id="specifications"
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary resize-none"
                    placeholder="Material, dimensions, certifications, etc."
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Additional Requirements (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary resize-none"
                    placeholder="Any specific requirements, delivery timeline, etc."
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary-gradient text-white"
                  >
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewProductModal;
