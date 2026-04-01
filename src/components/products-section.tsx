"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Thermometer, Wrench, Info, Plus } from "lucide-react";
import QuoteModal from "./quote-modal";
import NewProductModal from "./new-product-modal";
import EnquiryModal from "./enquiry-modal";

interface ProductsSectionProps {
  selectedCategory?: string | null;
  searchQuery?: string;
}

const ProductsSection = ({ selectedCategory, searchQuery }: ProductsSectionProps) => {
  const [quoteModal, setQuoteModal] = useState<{ isOpen: boolean; productName: string }>({
    isOpen: false,
    productName: ""
  });

  const [newProductModal, setNewProductModal] = useState(false);
  const [enquiryModal, setEnquiryModal] = useState<{ isOpen: boolean; productName: string }>({
    isOpen: false,
    productName: ""
  });


  const handleQuoteClick = (productName: string) => {
    setQuoteModal({ isOpen: true, productName });
  };

  const handleCloseQuoteModal = () => {
    setQuoteModal({ isOpen: false, productName: "" });
  };

  const handleNewProductClick = () => {
    setNewProductModal(true);
  };

  const handleCloseNewProductModal = () => {
    setNewProductModal(false);
  };

  const handleEnquiryClick = (productName: string) => {
    setEnquiryModal({ isOpen: true, productName });
  };

  const handleCloseEnquiryModal = () => {
    setEnquiryModal({ isOpen: false, productName: "" });
  };

  type Product = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    category: string;
    details: Record<string, string>;
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const inferCategory = (title: string): string => {
    const t = title.toLowerCase();
    const fruitKeywords = ["banana", "cantaloupe", "watermelon", "papaya", "pineapple", "lychee", "mango", "jamun"];
    const vegetableKeywords = ["cucumber", "drum stick", "eggplant", "ivy gourd", "okra", "snake gourd", "gawar"];
    
    if (fruitKeywords.some(k => t.includes(k))) return "Fresh Fruits";
    if (vegetableKeywords.some(k => t.includes(k))) return "Organic Vegetables";
    
    return "Agricultural Products";
  };

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      try {
        const [imagesRes, metaRes] = await Promise.all([
          fetch("/api/product-images"),
          fetch("/PRODUCT/product-data.json")
        ]);
        const imagesData = await imagesRes.json();
        const metaData: Record<string, { title?: string; subtitle?: string; details?: Record<string, string> }>
          = await metaRes.json().catch(() => ({}));

        const list: Product[] = (imagesData.images || []).map(
          (img: { fileName: string; url: string }, idx: number) => {
            const baseTitle = img.fileName
              .replace(/\.[^./]+$/, "")
              .replace(/[-_]+/g, " ")
              .trim();
            const meta = metaData[img.fileName] || {};
            const title = meta.title || baseTitle;
            const subtitle = meta.subtitle || "Available";
            const details = meta.details || {};

            return {
              id: idx + 1,
              title,
              subtitle,
              image: img.url,
              category: inferCategory(title),
              details,
            };
          }
        );
        setProducts(list);
      } catch (e) {
        // If fetch fails, keep products empty
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadImages();
  }, []);

  // Filter products based on selected category and search query
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(query) ||
        product.subtitle.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        Object.values(product.details).some(value => 
          value.toString().toLowerCase().includes(query)
        )
      );
    }
    
    return true;
  });

  // Ensure specific agricultural items appear at the end of the list
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const isTailA = /coco\s*peat|makhana/i.test(a.title);
    const isTailB = /coco\s*peat|makhana/i.test(b.title);
    if (isTailA === isTailB) return 0; // keep relative order
    return isTailA ? 1 : -1; // push matches to the end
  });

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Fresh, high-quality fruits and vegetables sourced directly from trusted farmers for global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading state - show loading placeholders
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="group">
                <Card className="h-full shadow-md rounded-2xl border-0 bg-white overflow-hidden animate-pulse">
                  <div className="relative overflow-hidden bg-gray-50 p-4">
                    <div className="w-full h-64 bg-gray-200 rounded-xl" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                      <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="h-10 bg-gray-200 rounded flex-1"></div>
                      <div className="h-10 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          ) : sortedProducts.length > 0 ? (
            sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="group"
              >
                <Card className="h-full shadow-md rounded-2xl border-0 bg-white overflow-hidden">
                  <div className="relative overflow-hidden bg-white p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.subtitle}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {Object.entries(product.details).map(([key, value]) => (
                        <div key={key} className="flex items-center text-sm text-gray-600">
                          {key.includes('Temp') ? (
                            <Thermometer className="h-4 w-4 mr-2 text-primary" />
                          ) : key.includes('material') || key.includes('Material') ? (
                            <Wrench className="h-4 w-4 mr-2 text-primary" />
                          ) : key.includes('protection') || key.includes('Protection') ? (
                            <span className="w-4 h-4 mr-2 text-primary">🛡️</span>
                          ) : key.includes('origin') || key.includes('Origin') ? (
                            <span className="w-4 h-4 mr-2 text-primary">📍</span>
                          ) : key.includes('packaging') || key.includes('Packaging') ? (
                            <span className="w-4 h-4 mr-2 text-primary">📦</span>
                          ) : (
                            <span className="w-4 h-4 mr-2 text-primary">•</span>
                          )}
                          <span className="capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => handleEnquiryClick(product.title)}
                        className="flex-1 border-primary text-primary"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Enquire Now
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => handleQuoteClick(product.title)}
                        className="flex-1 border-gray-300 text-gray-600"
                      >
                        <Info className="h-4 w-4 mr-2" />
                        Send Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                {searchQuery 
                  ? `No products found for "${searchQuery}"`
                  : "No products found for this category."
                }
              </div>
              <p className="text-gray-400">
                {searchQuery 
                  ? "Try a different search term or browse all products."
                  : "Try selecting a different category or browse all products."
                }
              </p>
            </div>
          )}
        </div>

        {/* New Product Request Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don&rsquo;t See What You&rsquo;re Looking For?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We can help you source products not listed above. Send us your requirements and we&rsquo;ll provide you with the best options.
            </p>
            <Button
              onClick={handleNewProductClick}
              className="bg-primary-gradient text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg flex items-center space-x-2 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Request New Product</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModal.isOpen}
        onClose={handleCloseQuoteModal}
        productName={quoteModal.productName}
      />

      {/* New Product Modal */}
      <NewProductModal
        isOpen={newProductModal}
        onClose={handleCloseNewProductModal}
      />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={handleCloseEnquiryModal}
        productName={enquiryModal.productName}
      />
    </section>
  );
};

export default ProductsSection;
