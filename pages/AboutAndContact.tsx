// import React from "react";
// import { motion } from "framer-motion";
// import { Layout } from "@/components/layout/Layout";
// import { Section, SectionHeader } from "@/components/ui/Section";
// import { Button } from "@/components/ui/button";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   MessageCircle,
//   Send,
//   Target,
//   Eye,
//   Users,
//   Award,
//   Globe,
// } from "lucide-react";
// import { useState } from "react";
// import { toast } from "@/hooks/use-toast";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useForm } from '@formspree/react';
// import ReCAPTCHA from 'react-google-recaptcha';

// const stats = [
//   { value: "1M+", label: "Devices Managed" },
//   { value: "99.9%", label: "Platform Uptime" },
//   { value: "24/7", label: "IoT Monitoring" },
//   { value: "500+", label: "Enterprise Deployments" },
// ];

// const values = [
//   {
//     icon: Target,
//     title: "Mission",
//     description:
//       "To accelerate the shift from connected devices to truly autonomous environments, where data activates meaningful action.",
//   },
//   {
//     icon: Eye,
//     title: "Vision",
//     description:
//       "A world where every IoT deployment is powered by AI, enabling predictive intelligence and autonomous operations at scale.",
//   },
//   {
//     icon: Users,
//     title: "Values",
//     description:
//       "Innovation, security, and scalability drive everything we do. We build IoT solutions we're proud to deploy ourselves.",
//   },
// ];

// const AboutAndContact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     category: "",
//     message: "",
//   });
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null);

//   // Formspree hook
//   const [state, handleSubmit] = useForm("mrbnynpr");

//   // Handle form success
//   React.useEffect(() => {
//     if (state.succeeded) {
//       toast({
//         title: "Message sent successfully!",
//         description: "We'll get back to you within 24 hours.",
//       });
//       // Reset form data to show form again
//       setFormData({ name: "", email: "", category: "", message: "" });
//     }
//   }, [state.succeeded]);

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await handleSubmit(e);
//   };

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative min-h-[50vh] flex items-start pt-4 md:pt-6 overflow-hidden">
//         <div className="absolute inset-0" style={{ backgroundImage: "url('/pic/19.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
//         <div className="absolute inset-0 bg-black/70" />

//         <div className="container mx-auto px-4 relative z-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-3xl mx-auto text-center pt-4 pb-8"
//           >
//             <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
//               About Us
//             </span>
//             <h1 className="font-heading text-4xl md:text-5xl lg:text-hero font-bold text-white drop-shadow-lg mb-6">
//               Building the Future of{" "}
//               <span className="text-gradient">Connected Intelligence</span>
//             </h1>
//             <p className="text-lg text-white">
//               We're a team of IoT engineers and AI researchers on a mission to make
//               connected devices smarter, more autonomous, and truly intelligent.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Animated Section Breaker - Hero to Stats */}
//       <motion.div
//         className="relative h-32 flex items-center justify-center overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Golden gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />

//         {/* Animated wave */}
//         <motion.div
//           className="relative w-full max-w-5xl"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2, delay: 0.3 }}
//         >
//           <svg
//             viewBox="0 0 1200 80"
//             className="w-full h-20"
//             preserveAspectRatio="none"
//           >
//             {/* Wave path with golden gradient */}
//             <defs>
//               <linearGradient id="waveGradientAC1" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="transparent" />
//                 <stop offset="20%" stopColor="#DA9928" />
//                 <stop offset="50%" stopColor="#FFD700" />
//                 <stop offset="80%" stopColor="#DA9928" />
//                 <stop offset="100%" stopColor="transparent" />
//               </linearGradient>
//             </defs>
//             <motion.path
//               d="M0,40 Q150,20 300,60 T600,40 T900,20 T1200,40"
//               stroke="url(#waveGradientAC1)"
//               strokeWidth="3"
//               fill="none"
//               strokeLinecap="round"
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 2, delay: 0.5 }}
//             />
//           </svg>
//         </motion.div>

//         {/* Moving light effect */}
//         <motion.div
//           className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"
//           animate={{ x: ['-100%', '400%'] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         />

//         {/* Floating particles */}
//         <motion.div
//           className="absolute left-1/4 top-1/3 w-2 h-2 bg-[#DA9928] rounded-full"
//           animate={{
//             y: [0, -20, 0],
//             opacity: [0.3, 0.8, 0.3],
//             scale: [1, 1.5, 1]
//           }}
//           transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
//         />
//         <motion.div
//           className="absolute right-1/4 top-2/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
//           animate={{
//             y: [0, -15, 0],
//             opacity: [0.4, 0.9, 0.4],
//             scale: [1, 1.3, 1]
//           }}
//           transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
//         />
//       </motion.div>

//       {/* Stats Section */}
//       <Section className="bg-gradient-to-br from-[#000000] via-[#0A4531]/95 to-[#000000] border-y-2 border-[#DA9928] relative overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#DA9928]/10 to-transparent" />
//           <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#DA9928]/8 to-transparent rounded-full blur-3xl" />
//           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#0A4531]/20 to-transparent rounded-full blur-3xl" />
//         </div>

//         <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="text-center group"
//             >
//               <div className="relative">
//                 <p className="font-heading text-3xl md:text-4xl font-bold text-[#DA9928] mb-2 group-hover:scale-110 transition-transform duration-300">
//                   {stat.value}
//                 </p>
//                 <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#DA9928] transition-all duration-300" />
//               </div>
//               <p className="text-sm text-gray-300 font-medium tracking-wide">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* Contact Section */}
//       <Section className="bg-gradient-hero">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <SectionHeader
//               align="left"
//               badge="Contact Us"
//               title="Get in Touch"
//               description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
//             />

//             <form onSubmit={onSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-2 block">
//                     Name
//                   </label>
//                   <Input
//                     name="name"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     placeholder="Your name"
//                     required
//                     className="bg-muted border-border"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-2 block">
//                     Email
//                   </label>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     placeholder="your@email.com"
//                     required
//                     className="bg-muted border-border"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-foreground mb-2 block">
//                   Category
//                 </label>
//                 <Select
//                   value={formData.category}
//                   onValueChange={(value) =>
//                     setFormData({ ...formData, category: value })
//                   }
//                 >
//                   <SelectTrigger className="bg-muted border-border">
//                     <SelectValue placeholder="Select a category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="devops">DevOps / Engineering</SelectItem>
//                     <SelectItem value="it">IT Operations</SelectItem>
//                     <SelectItem value="sales">Sales Inquiry</SelectItem>
//                     <SelectItem value="support">Technical Support</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <input type="hidden" name="category" value={formData.category} />
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-foreground mb-2 block">
//                   Message
//                 </label>
//                 <Textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   placeholder="Tell us about your needs..."
//                   rows={5}
//                   required
//                   className="bg-muted border-border resize-none"
//                 />
//               </div>

//               <div>
//                 <ReCAPTCHA
//                   sitekey="6LdXQy0sAAAAAPuI_MvLMjIKR0w_muwwDZmRcpAq"
//                   onChange={(token) => setCaptchaToken(token)}
//                   theme="dark"
//                 />
//                 <input type="hidden" name="g-recaptcha-response" value={captchaToken || ''} />
//               </div>

//               <Button
//                 type="submit"
//                 variant="accent"
//                 size="lg"
//                 disabled={state.submitting || !captchaToken}
//                 className="w-full"
//               >
//                 {state.submitting ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="w-4 h-4 ml-2" />
//                   </>
//                 )}
//               </Button>
//             </form>
//           </motion.div>

//           {/* Contact Info & Map */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             {/* Contact Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="p-4 rounded-xl bg-muted/30 border border-border">
//                 <Mail className="w-6 h-6 text-accent mb-3" />
//                 <p className="font-medium text-foreground mb-1">Email</p>
//                 <a
//                   href="mailto:support@isawebdev.com"
//                   className="text-sm text-muted-foreground hover:text-accent transition-colors"
//                 >
//                   support@isawebdev.com
//                 </a>
//               </div>
//               <div className="p-4 rounded-xl bg-muted/30 border border-border">
//                 <Phone className="w-6 h-6 text-accent mb-3" />
//                 <p className="font-medium text-foreground mb-1">Phone</p>
//                 <a
//                   href="tel:+1-415-533-8027"
//                   className="text-sm text-muted-foreground hover:text-accent transition-colors"
//                 >
//                   +1 (415) 533-8027
//                 </a>
//               </div>
//               <div className="p-4 rounded-xl bg-muted/30 border border-border">
//                 <MapPin className="w-6 h-6 text-accent mb-3" />
//                 <p className="font-medium text-foreground mb-1">Office</p>
//                 <p className="text-sm text-muted-foreground">
//                   330 Bush Street<br />San Francisco, CA
//                 </p>
//               </div>
//               <div className="p-4 rounded-xl bg-muted/30 border border-border">
//                 <Globe className="w-6 h-6 text-accent mb-3" />
//                 <p className="font-medium text-foreground mb-1">Website</p>
//                 <a
//                   href="https://isawebdev.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-muted-foreground hover:text-accent transition-colors"
//                 >
//                   isawebdev.com
//                 </a>
//               </div>
//             </div>

//             {/* Map Placeholder */}
//             <div className="aspect-video rounded-2xl bg-muted/30 border border-border overflow-hidden relative">
//               <iframe
//                 src="https://maps.google.com/maps?q=330%20Bush%20Street,%20San%20Francisco,%20CA&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//           </motion.div>
//         </div>
//       </Section>

//       {/* Team Section */}
//       <Section className="bg-gradient-to-br from-[#000000] via-[#0A4531]/95 to-[#000000] border-y-2 border-[#DA9928]">
//         <SectionHeader
//           title="Meet Our Team"
//           description="Experienced IoT engineers and AI researchers dedicated to your success."
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {[
//             { name: "Alex Johnson", role: "Founder & CEO", bio: "15+ years in IoT infrastructure", icon: "/pic/29.svg" },
//             { name: "Lisa Park", role: "VP Engineering", bio: "AI and machine learning expert", icon: "/pic/27.svg" },
//             { name: "David Smith", role: "Head of Product", bio: "Former Google IoT lead", icon: "/pic/30.svg" },
//             { name: "Maya Patel", role: "Lead Security Officer", bio: "Cloud security specialist", icon: "/pic/28.svg" },
//           ].map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-center hover:border-[#DA9928]/50 transition-all"
//             >
//               <img src={member.icon} alt={member.name} className="w-16 h-16 mx-auto mb-4" />
//               <h4 className="font-semibold text-white mb-1">{member.name}</h4>
//               <p className="text-[#DA9928] text-sm font-medium mb-2">{member.role}</p>
//               <p className="text-gray-400 text-sm">{member.bio}</p>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* FAQ Section */}
//       <Section>
//         <SectionHeader
//           title="Frequently Asked Questions"
//           description="Find answers to common questions about IsaWebDev and our IoT platform."
//         />
//         <div className="max-w-3xl mx-auto mt-12 space-y-4">
//           {[
//             {
//               question: "How quickly can I connect my IoT devices?",
//               answer: "Devices can be connected and fully operational within minutes using our streamlined setup and automatic cloud synchronization system."
//             },
//             {
//               question: "Can I automate workflows across multiple devices?",
//               answer: "Our AI engine enables complex, multi-device automation workflows that trigger actions based on real-time data and device patterns."
//             },
//             {
//               question: "Does IsaWebDev support predictive maintenance?",
//               answer: "The platform uses AI to predict potential failures and anomalies, helping prevent downtime before it affects operations."
//             },
//             {
//               question: "Is my IoT data secure on the platform?",
//               answer: "All data is encrypted in transit and at rest, following enterprise-grade security and compliance standards for full protection."
//             },
//             {
//               question: "Can I integrate IsaWebDev with my existing systems?",
//               answer: "APIs, webhooks, and integration guides allow smooth connectivity with enterprise tools, dashboards, and third-party applications."
//             },
//             {
//               question: "What types of IoT networks can IsaWebDev handle?",
//               answer: "The platform scales seamlessly from smart homes to industrial networks, energy systems, retail, healthcare, and multi-site enterprise deployments."
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//               className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-accent/50 transition-all"
//             >
//               <h4 className="font-semibold text-foreground mb-2 text-lg">{item.question}</h4>
//               <p className="text-muted-foreground">{item.answer}</p>
//             </motion.div>
//           ))}
//         </div>
//       </Section>
//     </Layout>
//   );
// };

// export default AboutAndContact;


import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Target,
  Eye,
  Users,
  Award,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';

const stats = [
  { value: "1M+", label: "Devices Managed" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "24/7", label: "IoT Monitoring" },
  { value: "500+", label: "Enterprise Deployments" },
];

const AboutAndContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  // Formspree hook
  const [state, handleSubmit] = useForm("mrbnynpr");

  // Handle form success
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      // Reset form data
      setFormData({ name: "", email: "", category: "", message: "" });
      setCaptchaToken(null);
      // Reset reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  }, [state.succeeded]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      toast({
        title: "Please complete the CAPTCHA",
        description: "Verify that you're human before submitting.",
        variant: "destructive"
      });
      return;
    }

    await handleSubmit(e);
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-start pt-4 md:pt-6 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/pic/19.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center pt-4 pb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-hero font-bold text-white drop-shadow-lg mb-6">
              Building the Future of{" "}
              <span className="text-gradient">Connected Intelligence</span>
            </h1>
            <p className="text-lg text-white">
              We're a team of IoT engineers and AI researchers on a mission to make
              connected devices smarter, more autonomous, and truly intelligent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Section Breaker - Hero to Stats */}
      <motion.div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DA9928]/20 to-transparent" />
        <motion.div
          className="relative w-full max-w-5xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <svg
            viewBox="0 0 1200 80"
            className="w-full h-20"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradientAC1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="#DA9928" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="80%" stopColor="#DA9928" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,40 Q150,20 300,60 T600,40 T900,20 T1200,40"
              stroke="url(#waveGradientAC1)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
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

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-[#000000] via-[#0A4531]/95 to-[#000000] border-y-2 border-[#DA9928] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#DA9928]/10 to-transparent" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#DA9928]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#0A4531]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <p className="font-heading text-3xl md:text-4xl font-bold text-[#DA9928] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#DA9928] transition-all duration-300" />
              </div>
              <p className="text-sm text-gray-300 font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-gradient-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              align="left"
              badge="Contact Us"
              title="Get in Touch"
              description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            />

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Category
                </label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger className="bg-muted border-border">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="devops">DevOps / Engineering</SelectItem>
                    <SelectItem value="it">IT Operations</SelectItem>
                    <SelectItem value="sales">Sales Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="category" value={formData.category} />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your needs..."
                  rows={5}
                  required
                  className="bg-muted border-border resize-none"
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LdXQy0sAAAAAPuI_MvLMjIKR0w_muwwDZmRcpAq"
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>
              <input type="hidden" name="g-recaptcha-response" value={captchaToken || ''} />

              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={state.submitting || !captchaToken}
                className="w-full"
              >
                {state.submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <Mail className="w-6 h-6 text-accent mb-3" />
                <p className="font-medium text-foreground mb-1">Email</p>
                <a
                  href="mailto:support@isawebdev.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  support@isawebdev.com
                </a>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <Phone className="w-6 h-6 text-accent mb-3" />
                <p className="font-medium text-foreground mb-1">Phone</p>
                <a
                  href="tel:+1-415-533-8027"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +1 (415) 533-8027
                </a>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <MapPin className="w-6 h-6 text-accent mb-3" />
                <p className="font-medium text-foreground mb-1">Office</p>
                <p className="text-sm text-muted-foreground">
                  330 Bush Street<br />San Francisco, CA
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <Globe className="w-6 h-6 text-accent mb-3" />
                <p className="font-medium text-foreground mb-1">Website</p>
                <a
                  href="https://isawebdev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  isawebdev.com
                </a>
              </div>
            </div>

            <div className="aspect-video rounded-2xl bg-muted/30 border border-border overflow-hidden relative">
              <iframe
                src="https://maps.google.com/maps?q=330%20Bush%20Street,%20San%20Francisco,%20CA&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-gradient-to-br from-[#000000] via-[#0A4531]/95 to-[#000000] border-y-2 border-[#DA9928]">
        <SectionHeader
          title="Meet Our Team"
          description="Experienced IoT engineers and AI researchers dedicated to your success."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { name: "Alex Johnson", role: "Founder & CEO", bio: "15+ years in IoT infrastructure", icon: "/pic/29.svg" },
            { name: "Lisa Park", role: "VP Engineering", bio: "AI and machine learning expert", icon: "/pic/27.svg" },
            { name: "David Smith", role: "Head of Product", bio: "Former Google IoT lead", icon: "/pic/30.svg" },
            { name: "Maya Patel", role: "Lead Security Officer", bio: "Cloud security specialist", icon: "/pic/28.svg" },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-center hover:border-[#DA9928]/50 transition-all"
            >
              <img src={member.icon} alt={member.name} className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-1">{member.name}</h4>
              <p className="text-[#DA9928] text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about IsaWebDev and our IoT platform."
        />
        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {[
            {
              question: "How quickly can I connect my IoT devices?",
              answer: "Devices can be connected and fully operational within minutes using our streamlined setup and automatic cloud synchronization system."
            },
            {
              question: "Can I automate workflows across multiple devices?",
              answer: "Our AI engine enables complex, multi-device automation workflows that trigger actions based on real-time data and device patterns."
            },
            {
              question: "Does IsaWebDev support predictive maintenance?",
              answer: "The platform uses AI to predict potential failures and anomalies, helping prevent downtime before it affects operations."
            },
            {
              question: "Is my IoT data secure on the platform?",
              answer: "All data is encrypted in transit and at rest, following enterprise-grade security and compliance standards for full protection."
            },
            {
              question: "Can I integrate IsaWebDev with my existing systems?",
              answer: "APIs, webhooks, and integration guides allow smooth connectivity with enterprise tools, dashboards, and third-party applications."
            },
            {
              question: "What types of IoT networks can IsaWebDev handle?",
              answer: "The platform scales seamlessly from smart homes to industrial networks, energy systems, retail, healthcare, and multi-site enterprise deployments."
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-accent/50 transition-all"
            >
              <h4 className="font-semibold text-foreground mb-2 text-lg">{item.question}</h4>
              <p className="text-muted-foreground">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default AboutAndContact