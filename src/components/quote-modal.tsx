"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calculator, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const QuoteModal = ({ isOpen, onClose, productName }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    quantity: "",
    amount: "",
    currency: "INR",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello KISAN CARTS,

I would like to request a quote for:

Product: ${productName}
Quantity: ${formData.quantity}
${formData.amount ? `Expected Amount: ${formData.currency === 'INR' ? '₹' : formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : formData.currency}${formData.amount}` : ''}
${formData.message ? `Additional Requirements: ${formData.message}` : ''}

Please provide me with the best quote for this product.

Thank you!`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917738402118?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({ quantity: "", amount: "", currency: "INR", message: "" });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calculator className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Request Quote</h2>
                    <p className="text-sm text-gray-600">Get pricing for this product</p>
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
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Product
                  </Label>
                  <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <Package className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{productName}</span>
                  </div>
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
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="Enter quantity"
                  />
                </div>

                {/* Currency */}
                <div>
                  <Label htmlFor="currency" className="text-sm font-medium text-gray-700">
                    Currency (Optional)
                  </Label>
                  <select
                    id="currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-xl focus:border-primary focus:ring-primary bg-white"
                  >
                    <option value="INR">₹ INR - Indian Rupee</option>
                    <option value="USD">$ USD - US Dollar</option>
                    <option value="EUR">€ EUR - Euro</option>
                    <option value="GBP">£ GBP - British Pound</option>
                    <option value="JPY">¥ JPY - Japanese Yen</option>
                    <option value="AUD">A$ AUD - Australian Dollar</option>
                    <option value="CAD">C$ CAD - Canadian Dollar</option>
                    <option value="CHF">CHF - Swiss Franc</option>
                    <option value="CNY">¥ CNY - Chinese Yuan</option>
                    <option value="SEK">kr SEK - Swedish Krona</option>
                    <option value="NZD">NZ$ NZD - New Zealand Dollar</option>
                    <option value="MXN">$ MXN - Mexican Peso</option>
                    <option value="SGD">S$ SGD - Singapore Dollar</option>
                    <option value="HKD">HK$ HKD - Hong Kong Dollar</option>
                    <option value="NOK">kr NOK - Norwegian Krone</option>
                    <option value="TRY">₺ TRY - Turkish Lira</option>
                    <option value="RUB">₽ RUB - Russian Ruble</option>
                    <option value="BRL">R$ BRL - Brazilian Real</option>
                    <option value="ZAR">R ZAR - South African Rand</option>
                    <option value="KRW">₩ KRW - South Korean Won</option>
                    <option value="AED">د.إ AED - UAE Dirham</option>
                    <option value="SAR">﷼ SAR - Saudi Riyal</option>
                    <option value="QAR">﷼ QAR - Qatari Riyal</option>
                    <option value="KWD">د.ك KWD - Kuwaiti Dinar</option>
                    <option value="BHD">د.ب BHD - Bahraini Dinar</option>
                    <option value="OMR">﷼ OMR - Omani Rial</option>
                    <option value="JOD">د.ا JOD - Jordanian Dinar</option>
                    <option value="LBP">ل.ل LBP - Lebanese Pound</option>
                    <option value="EGP">ج.م EGP - Egyptian Pound</option>
                    <option value="MAD">د.م MAD - Moroccan Dirham</option>
                    <option value="TND">د.ت TND - Tunisian Dinar</option>
                    <option value="DZD">د.ج DZD - Algerian Dinar</option>
                    <option value="THB">฿ THB - Thai Baht</option>
                    <option value="MYR">RM MYR - Malaysian Ringgit</option>
                    <option value="IDR">Rp IDR - Indonesian Rupiah</option>
                    <option value="PHP">₱ PHP - Philippine Peso</option>
                    <option value="VND">₫ VND - Vietnamese Dong</option>
                    <option value="PKR">₨ PKR - Pakistani Rupee</option>
                    <option value="BDT">৳ BDT - Bangladeshi Taka</option>
                    <option value="LKR">₨ LKR - Sri Lankan Rupee</option>
                    <option value="NPR">₨ NPR - Nepalese Rupee</option>
                    <option value="MMK">K MMK - Myanmar Kyat</option>
                    <option value="KHR">៛ KHR - Cambodian Riel</option>
                    <option value="LAK">₭ LAK - Lao Kip</option>
                    <option value="ILS">₪ ILS - Israeli Shekel</option>
                    <option value="PLN">zł PLN - Polish Zloty</option>
                    <option value="CZK">Kč CZK - Czech Koruna</option>
                    <option value="HUF">Ft HUF - Hungarian Forint</option>
                    <option value="RON">lei RON - Romanian Leu</option>
                    <option value="BGN">лв BGN - Bulgarian Lev</option>
                    <option value="HRK">kn HRK - Croatian Kuna</option>
                    <option value="DKK">kr DKK - Danish Krone</option>
                    <option value="ISK">kr ISK - Icelandic Krona</option>
                    <option value="UAH">₴ UAH - Ukrainian Hryvnia</option>
                    <option value="BYN">Br BYN - Belarusian Ruble</option>
                    <option value="MDL">L MDL - Moldovan Leu</option>
                    <option value="GEL">₾ GEL - Georgian Lari</option>
                    <option value="AMD">֏ AMD - Armenian Dram</option>
                    <option value="AZN">₼ AZN - Azerbaijani Manat</option>
                    <option value="KZT">₸ KZT - Kazakhstani Tenge</option>
                    <option value="UZS">лв UZS - Uzbekistani Som</option>
                    <option value="KGS">лв KGS - Kyrgyzstani Som</option>
                    <option value="TJS">SM TJS - Tajikistani Somoni</option>
                    <option value="TMT">T TMT - Turkmenistani Manat</option>
                    <option value="AFN">؋ AFN - Afghan Afghani</option>
                    <option value="IRR">﷼ IRR - Iranian Rial</option>
                    <option value="IQD">ع.د IQD - Iraqi Dinar</option>
                    <option value="SYP">£ SYP - Syrian Pound</option>
                    <option value="YER">﷼ YER - Yemeni Rial</option>
                    <option value="ETB">Br ETB - Ethiopian Birr</option>
                    <option value="KES">KSh KES - Kenyan Shilling</option>
                    <option value="UGX">USh UGX - Ugandan Shilling</option>
                    <option value="TZS">TSh TZS - Tanzanian Shilling</option>
                    <option value="RWF">RF RWF - Rwandan Franc</option>
                    <option value="GHS">₵ GHS - Ghanaian Cedi</option>
                    <option value="NGN">₦ NGN - Nigerian Naira</option>
                    <option value="XOF">CFA XOF - West African CFA Franc</option>
                    <option value="XAF">FCFA XAF - Central African CFA Franc</option>
                  </select>
                </div>

                {/* Amount */}
                <div>
                  <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                    Expected Amount (Optional)
                  </Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="Enter expected amount"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 rounded-xl border-gray-300 focus:border-primary focus:ring-primary resize-none"
                    placeholder="Any specific requirements or questions..."
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

export default QuoteModal;
