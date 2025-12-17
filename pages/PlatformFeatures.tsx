import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { DashboardDemo } from "@/components/dashboard/DashboardDemo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code,
  Server,
  Bell,
  Users,
  Plug,
  LineChart,
  Shield,
  Zap,
  GitBranch,
  Cloud,
  Database,
  Lock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const realTimeMonitoringFeatures = [
  {
    icon: Code,
    title: "Live Device Dashboards",
    description: "Real-time monitoring of device state, metrics, and performance across your IoT network.",
  },
  {
    icon: GitBranch,
    title: "Device Connectivity",
    description: "Seamless integration with sensors and IoT devices using industry-standard protocols.",
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Track device uptime, data throughput, and network health with detailed analytics.",
  },
];

const automationFeatures = [
  {
    icon: Server,
    title: "AI-Powered Triggers",
    description: "Intelligent automation rules that respond to device data patterns and anomalies.",
  },
  {
    icon: Cloud,
    title: "Workflow Automation",
    description: "Create custom workflows for device management, alerts, and real-world actions.",
  },
  {
    icon: Database,
    title: "Auto-Remediation",
    description: "Automatic device updates, restarts, and maintenance based on AI predictions.",
  },
];

const integrations = [
  { name: "MQTT", category: "Protocol" },
  { name: "AWS IoT", category: "Cloud" },
  { name: "Azure IoT", category: "Cloud" },
  { name: "Google IoT", category: "Cloud" },
  { name: "Zigbee", category: "Protocol" },
  { name: "LoRaWAN", category: "Protocol" },
  { name: "Slack", category: "Communication" },
  { name: "Webhook", category: "Integration" },
];

const PlatformFeatures = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Platform Features
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-hero font-bold text-foreground mb-6">
              AI-Powered IoT{" "}
              <span className="text-gradient">Management Platform</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive visibility into your entire IoT ecosystem. From device connectivity
              to AI automation, get the insights you need to manage smarter.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/about-contact">Schedule a Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections Accordion */}
      <Section>
        <Accordion type="single" collapsible defaultValue="code-monitoring" className="space-y-4">
          <AccordionItem value="real-time-monitoring" className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Real-Time IoT Monitoring
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Live dashboards with device state, metrics, and performance.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {realTimeMonitoringFeatures.map((feature, index) => (
                  <FeatureCard key={feature.title} {...feature} index={index} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ai-automation" className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    AI-Powered Automation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Intelligent triggers, workflows, and auto-actions.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {automationFeatures.map((feature, index) => (
                  <FeatureCard key={feature.title} {...feature} index={index} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="predictive-maintenance" className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center animate-pulse-glow">
                  <Bell className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Predictive Maintenance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Detect failures before they occur using ML forecasting.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <Zap className="w-8 h-8 text-accent mb-4" />
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Anomaly Detection
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Machine learning algorithms identify unusual device behavior before failures occur.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted/30 border border-border">
                  <Shield className="w-8 h-8 text-accent mb-4" />
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Maintenance Scheduling
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Automated maintenance recommendations based on device usage patterns and predictions.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="device-management" className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Device & Sensor Management
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Register, control, update, and group IoT devices.
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  "Bulk device registration and onboarding",
                  "Remote device configuration and updates",
                  "Device grouping and hierarchical management",
                  "Firmware over-the-air (FOTA) updates",
                  "Device health monitoring and diagnostics",
                  "Secure device authentication and access control",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Integrations Section */}
      <Section className="bg-primary border-y border-border">
        <SectionHeader
          badge="Integrations"
          title="Connect Your IoT Ecosystem"
          description="Seamless integrations with the protocols and platforms you already use."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 rounded-xl bg-muted/30 border border-border text-center hover:border-accent/50 hover:bg-muted/50 transition-all"
            >
              <Plug className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-medium text-foreground">{integration.name}</p>
              <p className="text-xs text-muted-foreground">{integration.category}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Interactive Demo */}
      <Section>
        <SectionHeader
          badge="Interactive Demo"
          title="Experience Real-Time IoT Monitoring"
          description="Toggle between device views to see how our platform provides unified visibility across your IoT network."
        />
        <DashboardDemo />
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-hero">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your IoT Management?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of organizations already using IsaWebDev to monitor smarter, automate better, and scale faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/plans-pricing">View Pricing</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about-contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PlatformFeatures;
