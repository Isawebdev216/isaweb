import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CardPaymentFormProps {
  isOpen: boolean;
  onBack: () => void;
  onSubmit: (cardData: CardData) => void;
  isLoading: boolean;
  plan: {
    name: string;
    price: number;
    description: string;
    billing: "monthly" | "annual";
  };
}

export interface CardData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  email: string;
}

const CardPaymentForm = ({
  isOpen,
  onBack,
  onSubmit,
  isLoading,
  plan,
}: CardPaymentFormProps) => {
  const [formData, setFormData] = useState<CardData>({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    email: "",
  });

  const [showCvv, setShowCvv] = useState(false);
  const [errors, setErrors] = useState<Partial<CardData>>({});

  const validateForm = () => {
    const newErrors: Partial<CardData> = {};

    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = "Cardholder name is required";
    }

    if (!formData.cardNumber.replace(/\s/g, "").match(/^\d{13,19}$/)) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      newErrors.expiryDate = "Use MM/YY format";
    }

    if (!formData.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = "Invalid CVV";
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, "");
    value = value.replace(/(\d{4})/g, "$1 ").trim();
    setFormData({ ...formData, cardNumber: value });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setFormData({ ...formData, expiryDate: value });
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setFormData({ ...formData, cvv: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Cardholder Name */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            value={formData.cardholderName}
            onChange={(e) =>
              setFormData({ ...formData, cardholderName: e.target.value })
            }
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/10 border-2 text-white placeholder-white/50",
              "transition-colors focus:outline-none focus:bg-white/15",
              errors.cardholderName ? "border-red-500" : "border-[#DA9928]/30"
            )}
            placeholder="Enter  your name "
            disabled={isLoading}
          />
          {errors.cardholderName && (
            <p className="text-red-400 text-xs mt-1">{errors.cardholderName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/10 border-2 text-white placeholder-white/50",
              "transition-colors focus:outline-none focus:bg-white/15",
              errors.email ? "border-red-500" : "border-[#DA9928]/30"
            )}
            placeholder="Enter your email address"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Card Number
          </label>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={handleCardNumberChange}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/10 border-2 text-white placeholder-white/50",
              "transition-colors focus:outline-none focus:bg-white/15 font-mono tracking-widest",
              errors.cardNumber ? "border-red-500" : "border-[#DA9928]/30"
            )}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            disabled={isLoading}
          />
          {errors.cardNumber && (
            <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>
          )}
        </div>

        {/* Expiry and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              value={formData.expiryDate}
              onChange={handleExpiryChange}
              className={cn(
                "w-full px-4 py-3 rounded-lg bg-white/10 border-2 text-white placeholder-white/50",
                "transition-colors focus:outline-none focus:bg-white/15 font-mono",
                errors.expiryDate ? "border-red-500" : "border-[#DA9928]/30"
              )}
              placeholder="MM/YY"
              maxLength={5}
              disabled={isLoading}
            />
            {errors.expiryDate && (
              <p className="text-red-400 text-xs mt-1">{errors.expiryDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              CVV
            </label>
            <div className="relative">
              <input
                type={showCvv ? "text" : "password"}
                value={formData.cvv}
                onChange={handleCvvChange}
                className={cn(
                  "w-full px-4 py-3 rounded-lg bg-white/10 border-2 text-white placeholder-white/50",
                  "transition-colors focus:outline-none focus:bg-white/15 font-mono pr-10",
                  errors.cvv ? "border-red-500" : "border-[#DA9928]/30"
                )}
                placeholder="123"
                maxLength={4}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowCvv(!showCvv)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                disabled={isLoading}
              >
                {showCvv ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.cvv && (
              <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            disabled={isLoading}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-gradient-to-r from-[#DA9928] to-[#C87D1F] hover:from-[#E5A535] hover:to-[#D98A2B] text-[#0A4531] font-semibold"
          >
            {isLoading ? "Processing..." : `Pay $${plan.price}`}
          </Button>
        </div>
      </form>

      {/* Security Info */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-white/60 pt-2">
        <Lock className="w-4 h-4 text-[#DA9928]" />
        <span>Your payment information is secure and encrypted</span>
      </div>
    </motion.div>
  );
};

export default CardPaymentForm;
