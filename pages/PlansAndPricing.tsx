import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import PayPalCheckout from "@/components/PayPalCheckout";

// Unified feature list for comparison table
const comparisonFeatures = [
  "Real-Time Device Monitoring",
  "Device Registration & Management",
  "Cloud Sync",
  "Basic Alerts",
  "Dashboard View",
  "AI Automation",
  "Predictive Analytics",
  "Enterprise Network Control",
];

const featureAvailability = {
  "signal-lite": [true, true, true, true, true, false, false, false],
  "flow-ai": [true, true, true, true, true, true, true, false],
  "quantum-mesh": [true, true, true, true, true, true, true, true],
};

const plans = [
  {
    id: "signal-lite",
    name: "SignalLite",
    description: "Essential IoT device monitoring",
    price: { monthly: 39, annual: 31 },
    features: [
      { name: "Real-Time Device Monitoring", included: true },
      { name: "Device Registration & Management", included: true },
      { name: "Cloud Sync", included: true },
      { name: "Basic Alerts", included: true },
      { name: "Dashboard View", included: true },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "flow-ai",
    name: "FlowAI",
    description: "AI-driven automation and insights",
    price: { monthly: 119, annual: 95 },
    features: [
      { name: "Everything in SignalLite", included: true, inherited: true },
      { name: "AI Automation Engine", included: true },
      { name: "Predictive Analytics", included: true },
      { name: "Smart Workflows", included: true },
      { name: "Enhanced Alerts & Reporting", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Analytics Export", included: true },
      { name: "Priority Support", included: true },
    ],
    cta: "Upgrade Now",
    popular: true,
  },
  {
    id: "quantum-mesh",
    name: "QuantumMesh",
    description: "Complete enterprise IoT solution",
    price: { monthly: null, annual: null },
    features: [
      { name: "Everything in FlowAI", included: true, inherited: true },
      { name: "Enterprise Device Network Management", included: true },
      { name: "Advanced Predictive Analytics", included: true },
      { name: "Full Security & Encryption", included: true },
      { name: "Priority SLA Support", included: true },
      { name: "Custom AI Models", included: true },
      { name: "Multi-Site Management", included: true },
      { name: "Dedicated Account Manager", included: true },
    ],
    cta: "Schedule Demo",
    popular: false,
  },
];

const PlansAndPricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [checkoutModal, setCheckoutModal] = useState({
    isOpen: false,
    plan: {
      name: "",
      price: 0,
      description: "",
      billing: "monthly" as "monthly" | "annual",
    },
  });

  const handleCheckout = (plan: typeof plans[0]) => {
    // Show checkout for all plans
    let selectedPrice = 0;
    let billing: "monthly" | "annual" = "monthly";

    if (plan.id === "quantum-mesh") {
      // For QuantumMesh, set a demo price or use a fixed price
      selectedPrice = 299; // Demo/Contact price
      billing = "monthly";
    } else if (plan.price.monthly !== null) {
      selectedPrice = isAnnual ? plan.price.annual : plan.price.monthly;
      billing = isAnnual ? "annual" : "monthly";
    }

    setCheckoutModal({
      isOpen: true,
      plan: {
        name: plan.name,
        price: selectedPrice,
        description: plan.description,
        billing: billing,
      },
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-12 md:py-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
          style={{ backgroundImage: 'url(/pic/18.svg)', willChange: 'transform' }}
          role="img"
          aria-label="Pricing background"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Pricing
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-hero font-bold text-white drop-shadow-lg mb-6">
              Power Your IoT, Pay Your Way
            </h1>
            <p className="text-lg text-white mb-8">
              Experience intelligent automation, predictive insights, and real-time device control with plans designed for innovators and enterprises alike.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span
                className={cn(
                  "text-sm transition-colors",
                  !isAnnual ? "text-white/90" : "text-white/60"
                )}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 rounded-full bg-muted border border-border"
              >
                <motion.div
                  animate={{ x: isAnnual ? 26 : 2 }}
                  className="absolute top-1 w-5 h-5 rounded-full bg-accent"
                />
              </button>
              <span
                className={cn(
                  "text-sm transition-colors",
                  isAnnual ? "text-white/90" : "text-white/60"
                )}
              >
                Annual
                <span className="ml-2 text-xs text-accent">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section className="-mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative p-6 md:p-8 rounded-2xl border",
                plan.popular
                  ? "bg-accent/5 border-accent shadow-glow"
                  : "bg-gradient-card border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price.monthly ? (
                    <>
                      <span className="text-4xl font-heading font-bold text-foreground">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  ) : (
                    <span className="text-2xl font-heading font-bold text-foreground">
                      Custom
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "accent" : "outline"}
                className="w-full"
                onClick={() => handleCheckout(plan)}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Feature Comparison */}
      <Section className="bg-gradient-to-br from-[#000000] via-[#0A4531]/95 to-[#000000] border-y-2 border-[#DA9928] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#DA9928]/10 to-transparent" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#DA9928]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#0A4531]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <SectionHeader
            title="Compare All Features"
            description="See exactly what's included in each plan"
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#DA9928]/50">
                  <th className="text-left py-4 font-bold text-[#DA9928] text-lg">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 font-bold text-[#DA9928] text-lg">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, featureIndex) => (
                  <tr key={feature} className="border-b border-[#DA9928]/20">
                    <td className="py-4 text-sm text-gray-300 font-medium">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4">
                        {featureAvailability[plan.id as keyof typeof featureAvailability]?.[featureIndex] ? (
                          <Check className="w-6 h-6 text-[#DA9928] mx-auto drop-shadow-lg" />
                        ) : (
                          <X className="w-6 h-6 text-gray-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ/CTA Section */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions About IoT Pricing?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team is ready to help you find the perfect plan for your IoT deployment.
            Schedule a call to discuss custom enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/about-contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* PayPal Checkout Modal */}
      <PayPalCheckout
        isOpen={checkoutModal.isOpen}
        onClose={() => setCheckoutModal({ ...checkoutModal, isOpen: false })}
        plan={checkoutModal.plan}
      />
    </Layout>
  );
};

export default PlansAndPricing;
