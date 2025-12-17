import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CardPaymentForm, { CardData } from "@/components/CardPaymentForm";

// Extend window for PayPal SDK
declare global {
  interface Window {
    paypal?: any;
  }
}

interface PayPalCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: number;
    description: string;
    billing: "monthly" | "annual";
  };
}

const PayPalCheckout = ({ isOpen, onClose, plan }: PayPalCheckoutProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStep, setPaymentStep] = useState<"selection" | "card" | "processing" | "success">("selection");
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "card" | null>(null);
  
  const isEnterprise = plan.price === 0 && plan.name === "QuantumMesh";

  const PAYPAL_CLIENT_ID = "ARy338VDhRe5v18q9CvV3rQrFzsy1QfHlW4ZC4O08_3M246E4-9hlg_lss6sfkAe_sqxu8soaMq23WAK";

  const handlePayPalClick = () => {
    setPaymentMethod("paypal");
    setIsLoading(true);
    setPaymentStep("processing");

    // Load PayPal SDK with your client ID
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: plan.price.toString(),
                  currency_code: "USD"
                },
                description: `${plan.name} - ${plan.billing} plan`
              }]
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              console.log("Payment successful:", details);
              setPaymentStep("success");
              setTimeout(() => {
                onClose();
                setPaymentStep("selection");
                setPaymentMethod(null);
                setIsLoading(false);
              }, 2000);
            });
          },
          onError: (err: any) => {
            console.error("PayPal error:", err);
            alert("An error occurred during payment. Please try again.");
            setPaymentStep("selection");
            setPaymentMethod(null);
            setIsLoading(false);
          }
        }).render("#paypal-button-container");
      }
    };
    document.body.appendChild(script);
  };

  const handleCardClick = () => {
    setPaymentMethod("card");
    setPaymentStep("card");
  };

  const handleCardSubmit = (cardData: CardData) => {
    setIsLoading(true);
    setPaymentStep("processing");

    // Simulate card processing
    setTimeout(() => {
      // In production, you would send this to your backend to process with Stripe or another payment processor
      console.log("Card payment submitted:", cardData);
      
      setPaymentStep("success");
      setTimeout(() => {
        onClose();
        setPaymentStep("selection");
        setPaymentMethod(null);
        setIsLoading(false);
      }, 2000);
    }, 1500);
  };

  const handleBackToSelection = () => {
    setPaymentStep("selection");
    setPaymentMethod(null);
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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="w-full max-w-md bg-gradient-to-br from-[#0A4531]/95 via-[#000000]/95 to-[#000000]/95 rounded-3xl border-2 border-[#DA9928]/30 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative p-6 border-b border-[#DA9928]/20 bg-gradient-to-r from-[#DA9928]/10 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white font-heading">
                      Checkout
                    </h2>
                    <p className="text-sm text-[#DA9928] mt-1">
                      Complete your purchase securely
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Order Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-4 border border-[#DA9928]/20"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-semibold text-lg">{plan.name}</p>
                        <p className="text-sm text-[#DA9928] mt-1">{plan.description}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-[#DA9928]/20">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">
                          {plan.billing === "annual" ? "Annual Plan" : "Monthly Plan"}
                        </span>
                        <span className="text-2xl font-bold text-[#DA9928]">
                          ${plan.price}
                        </span>
                      </div>
                      <p className="text-xs text-white/50 mt-2">
                        /{plan.billing === "annual" ? "year" : "month"}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Payment Methods Selection */}
                {paymentStep === "selection" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {isEnterprise ? (
                      // Enterprise/Contact Sales Message
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-[#DA9928]/20 to-[#0A4531]/20 rounded-2xl p-6 border-2 border-[#DA9928]/50">
                          <h3 className="text-white font-semibold text-lg mb-3">
                            Enterprise Plan
                          </h3>
                          <p className="text-white/80 mb-4">
                            Our QuantumMesh enterprise plan is fully customizable based on your specific needs. 
                          </p>
                          <ul className="space-y-2 text-white/70 text-sm mb-4">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#DA9928] rounded-full" />
                              Custom pricing and deployment
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#DA9928] rounded-full" />
                              Dedicated support team
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#DA9928] rounded-full" />
                              SLA guarantees
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#DA9928] rounded-full" />
                              Custom integrations
                            </li>
                          </ul>
                          <p className="text-[#DA9928] text-sm font-medium">
                            Contact our sales team to discuss your requirements
                          </p>
                        </div>

                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-[#DA9928] to-[#C87D1F] hover:from-[#E5A535] hover:to-[#D98A2B] text-[#0A4531] font-semibold py-3"
                        >
                          <a href="/about-contact">
                            Contact Sales Team
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <>
                        {/* PayPal Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handlePayPalClick}
                          disabled={isLoading}
                          className={cn(
                            "w-full py-3 px-4 rounded-xl font-semibold text-lg transition-all",
                            "bg-gradient-to-r from-[#0070BA] to-[#003087] hover:from-[#005EA6] hover:to-[#002b6c]",
                            "text-white border-2 border-[#0070BA]/50",
                            "flex items-center justify-center gap-2",
                            "disabled:opacity-50 disabled:cursor-not-allowed"
                          )}
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.645V.645A.641.641 0 0 1 2.47 0h4.606a.657.657 0 0 1 .646.645v20.047a.641.641 0 0 1-.646.645zm11.313 0h-4.606a.641.641 0 0 1-.646-.645V.645A.641.641 0 0 1 13.783 0h4.606a.657.657 0 0 1 .646.645v20.047a.641.641 0 0 1-.646.645zm-5.393-5.538H8.69V5.538h4.306v10.199z" />
                          </svg>
                          Pay with PayPal
                        </motion.button>

                        {/* Card Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleCardClick}
                          disabled={isLoading}
                          className={cn(
                            "w-full py-3 px-4 rounded-xl font-semibold text-lg transition-all",
                            "bg-gradient-to-r from-[#DA9928] to-[#C87D1F] hover:from-[#E5A535] hover:to-[#D98A2B]",
                            "text-[#0A4531] border-2 border-[#DA9928]/50",
                            "flex items-center justify-center gap-2",
                            "disabled:opacity-50 disabled:cursor-not-allowed"
                          )}
                        >
                          <CreditCard className="w-5 h-5" />
                          Pay with Card
                        </motion.button>
                      </>
                    )}

                    {/* Security Badge */}
                    <div className="flex items-center justify-center gap-1.5 text-xs text-white/60 mt-4">
                      <Lock className="w-4 h-4 text-[#DA9928]" />
                      <span>Your payment is secure and encrypted</span>
                    </div>
                  </motion.div>
                )}

                {/* Card Payment Form */}
                {paymentStep === "card" && (
                  <CardPaymentForm
                    isOpen={true}
                    onBack={handleBackToSelection}
                    onSubmit={handleCardSubmit}
                    isLoading={isLoading}
                    plan={plan}
                  />
                )}

                {/* Processing State */}
                {paymentStep === "processing" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    {paymentMethod === "paypal" ? (
                      <div id="paypal-button-container"></div>
                    ) : (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-12 h-12 border-3 border-[#DA9928]/30 border-t-[#DA9928] rounded-full"
                        />
                        <p className="text-white mt-4 text-center font-medium">
                          Processing your payment...
                        </p>
                        <p className="text-white/60 text-sm mt-2">
                          Please don't close this window
                        </p>
                      </>
                    )}
                  </motion.div>
                )}

                {/* Success State */}
                {paymentStep === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#DA9928] to-[#C87D1F] rounded-full flex items-center justify-center mb-4"
                    >
                      <svg
                        className="w-8 h-8 text-[#0A4531]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <p className="text-white text-xl font-bold text-center">
                      Payment Successful!
                    </p>
                    <p className="text-white/60 text-sm mt-2 text-center">
                      Your subscription is now active
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gradient-to-r from-[#0A4531]/10 to-transparent border-t border-[#DA9928]/20">
                <p className="text-xs text-white/50 text-center">
                  By proceeding, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PayPalCheckout;
