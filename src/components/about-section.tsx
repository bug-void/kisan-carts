"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Globe, Award, Factory, TrendingUp, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What products do you offer?",
      a: "We specialize in exporting and supplying fresh fruits and vegetables sourced directly from trusted farmers. Our products are carefully selected to ensure freshness, quality, and nutritional value."
    },
    {
      q: "How do you ensure product freshness?",
      a: "We follow strict quality checks, proper packaging, and efficient cold-chain logistics to maintain the freshness of fruits and vegetables from farm to delivery."
    },
    {
      q: "Do you source directly from farmers?",
      a: "Yes, we work directly with farmers to ensure fair pricing, better quality control, and transparency in the supply chain."
    },
    {
      q: "What types of fruits and vegetables are available?",
      a: "We offer a wide range of seasonal and exotic fruits and vegetables including mangoes, bananas, grapes, onions, potatoes, leafy vegetables, and more."
    },
    {
      q: "Do you provide bulk export services?",
      a: "Yes, we specialize in bulk supply and export of fruits and vegetables, ensuring timely delivery and compliance with international standards."
    },
    {
      q: "How can I place an order or inquiry?",
      a: "You can contact us through our website, submit an inquiry form, or directly connect with our team for bulk orders and export requirements."
    },
    {
      q: "What quality standards do you follow?",
      a: "We follow international export standards and maintain strict hygiene, grading, and packaging practices to ensure premium quality products"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About KISAN CARTS
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full" />
        </motion.div>

        {/* Company Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-lg rounded-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Company Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are a dedicated fruits and vegetables export company focused on delivering fresh, high-quality produce to global markets. We work closely with trusted farmers to ensure that every product meets international standards of quality, safety, and freshness.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-primary/5 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To provide farm-fresh fruits and vegetables directly to customers while maintaining transparency, quality, and efficiency in the supply chain.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To become a leading global exporter of fresh produce by building strong relationships with farmers and customers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-lg rounded-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Core Values
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Quality First", desc: "We ensure only the best products are delivered." },
                  { title: "Freshness", desc: "Maintaining natural freshness from farm to delivery." },
                  { title: "Integrity", desc: "Transparent and fair business practices." },
                  { title: "Customer Satisfaction", desc: "Meeting client needs with reliability." }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900 block">{value.title}</span>
                      <span className="text-gray-700">{value.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quality Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-lg rounded-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Our Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                We follow strict quality control processes including grading, sorting, hygienic packaging, and proper storage. Our logistics ensure timely delivery while preserving product freshness and nutritional value.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-8 w-8 text-primary" />
              Fruits & Vegetables FAQ
            </h2>
            <div className="w-16 h-1 bg-primary-gradient mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-bold text-gray-900 pr-8">{`Q${index + 1}: ${faq.q}`}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-white"
                >
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                </motion.div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
