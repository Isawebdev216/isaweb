import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GitBranch,
  Brain,
  BarChart3,
  Bell,
  RefreshCw,
  ArrowRight,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: GitBranch,
    title: "Connect Devices",
    description: "Seamlessly onboard and link IoT devices for centralized monitoring and management.",
    features: ["Sensors", "Gateways", "Devices"],
    backgroundImage: "/pic/6.svg",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Collect & Normalize",
    description: "Gather device data, standardize formats, and prepare information for AI analysis.",
    features: ["Data", "Metrics", "Signals"],
    backgroundImage: "/pic/7.svg",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Analysis",
    description: "Detect patterns, predict anomalies, and generate actionable insights automatically.",
    features: ["Predict", "Detect", "Optimize"],
    backgroundImage: "/pic/8.svg",
  },
  {
    number: "04",
    icon: Bell,
    title: "Automate Actions",
    description: "Trigger intelligent workflows and automated responses to improve operations efficiently.",
    features: ["Workflow", "Alerts", "Actions"],
    backgroundImage: "/pic/9.svg",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Visualize Insights",
    description: "Display real-time dashboards and reports for easy decision-making and performance tracking.",
    features: ["Dashboards", "Reports", "Metrics"],
    backgroundImage: "/pic/6.svg",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-12 md:py-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
          style={{ backgroundImage: 'url(/pic/11.svg)', willChange: 'transform' }}
          role="img"
          aria-label="How It Works background"
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              How It Works
            </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-hero font-bold text-white drop-shadow-lg mb-6">
              Inside the Intelligent Flow{" "}
              <span className="text-gradient">of Our AI-Powered IoT Platform</span>
            </h1>
              <p className="text-lg text-white">
               Our platform connects devices, analyzes data instantly, and automates intelligent actions to simplify and optimize operations.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Section Breaker - Hero to Steps */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Golden gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

        {/* Animated particle burst */}
        <motion.div
          className="relative w-full max-w-5xl flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="relative">
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-[#DA9928] flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-[#DA9928]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Burst particles */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              const radius = 60;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#FFD700] rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4px',
                    marginTop: '-4px'
                  }}
                  initial={{ x: 0, y: 0, scale: 0 }}
                  whileInView={{ x, y, scale: 1, transition: { duration: 1.2, delay: 0.5 + i * 0.05, ease: "easeOut" } }}
                  viewport={{ once: true }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
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

      {/* Steps Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-[#0A2818] via-[#000000] to-[#0A2818]">
        {/* Elegant Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft gradient base layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A4531]/40 via-transparent to-[#000000]" />
          
          {/* Large slow-moving gold orb - top right */}
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFD700 0%, #DA9928 25%, transparent 65%)',
              filter: 'blur(100px)',
              top: '-300px',
              right: '-300px',
              opacity: 0.15,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Large slow-moving green orb - bottom left */}
          <motion.div
            className="absolute w-[900px] h-[900px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #0A4531 0%, #0D5A3F 30%, transparent 70%)',
              filter: 'blur(120px)',
              bottom: '-400px',
              left: '-400px',
              opacity: 0.12,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Accent gold glow - center right */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #DA9928 0%, #FFD700 20%, transparent 60%)',
              filter: 'blur(80px)',
              top: '30%',
              right: '5%',
              opacity: 0.12,
            }}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Additional gold accent - top left */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFD700 0%, #DA9928 25%, transparent 65%)',
              filter: 'blur(90px)',
              top: '20%',
              left: '-150px',
              opacity: 0.08,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Extra gold orb - bottom right for steps */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFD700 0%, #DA9928 30%, transparent 70%)',
              filter: 'blur(95px)',
              bottom: '-200px',
              right: '10%',
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.18, 0.1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#DA9928 0.5px, transparent 0.5px), linear-gradient(90deg, #DA9928 0.5px, transparent 0.5px)`,
              backgroundSize: '80px 80px',
              opacity: 0.02,
            }}
          />

          {/* Floating glow particles - more vibrant gold - increased count */}
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                background: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#DA9928' : '#FFC107',
                boxShadow: `0 0 ${Math.random() * 35 + 15}px ${i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#DA9928' : '#FFC107'}`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50, 0],
                x: [0, Math.random() * 80 - 40, 0],
                opacity: [0.2, 0.9, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 7,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Elegant pulsing ring accents */}
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-[#FFD700]"
            style={{
              top: '10%',
              left: '5%',
              opacity: 0.15,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute w-72 h-72 rounded-full border-2 border-[#DA9928]"
            style={{
              bottom: '15%',
              right: '8%',
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.22, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Animated gold lines flowing down - more intense */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={`gold-line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
              style={{
                width: '100%',
                left: '0',
                opacity: 0.2,
              }}
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 5 + i * 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1,
              }}
            />
          ))}

          {/* Horizontal animated gold beams */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`gold-beam-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#FFD700] to-transparent"
              style={{
                height: '100%',
                top: '0',
                opacity: 0.15,
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}

          {/* Center gold glow point - enhanced */}
          <motion.div
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
              filter: 'blur(50px)',
              top: '50%',
              left: '50%',
              opacity: 0.3,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Rotating gold ring accent */}
          <motion.div
            className="absolute w-[1000px] h-[1000px] rounded-full border border-[#FFD700]/20"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-500px',
              marginLeft: '-500px',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Clockwise rotating gold ring accent */}
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full border border-[#DA9928]/15"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-400px',
              marginLeft: '-400px',
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="relative">
            {/* Elegant connecting line with enhanced gold glow */}
            <motion.div 
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent"
              style={{
                boxShadow: '0 0 25px rgba(255, 215, 0, 0.6)',
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
                boxShadow: ['0 0 25px rgba(255, 215, 0, 0.6)', '0 0 45px rgba(255, 215, 0, 0.8)', '0 0 25px rgba(255, 215, 0, 0.6)'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-lg relative">
                    {/* Background glow for steps 02-05 */}
                    {index > 0 && (
                      <motion.div
                        className="absolute -inset-8 rounded-2xl bg-gradient-to-r from-[#FFD700]/10 via-[#DA9928]/5 to-transparent blur-2xl -z-10"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}

                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                      className="text-5xl md:text-6xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#DA9928] to-[#FFC107]"
                      style={{
                        textShadow: '0 0 25px rgba(255, 215, 0, 0.4)',
                      }}
                    >
                      {step.number}
                    </motion.span>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 mt-2"
                    >
                      {step.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-gray-300 mb-6 text-sm md:text-base"
                    >
                      {step.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="flex flex-wrap gap-3"
                    >
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(255, 215, 0, 0.5)' }}
                          animate={{
                            y: [0, -4, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: featureIndex * 0.2,
                            ease: "easeInOut"
                          }}
                          className="px-4 py-2 rounded-full border-2 border-[#FFD700]/50 bg-[#FFD700]/10 text-gray-100 text-xs font-medium hover:border-[#FFD700] hover:bg-[#FFD700]/20 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full lg:max-w-lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative aspect-square rounded-3xl overflow-hidden group"
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${step.backgroundImage})`, willChange: 'transform' }}
                        role="img"
                        aria-label={`${step.title} visual`}
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40" />

                      {/* Gold glow on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/30 via-transparent to-[#0A4531]/30"
                      />

                      {/* Border glow - enhanced gold */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl border-2 border-[#FFD700]/40 group-hover:border-[#FFD700]/80 transition-all duration-500"
                        whileHover={{ boxShadow: `0 0 50px rgba(255, 215, 0, 0.7), inset 0 0 30px rgba(255, 215, 0, 0.25)` }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            See how IsaWebDev can transform your IoT management workflow.
            Get started in less than 5 minutes.
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#DA9928] to-[#DA9928]/80 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <Button className="relative bg-gradient-to-r from-[#DA9928] to-[#DA9928]/90 hover:from-[#DA9928]/90 hover:to-[#DA9928] text-[#000000] font-bold px-8 py-4 text-lg border-2 border-[#DA9928] shadow-lg hover:shadow-[#DA9928]/40 transition-all duration-300" size="lg" asChild>
              <Link to="/about-contact">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;
