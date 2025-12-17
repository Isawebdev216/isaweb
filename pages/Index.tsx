import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { DashboardDemo } from "@/components/dashboard/DashboardDemo";
import { Layout } from "@/components/layout/Layout";
import {
  Code,
  Server,
  Bell,
  BarChart3,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Mail,
  Wifi,
  Cpu,
  Activity,
  Globe,
  Smartphone,
  Network,
  Settings,
  CheckCircle,
  Sparkles,
  Star,
  Circle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";

const features = [
  {
    icon: Activity,
    title: "Real-Time Device Monitoring",
    description:
      "View live device performance, status, and activity across your entire IoT network instantly.",
    highlights: ["Live", "Accurate", "Instant"],
    backgroundImage: "/pic/6.webp",
  },
  {
    icon: Cpu,
    title: "AI Automation Engine",
    description:
      "Trigger intelligent actions automatically using behavior patterns, rules, and real-time data.",
    highlights: ["Smart", "Adaptive", "Responsive"],
    backgroundImage: "/pic/7.webp",
  },
  {
    icon: Bell,
    title: "Predictive Analytics",
    description:
      "Identify anomalies early, predict failures, and optimize operations using machine-learning insights.",
    highlights: ["Forecast", "Detect", "Optimize"],
    backgroundImage: "/pic/8.webp",
  },
  {
    icon: Settings,
    title: "Secure Cloud Sync",
    description:
      "Sync data and devices with encrypted communication designed for enterprise-grade reliability.",
    highlights: ["Encrypted", "Reliable", "Trusted"],
    backgroundImage: "/pic/9.webp",
  },
];

const stats = [
  { value: "1M+", label: "Devices Connected", iconSrc: "/pic/2.webp" },
  { value: "99.9%", label: "Uptime Guarantee", iconSrc: "/pic/3.webp" },
  { value: "<50ms", label: "Response Time", iconSrc: "/pic/4.webp" },
  { value: "500+", label: "Enterprise Clients", iconSrc: "/pic/5.webp" },
];

const useCases = [
  { icon: "/pic/22.svg", title: "Industrial IoT", description: "Optimize manufacturing processes" },
  { icon: "/pic/23.svg", title: "Manufacturing ", description: "Intelligent monitoring for efficiency" },
  { icon: "/pic/24.svg", title: "Energy & Utilities ", description: "Optimized grids with analytics" },
  { icon: "/pic/25.svg", title: "Healthcare", description: "Continuous device-driven insights" },
  { icon: "/pic/26.svg", title: "Retail ", description: "Data-enhanced operational decisions" },
  { icon: "/pic/21.svg", title: "Agriculture ", description: "Automated, sensor-driven farming" },
];

const howItWorks = [
  {
    step: "01",
    title: "Real-Time IoT Monitoring",
    description: "Live dashboards with device state, metrics, and performance tracking across your entire IoT network.",
    tags: ["Real-time", "Secure", "Scalable"],
    icon: Activity,
  },
  {
    step: "02",
    title: "AI-Powered Automation",
    description: "Intelligent triggers, workflows, and auto-actions that respond to device data in real-time.",
    tags: ["Real-time", "Secure", "Scalable"],
    icon: Cpu,
  },
  {
    step: "03",
    title: "Predictive Maintenance",
    description: "Detect failures before they occur using ML forecasting and anomaly detection algorithms.",
    tags: ["Real-time", "Secure", "Scalable"],
    icon: Bell,
  },
  {
    step: "04",
    title: "Device Management",
    description: "Register, control, update, and group IoT devices with secure cloud sync and access management.",
    tags: ["Real-time", "Secure", "Scalable"],
    icon: Settings,
  },
];

// Floating Particle Component
const FloatingParticle = ({ delay = 0, size = 4, x = 0, duration = 20 }: { delay?: number; size?: number; x?: number; duration?: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      background: `linear-gradient(135deg, #DA9928 0%, #0A4531 100%)`,
      boxShadow: `0 0 ${size * 2}px rgba(218, 153, 40, 0.5)`,
    }}
    initial={{ y: '100vh', opacity: 0 }}
    animate={{
      y: '-100vh',
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  
  useEffect(() => {
    const numericValue = parseInt(value.replace(/\D/g, ''));
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start).toString() + (value.includes('+') ? '+' : '') + (value.includes('%') ? '%' : '') + (value.includes('ms') ? 'ms' : ''));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span ref={ref}>{displayValue}</span>;
};

// Glowing Orb Component
const GlowingOrb = ({ size = 300, color = '#DA9928', x = 0, y = 0, delay = 0 }: { size?: number; color?: string; x?: number; y?: number; delay?: number }) => (
  <motion.div
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)',
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const Index = () => {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest updates and news.",
      });
      setEmail("");
    }
  };

  return (
    <Layout>
      {/* Hero Section - Stunning Redesign */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
          style={{ backgroundImage: 'url(/pic/1.webp)', willChange: 'transform' }}
          role="img"
          aria-label="Hero background"
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-[#0A4531]/40" />

        {/* Content (moved to top-left, slightly smaller) */}
        <div className="absolute top-16 left-4 md:top-20 md:left-8 lg:top-24 z-10 px-2 md:px-4">
          {/* Black and dark green overlay background for left section */}
          <div className="absolute inset-0 -z-10 -top-8 -left-8 -bottom-8 -right-16 bg-gradient-to-r from-black/80 via-black/60 to-[#0A4531]/40 rounded-2xl blur-xl" />
          <div className="absolute inset-0 -z-10 -top-8 -left-8 -bottom-8 -right-12 bg-gradient-to-r from-black/70 via-[#0A4531]/50 to-transparent rounded-2xl" />
          
          <div className="max-w-[520px] md:max-w-[520px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#DA9928]/20 to-[#0A4531]/20 backdrop-blur-sm text-[#DA9928] text-xs font-semibold mb-2 border border-[#DA9928]/30 shadow-lg shadow-[#DA9928]/10"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(218, 153, 40, 0.1)',
                    '0 0 40px rgba(218, 153, 40, 0.2)',
                    '0 0 20px rgba(218, 153, 40, 0.1)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
                AI-Powered IoT Platform
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block"
              >
                Connect, Visualize, and Automate
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                Your IoT Network at Scale
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-sm leading-relaxed font-light"
            >
              Experience the future of IoT with{" "}
              <span className="text-[#FFD700] font-semibold">real-time dashboards</span>,{" "}
              <span className="text-[#FFD700] font-semibold">AI automation</span>, and{" "}
              <span className="text-[#FFD700] font-semibold">secure cloud-powered device management</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-3 mt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="hero" 
                  size="default" 
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-[#DA9928] via-[#FFD700] to-[#DA9928] hover:from-[#FFD700] hover:via-[#DA9928] hover:to-[#FFD700] text-black font-bold px-8 py-4 text-base shadow-2xl shadow-[#DA9928]/50 group rounded-xl"
                >
                  <a href="https://app.isawebdev.com/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span className="relative z-10 font-semibold">Explore Platform</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 relative z-10" />
                    </motion.div>
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-xs text-gray-300"
            >
              <span className="text-[#DA9928] font-semibold">Unified Device Control</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#DA9928] font-semibold">Smart Automation</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#DA9928] font-semibold">Deep Analytics</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            className="flex flex-col items-center gap-2 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <span className="text-gray-400 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-[#DA9928]/50 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 rounded-full bg-[#DA9928]"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Section Breaker - Hero to Features */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated geometric pattern */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="flex items-center gap-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ rotate: 0, scale: 0 }}
                whileInView={{ rotate: 360, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              >
                <div className="w-8 h-8 border-2 border-[#DA9928] rotate-45 relative">
                  <motion.div
                    className="absolute inset-0 border border-[#FFD700] rotate-45"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </div>
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
          className="absolute left-1/4 top-1/2 w-2 h-2 bg-[#DA9928] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-1/4 top-1/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Features Section - Static Sticky Background (no animations) */}
      <Section className="relative bg-black overflow-hidden py-20">
        {/* Static Sticky Background Layers (no animation) */}
        <div className="absolute inset-0 pointer-events-none -z-20">
          {/* Primary gradient background fixed to viewport */}
          <div className="absolute inset-0 bg-fixed bg-gradient-to-br from-black via-[#0A4531]/10 to-black" />

          {/* Large decorative blobs (static, sticky) */}
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#DA9928]/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-[#0A4531]/20 to-transparent blur-3xl" />

          {/* Subtle grid pattern overlay (static) */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(#DA9928 1px, transparent 1px), linear-gradient(90deg, #DA9928 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 w-full">
          {/* Spectacular Header Layout */}
          <div className="text-center mb-24 relative">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#DA9928]/20 via-[#0A4531]/10 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Static Decorative Shapes */}
            <div className="absolute inset-0 overflow-hidden -z-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 20}%`,
                  }}
                >
                  <div
                    className="w-20 h-20 border-2 border-[#DA9928]/30 backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(45deg, rgba(218, 153, 40, ${0.1 + i * 0.05}), rgba(10, 69, 49, ${0.05 + i * 0.03}))`,
                      boxShadow: `0 0 40px rgba(218, 153, 40, ${0.2 + i * 0.1})`
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Top Decorative Element */}
            <div className="relative mb-12">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#DA9928] to-transparent mx-auto rounded-full" />
            </div>

            {/* Badge with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              className="inline-block relative mb-8 group"
              style={{ perspective: "1000px" }}
            >
              <span
                className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#DA9928]/25 via-[#0A4531]/20 to-[#DA9928]/25 border border-[#DA9928]/40 text-[#DA9928] text-sm font-bold tracking-widest uppercase shadow-2xl shadow-[#DA9928]/20 backdrop-blur-md"
              >
                Core Features
              </span>

              {/* Static Shadow layers */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DA9928]/20 to-[#0A4531]/20 blur-xl -z-10 scale-110"
              />
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0A4531]/15 to-[#DA9928]/15 blur-2xl -z-20 scale-125"
              />
            </motion.div>

            {/* Main Title with Static Background Design */}
            <div className="relative mb-8">
              {/* Background decorative elements - static */}
              <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                {/* Top left gradient blob */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#DA9928]/20 to-transparent rounded-full blur-3xl" />
                {/* Bottom right gradient blob */}
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-[#0A4531]/20 to-transparent rounded-full blur-3xl" />
                {/* Center accent light */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#DA9928]/15 via-transparent to-transparent rounded-full blur-3xl" />
                
                {/* Grid pattern overlay - subtle */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `linear-gradient(#DA9928 1px, transparent 1px), linear-gradient(90deg, #DA9928 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                  }}
                />
              </div>

              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-tight relative z-10">
                <span style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #DA9928 25%, #0A4531 50%, #DA9928 75%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Core Intelligence That Powers Your Connected Ecosystem
                </span>
              </h2>

              {/* Decorative accent dots - static */}
              <div className="absolute inset-0 pointer-events-none mt-2 z-10">
                <div className="flex gap-4 ml-4">
                  <div className="w-3 h-3 bg-[#DA9928] rounded-full shadow-lg shadow-[#DA9928]/40" />
                  <div className="w-3 h-3 bg-[#0A4531] rounded-full shadow-lg shadow-[#0A4531]/40" />
                  <div className="w-2 h-2 bg-[#DA9928]/70 rounded-full shadow-lg shadow-[#DA9928]/20" />
                </div>
              </div>
            </div>

            {/* Static Decorative Line */}
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="w-3 h-3 bg-[#DA9928] rounded-full shadow-lg shadow-[#DA9928]/40" />
              <Sparkles className="w-8 h-8 text-[#DA9928] drop-shadow-lg" />
              <div className="w-3 h-3 bg-[#0A4531] rounded-full shadow-lg shadow-[#0A4531]/40" />
            </div>

            {/* Description with Static Background */}
            <div className="relative max-w-4xl mx-auto">
              {/* Subtle background container */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#DA9928]/8 via-[#0A4531]/8 to-[#DA9928]/8 rounded-3xl blur-2xl -z-10" />
              
              <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-light relative z-10">
                Advanced AI and IoT technologies working together to deliver real-time insights, automation, and scalable device management.
              </p>

              {/* Static underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-[#DA9928] via-[#0A4531] to-[#DA9928] mx-auto mt-6 rounded-full" />
            </div>

            {/* Bottom Static Decorative Line */}
            <div className="relative mt-16">
              <div className="h-1 w-40 bg-gradient-to-r from-transparent via-[#0A4531] to-transparent mx-auto rounded-full" />
            </div>
          </div>

          {/* Stunning Static Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div
                  key={feature.title}
                  className="group relative h-96 overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#DA9928]/40 transition-shadow duration-500"
                >
                  {/* Background Image - Base Layer */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-black"
                    style={{ backgroundImage: `url(${feature.backgroundImage})`, willChange: 'transform' }}
                    role="img"
                    aria-label={`${feature.title} background`}
                  />

                  {/* Dark Overlay - Multiple layers for stunning effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-[#0A4531]/70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
                  
                  {/* Subtle Grid Overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(#DA9928 1px, transparent 1px), linear-gradient(90deg, #DA9928 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Radial Gradient Accents */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-radial from-[#DA9928]/20 via-transparent to-transparent rounded-full blur-3xl" />
                  <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-radial from-[#0A4531]/20 via-transparent to-transparent rounded-full blur-3xl" />

                  {/* Static Accent Border */}
                  <div className="absolute inset-0 border border-[#DA9928]/30 group-hover:border-[#DA9928]/70 transition-colors duration-500 rounded-3xl" />

                  {/* Content Container */}
                  <div className="relative z-10 h-full flex flex-col p-8 text-center justify-between">
                    {/* Top Section - Feature Number */}
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#DA9928]/20 to-[#0A4531]/20 border border-[#DA9928]/40 text-[#DA9928] text-sm font-bold backdrop-blur-sm">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Middle Section - Main Content */}
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                      {/* Feature Title */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3 leading-tight group-hover:text-[#FFD700] transition-colors duration-500">
                          {feature.title}
                        </h3>
                        {/* Decorative Line */}
                        <div className="h-1 w-20 bg-gradient-to-r from-[#DA9928] via-[#FFD700] to-[#0A4531] mx-auto rounded-full" />
                      </div>

                      {/* Feature Description */}
                      <p className="text-gray-200 text-base leading-relaxed max-w-sm mx-auto group-hover:text-white transition-colors duration-500">
                        {feature.description}
                      </p>

                      {/* Feature Badges - Static Layout */}
                      <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {["Real-time", "Secure", "Scalable"].map((badge) => (
                          <span
                            key={badge}
                            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#DA9928]/25 to-[#0A4531]/25 border border-[#DA9928]/50 text-[#DA9928] text-xs font-semibold backdrop-blur-sm group-hover:border-[#DA9928]/80 group-hover:bg-gradient-to-r group-hover:from-[#DA9928]/35 group-hover:to-[#0A4531]/35 transition-all duration-500"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section - Icon */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#DA9928]/30 to-[#0A4531]/30 border border-[#DA9928]/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#DA9928]/60 group-hover:to-[#0A4531]/60 transition-all duration-500 backdrop-blur-sm">
                        <Icon className="w-8 h-8 text-[#FFD700] group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents - Top Right */}
                  <div className="absolute top-6 right-6 w-24 h-24 border-t-2 border-r-2 border-[#DA9928]/40 rounded-tr-3xl group-hover:border-[#DA9928]/80 transition-colors duration-500" />
                  
                  {/* Corner Accents - Bottom Left */}
                  <div className="absolute bottom-6 left-6 w-24 h-24 border-b-2 border-l-2 border-[#0A4531]/40 rounded-bl-3xl group-hover:border-[#0A4531]/80 transition-colors duration-500" />

                  {/* Hover Shine Effect */}
                  <div className="absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Animated Section Breaker - Features to IoT Ecosystem */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated zigzag pattern */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <svg
            viewBox="0 0 1200 60"
            className="w-full h-16"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="zigzagGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="#DA9928" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="80%" stopColor="#DA9928" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,30 L100,10 L200,50 L300,10 L400,50 L500,10 L600,50 L700,10 L800,50 L900,10 L1000,50 L1100,10 L1200,30"
              stroke="url(#zigzagGradient2)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.5 }}
            />
          </svg>
        </motion.div>

        {/* Moving light effect */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute left-1/3 top-1/4 w-2 h-2 bg-[#DA9928] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-1/3 top-2/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* IoT Ecosystem Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#DA9928 1px, transparent 1px), linear-gradient(90deg, #DA9928 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#DA9928] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <SectionHeader
            badge="IoT Ecosystem"
            title="The Complete AI-Powered IoT Ecosystem"
            description="A unified platform connecting devices, automating actions, and delivering real-time insights at scale."
          />

          {/* Central Hub Visualization */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
            {/* Left Side - Features List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1 space-y-6"
            >
              {[
                { title: "Device Connectivity", desc: "Seamlessly connect, manage, and organize all your IoT devices effortlessly.", icon: Network },
                { title: "Intelligent Automation", desc: "AI-driven workflows automate routine tasks and optimize device performance intelligently.", icon: Cpu },
                { title: "Predictive Analytics", desc: "Forecast anomalies and maintenance needs before they impact operations.", icon: Bell },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-transparent border border-gray-700/50 hover:border-[#DA9928]/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#DA9928] to-[#0A4531] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center - Animated Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-80 h-80 flex items-center justify-center"
            >
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border-2 border-dashed border-[#DA9928]/30"
              />

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 rounded-full border-2 border-[#0A4531]/50"
              />

              {/* Center Core - World Image */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-32 h-32 rounded-2xl flex items-center justify-center"
              >
                <img src="/pic/world.webp" alt="World" className="w-full h-full object-cover rounded-2xl" />
              </motion.div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1 space-y-6"
            >
              {[
                { value: "10B+", label: "Data Points Daily", color: "from-[#DA9928]" },
                { value: "1000+", label: "Automated Actions", color: "from-[#0A4531]" },
                { value: "1M+", label: "Connected Devices", color: "from-[#DA9928]" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-transparent border border-gray-700/50 hover:border-[#DA9928]/50 transition-all group"
                >
                  <motion.p
                    className={`font-heading text-4xl font-bold bg-gradient-to-r ${stat.color} to-white bg-clip-text text-transparent mb-1`}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Section>

      {/* Animated Section Breaker - IoT Ecosystem to Use Cases */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated pulsing circles */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="flex items-center gap-6">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full border-2 border-[#DA9928]"
                  animate={{
                    scale: [1, 1.5, 1],
                    borderColor: ['#DA9928', '#FFD700', '#DA9928']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 w-4 h-4 rounded-full bg-[#DA9928]/20"
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
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
          className="absolute left-1/5 top-1/3 w-2 h-2 bg-[#DA9928] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-1/5 top-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Use Cases Section */}
      <Section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <SectionHeader
          badge="Scalable IoT Solutions"
          title="Scalable IoT Solutions for the Modern World"
          description="Our AI-powered IoT platform delivers real-time intelligence, automated workflows, and predictive insights tailored to the unique operational needs of every industry segment"
        />

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? '#DA9928' : i % 3 === 1 ? '#0A4531' : '#FFD700',
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Auto-Scrolling Carousel */}
        <div className="relative z-10 w-full overflow-hidden mt-16">
          {/* Pause Button */}
          <motion.div
            className="absolute top-0 right-0 z-20 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => setIsCarouselPaused(!isCarouselPaused)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#DA9928] to-[#FFD700] hover:from-[#FFD700] hover:to-[#DA9928] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#DA9928]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isCarouselPaused ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                  Pause
                </>
              )}
            </motion.button>
          </motion.div>
          <motion.div
            className="flex gap-8"
            animate={{
              x: isCarouselPaused ? 0 : [0, -100 * (useCases.length * 2)], // Scroll through duplicated items
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Slower, more elegant scroll
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: isCarouselPaused ? "paused" : "running" }} // Pause on hover
            style={{ width: `${200 * useCases.length}%` }} // Width for duplicated items
          >
            {/* Duplicate items for infinite scroll */}
            {[...useCases, ...useCases].map((useCase, index) => (
              <motion.div
                key={`${useCase.title}-${index}`}
                className="flex-shrink-0 w-80 group relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (index % useCases.length) * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="relative p-8 rounded-none bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/60 hover:border-[#DA9928]/70 transition-all duration-700 backdrop-blur-lg shadow-2xl shadow-black/60 hover:shadow-3xl hover:shadow-[#DA9928]/30"
                  animate={{
                    boxShadow: [
                      '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      '0 25px 50px -12px rgba(218, 153, 40, 0.15)',
                      '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Dynamic Background Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      background: [
                        'radial-gradient(circle at 20% 20%, rgba(218, 153, 40, 0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 80%, rgba(10, 69, 49, 0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 20%, rgba(218, 153, 40, 0.1) 0%, transparent 50%)',
                      ],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Multi-layered Shine Effects */}
                  <motion.div
                    initial={{ x: '-150%', opacity: 0 }}
                    whileHover={{ x: '250%', opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-none pointer-events-none skew-x-12"
                  />
                  <motion.div
                    initial={{ x: '-200%', opacity: 0 }}
                    whileHover={{ x: '300%', opacity: 0.5 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent rounded-none pointer-events-none skew-x-6"
                  />

                  {/* Holographic Border */}
                  <motion.div
                    className="absolute inset-0 rounded-none"
                    animate={{
                      borderImageSource: 'linear-gradient(45deg, #DA9928, #0A4531, #FFD700, #DA9928)',
                      borderImageSlice: 1,
                    }}
                    style={{
                      border: '1px solid transparent',
                      borderImage: 'linear-gradient(45deg, #DA9928, #0A4531, #FFD700, #DA9928) 1',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -5, 5, 0],
                        scale: 1.15
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="relative w-20 h-20 rounded-none bg-gradient-to-br from-[#DA9928] via-[#FFD700] to-[#0A4531] flex items-center justify-center mb-8 shadow-2xl group-hover:shadow-3xl group-hover:shadow-[#DA9928]/60 transition-all duration-500 mx-auto"
                    >
                      <img src={useCase.icon} alt={useCase.title} className="w-10 h-10 text-white drop-shadow-lg" />

                      {/* Orbiting Elements */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                      >
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-lg shadow-[#FFD700]/50" />
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#0A4531] rounded-full shadow-lg shadow-[#0A4531]/50" />
                        <div className="absolute top-1/2 right-0 w-1 h-1 bg-[#DA9928] rounded-full transform -translate-y-1/2 shadow-lg shadow-[#DA9928]/50" />
                      </motion.div>

                      {/* Pulsing Rings */}
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-none border-2 border-[#DA9928]/30"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute inset-0 rounded-none border border-[#0A4531]/20"
                      />

                      {/* Active Indicator */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-black"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1],
                          boxShadow: [
                            '0 0 10px rgba(34, 197, 94, 0.5)',
                            '0 0 20px rgba(34, 197, 94, 0.8)',
                            '0 0 10px rgba(34, 197, 94, 0.5)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>

                    {/* Animated Title */}
                    <motion.h3
                      className="font-heading text-xl font-bold text-white mb-4 text-center group-hover:text-[#DA9928] transition-colors duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {useCase.title}
                    </motion.h3>

                    {/* Animated Description */}
                    <motion.p
                      className="text-gray-400 text-sm leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-500"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {useCase.description}
                    </motion.p>

                    {/* Floating Tech Elements */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-[#DA9928] to-[#0A4531] rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 8, 0],
                        x: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.7,
                      }}
                      className="absolute bottom-4 left-4 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="w-full h-full bg-[#FFD700] rounded-full shadow-lg animate-ping" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Animated Section Breaker - Use Cases to Testimonials */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated spiral pattern */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-24 h-24"
          >
            <defs>
              <linearGradient id="spiralGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DA9928" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#DA9928" />
              </linearGradient>
            </defs>
            <motion.path
              d="M50,50 Q70,30 90,50 Q70,70 50,50 Q30,30 10,50 Q30,70 50,50"
              stroke="url(#spiralGradient4)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="3"
              fill="#DA9928"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </svg>
        </motion.div>

        {/* Moving light effect */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute left-2/5 top-1/4 w-2 h-2 bg-[#DA9928] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-2/5 top-3/4 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Testimonials Section */}
      <Section className="bg-gradient-to-br from-[#0A4531] to-black">
        <SectionHeader
          badge="Trusted by Industry Leaders"
          title="Powering IoT Innovation Worldwide"
          description="See why enterprises choose IsaWebDev for their IoT infrastructure."
        />
        
        {/* Client Logos */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['TechCorp', 'IndustryAI', 'SmartGrid', 'AutoMesh', 'CloudSync'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-white font-heading text-xl font-bold"
              >
                <Network className="w-6 h-6 text-[#DA9928]" />
                {company}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { metric: '99.99%', label: 'Platform Uptime', description: 'Enterprise-grade reliability' },
            { metric: '10B+', label: 'Data Points Processed', description: 'Every month across all devices' },
            { metric: '50ms', label: 'Average Latency', description: 'Real-time device communication' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-black/40 border border-[#DA9928]/20 backdrop-blur-sm"
            >
              <p className="font-heading text-5xl font-bold text-[#DA9928] mb-2">{item.metric}</p>
              <p className="text-white font-semibold mb-1">{item.label}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              align="left"
              badge="Your Advantage with IsaWebDev"
              title="We deliver intelligent, reliable, and scalable IoT solutions engineered for real-time performance and automation."
              description=""
            />
            <div className="space-y-6">
              {[
                {
                  icon: Activity,
                  title: "AI Precision",
                  description: "Accurate insights powered by advanced machine intelligence.",
                },
                {
                  icon: Server,
                  title: "Secure Sync",
                  description: "Encrypted, stable communication across all devices.",
                },
                {
                  icon: Users,
                  title: "Scalable Control",
                  description: "Manage growing device networks effortlessly.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border p-8 flex items-center justify-center overflow-hidden">
              <motion.img
                src="/pic/10.webp"
                alt="IoT Excellence Illustration"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <SectionHeader
          badge="Trusted by Industry Leaders"
          title="What Our Clients Say"
          description="Real experiences from companies transforming their IoT deployments with IsaWebDev."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: "Harley Berger",
              role: "Director of Operations, TechCorp",
              content: "IsaWebDev transformed our device management. We reduced downtime by 40% in just 3 months.",
              rating: 5,
              icon: "/pic/33.svg",
            },
            {
              name: "Maddison Evans",
              role: "CTO, IndustryAI",
              content: "The AI-powered insights have been a game-changer. We're predicting failures before they happen.",
              rating: 5,
              icon: "/pic/31.svg",
            },
            {
              name: "Connor Ellis",
              role: "VP Engineering, CloudSync",
              content: "Exceptional platform stability and support. Their team is incredibly responsive and knowledgeable.",
              rating: 5,
              icon: "/pic/32.svg",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-[#DA9928]/50 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#DA9928] text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.icon} alt={testimonial.name} className="w-12 h-12" />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Animated Section Breaker - Testimonials to Stats */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated diamond pattern */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ rotate: 0, scale: 0 }}
                whileInView={{ rotate: 180, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 }}
              >
                <div className="w-6 h-6 border-2 border-[#DA9928] rotate-45 relative">
                  <motion.div
                    className="absolute inset-0 border border-[#FFD700] rotate-45"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                </div>
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
          className="absolute left-1/6 top-1/2 w-2 h-2 bg-[#DA9928] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-1/6 top-1/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Stats Section */}
      <Section className="bg-gradient-to-r from-[#0A4531] to-black border-y border-[#DA9928]/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#DA9928]/10 flex items-center justify-center group-hover:bg-[#DA9928]/20 transition-colors">
                <img src={stat.iconSrc} alt={stat.label} className="w-8 h-8" loading="lazy" decoding="async" width="32" height="32" />
              </div>
              <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-[#DA9928] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Animated Section Breaker - Stats to Final CTA */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated flowing lines */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-b from-[#DA9928] to-[#FFD700] rounded-full"
                style={{ height: `${20 + i * 5}px` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1, transition: { duration: 0.8, delay: i * 0.1 } }}
                viewport={{ once: true }}
                animate={{
                  scaleY: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
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
          className="absolute left-3/5 top-1/4 w-2 h-2 bg-[#DA9928] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-3/5 top-2/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Final CTA Section */}
      <Section className="relative overflow-hidden bg-black">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A4531]/30 via-transparent to-[#DA9928]/20" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DA9928]/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#DA9928] to-[#0A4531] flex items-center justify-center shadow-2xl"
            >
              <Network className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Experience 
              <span className="block text-[#DA9928]"> the Next Gen of IoT Intelligence ?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Unlock real-time intelligence, automated workflows, and predictive insights with a platform built for scalability and performance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                variant="accent"
                size="lg"
                asChild
                className="bg-[#DA9928] hover:bg-[#DA9928]/90 text-black font-bold px-10 py-6 text-lg shadow-xl shadow-[#DA9928]/20"
              >
                <Link to="/about-contact">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg"
              >
                <Link to="/plans-pricing">View Pricing</Link>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#0A4531]" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0A4531]" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#0A4531]" />
                <span>Global Infrastructure</span>
              </div>
            </div>
          </motion.div>
          
          {/* Newsletter removed per request */}
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
