import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
import Index from "./pages/Index";
import PlatformFeatures from "./pages/PlatformFeatures";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import PlansAndPricing from "./pages/PlansAndPricing";
import AboutAndContact from "./pages/AboutAndContact";
import ApiDocumentation from "./pages/ApiDocumentation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Wrapper component to handle scroll to top on route changes
const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/platform-features" element={<PlatformFeatures />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/plans-pricing" element={<PlansAndPricing />} />
      <Route path="/api-documentation" element={<ApiDocumentation />} />
      <Route path="/about-contact" element={<AboutAndContact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
