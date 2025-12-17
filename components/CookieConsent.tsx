import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => setShowCookie(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookie(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowCookie(false);
  };

  const handleClose = () => {
    setShowCookie(false);
  };

  return (
    <AnimatePresence>
      {showCookie && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 max-w-md"
        >
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#DA9928]/20 to-[#0A4531]/20 rounded-2xl blur-lg" />

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-[#DA9928]/50 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex gap-4">
              {/* Cookie Icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#DA9928] to-[#FFD700] flex items-center justify-center shadow-lg">
                  <Cookie className="w-6 h-6 text-black" />
                </div>
              </motion.div>

              {/* Text */}
              <div className="flex-1 pr-4">
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Cookie Preferences
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We use cookies to enhance your experience, analyze traffic, and for marketing purposes. By accepting, you consent to our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#DA9928] hover:text-[#FFD700] transition-colors underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-700/50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDecline}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-all font-medium text-sm"
              >
                Decline
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#DA9928] to-[#FFD700] hover:from-[#FFD700] hover:to-[#DA9928] text-black font-bold text-sm shadow-lg shadow-[#DA9928]/30 transition-all"
              >
                Accept All
              </motion.button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#DA9928]/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#0A4531]/5 rounded-full translate-x-12 translate-y-12 blur-2xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
