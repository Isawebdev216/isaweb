import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Server,
  Code,
  Cloud,
  Brain,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const useCases = [
  {
    id: "smart-device-management",
    icon: Server,
    title: "Smart Device Management",
    subtitle: "Centralized Device Control",
    description:
      "Easily manage, configure, group, and monitor all connected IoT devices through a unified control panel built for speed and scalability.",
    benefits: [
      "Remote Device Updates",
      "Centralized Configuration Tools",
      "Real-Time Device Health",
    ],
    metrics: [
      { label: "Management", value: "+35% Faster Management" },
      { label: "Visibility", value: "+40% Better Visibility" },
    ],
  },
  {
    id: "ai-automation-engine",
    icon: Brain,
    title: "AI Automation Engine",
    subtitle: "Intelligent Workflow Automation",
    description:
      "Automate complex operations with AI-driven rules that trigger actions instantly based on device behavior, patterns, and operational conditions.",
    benefits: [
      "Behavior-Based Triggers",
      "Automated Response Flows",
      "Adaptive Decision Logic",
    ],
    metrics: [
      { label: "Workflow Efficiency", value: "+50% Workflow Efficiency" },
      { label: "Manual Tasks", value: "+45% Reduced Manual Tasks" },
    ],
  },
  {
    id: "predictive-analytics-suite",
    icon: BarChart3,
    title: "Predictive Analytics Suite",
    subtitle: "Forecast Operational Issues",
    description:
      "Use machine learning to forecast failures, detect anomalies, and optimize performance before disruptions impact critical operations or device networks.",
    benefits: [
      "Future Trend Forecasting",
      "Early Fault Detection",
      "Performance Optimization Tools",
    ],
    metrics: [
      { label: "Issue Detection Rate", value: "+60% Issue Detection Rate" },
      { label: "Performance Accuracy", value: "+55% Performance Accuracy" },
    ],
  },
  {
    id: "secure-cloud-sync",
    icon: Cloud,
    title: "Secure Cloud Sync",
    subtitle: "Encrypted Data Connectivity",
    description:
      "Sync device data securely through encrypted communication, ensuring reliability, privacy, and stable performance across large distributed IoT environments.",
    benefits: [
      "Encrypted Data Channels",
      "Reliable Cloud Connectivity",
      "Enterprise-Grade Protection",
    ],
    metrics: [
      { label: "Data Stability", value: "+70% Data Stability" },
      { label: "Encryption Reliability", value: "+80% Encryption Reliability" },
    ],
  },
];

const UseCases = () => {
  const [selectedCase, setSelectedCase] = useState<typeof useCases[0] | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-12 md:py-12">
        <div
          className="absolute inset-0 z-0 bg-black"
          style={{
            backgroundImage: "url('/pic/17.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform'
          }}
          role="img"
          aria-label="Use Cases background"
        />
        {/* darker translucent overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-hero font-bold text-white drop-shadow-lg mb-6">
             Powering Smart IoT Solutions Across{" "}
              <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="text-lg text-white">
              Our AI-driven IoT platform adapts to diverse environments, delivering automation, real-time intelligence, and predictive performance wherever it’s needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Section Breaker - Hero to Core Features */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated curved arcs */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <svg
                  width="40"
                  height="30"
                  viewBox="0 0 40 30"
                  className="overflow-visible"
                >
                  <motion.path
                    d={`M5,25 Q20,${5 + i * 2} 35,25`}
                    stroke={`url(#arcGradientUC${i})`}
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                  />
                  <defs>
                    <linearGradient id={`arcGradientUC${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DA9928" />
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#DA9928" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Moving light effect */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute left-1/4 top-1/3 w-2 h-2 bg-[#DA9928] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-1/4 top-2/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Core Features Section */}
      <Section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Textual content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Core Capabilities
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Capabilities Behind Every IoT Use Case
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI-powered features designed to support diverse industries with real-time intelligence, automation, and reliable performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-card border border-border">
                  <h4 className="font-medium text-foreground">Real-Time Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Track live device status, performance metrics, and operational activity across any environment instantly.</p>
                </div>
                <div className="p-4 bg-card border border-border">
                  <h4 className="font-medium text-foreground">Smart Automation</h4>
                  <p className="text-sm text-muted-foreground">Automate workflows and trigger intelligent actions based on real-time device behavior and patterns.</p>
                </div>
                <div className="p-4 bg-card border border-border">
                  <h4 className="font-medium text-foreground">Predictive Insights</h4>
                  <p className="text-sm text-muted-foreground">Identify upcoming failures, performance drops, and anomalies before they impact operations.</p>
                </div>
                <div className="p-4 bg-card border border-border">
                  <h4 className="font-medium text-foreground">Unified Device Control</h4>
                  <p className="text-sm text-muted-foreground">Manage, update, and organize all connected IoT devices from one centralized platform.</p>
                </div>
              </div>
            </div>

            {/* Right: Beautiful card with 20.svg */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                {/* Background glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-2 border-border/50 p-8 shadow-2xl overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-transparent rounded-full translate-y-12 -translate-x-12" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-center">
                    {/* Image container - made bigger */}
                    <div className="relative w-64 h-64 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                      <img 
                        src="/pic/20.svg" 
                        alt="AI-Powered IoT Intelligence" 
                        className="w-56 h-56 object-contain transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases Grid */}
      <Section>
        <SectionHeader
          badge="Industry Solutions"
          title="IoT Solutions for Every Industry"
          description="See how organizations across diverse sectors leverage our AI-powered IoT platform."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 bg-gradient-card border border-border card-hover"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <useCase.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{useCase.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{useCase.description}</p>

              {/* Key Benefits Preview */}
              <ul className="space-y-2 mb-6">
                {useCase.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics */}
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                {useCase.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-heading font-bold text-accent">
                      {metric.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="accent-outline"
                    className="w-full"
                    onClick={() => setSelectedCase(useCase)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <useCase.icon className="w-5 h-5 text-accent" />
                      </div>
                      {useCase.title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      {useCase.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <h4 className="font-medium text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2 mb-6">
                      {useCase.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="accent" className="w-full" asChild>
                      <Link to="/about-contact">Request Demo</Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-[#000000] via-[#0A4531]/95 to-[#000000] border-t-2 border-[#DA9928] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#DA9928]/10 to-transparent" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#DA9928]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#0A4531]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#DA9928] mb-4">
            Activate the Power of Connected Intelligence
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Experience a live, customized preview of how our IoT intelligence transforms your operations.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default UseCases;
