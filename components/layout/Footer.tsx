import { Link } from "react-router-dom";
import { Twitter, Youtube, Facebook } from "lucide-react";

// Custom Pinterest icon component
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/isawebdev/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@Isawebdev", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/isaweb_dev", label: "Twitter" },
  { icon: PinterestIcon, href: "https://www.pinterest.com/Adam_Techs_/", label: "Pinterest" },
];

const footerLinks = {
  product: [
    { name: "How It Works", path: "/how-it-works" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Pricing", path: "/plans-pricing" },
  ],
  company: [
    { name: "Contact", path: "/about-contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#000000] via-[#0A4531]/95 to-[#000000] border-t-2 border-[#DA9928] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top gradient accent (smaller) */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#DA9928]/12 via-transparent to-transparent" />
        {/* Top left gradient blob (reduced) */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-[#DA9928]/18 to-transparent rounded-full blur-3xl opacity-80" />
        {/* Bottom right gradient blob (reduced) */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-tl from-[#0A4531]/28 to-transparent rounded-full blur-3xl opacity-80" />
        {/* Subtle grid pattern (lighter) */}
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `linear-gradient(#DA9928 1px, transparent 1px), linear-gradient(90deg, #DA9928 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        {/* Brand Section - Top */}
        <div className="mb-6 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden transition-all hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DA9928]/20 to-transparent rounded-2xl blur-xl"></div>
              <img
                src="/pic/new.svg"
                alt="IsaWebDev Logo"
                className="w-16 h-16 object-contain relative z-10 drop-shadow-2xl"
                loading="lazy"
                decoding="async"
                width="64"
                height="64"
              />
            </div>
          </Link>
          <p className="text-gray-300 leading-relaxed text-sm">
            IsaWebDev unifies IoT devices with AI-driven automation, real-time intelligence, and predictive insights to create faster, smarter, fully connected digital ecosystems.
          </p>
        </div>

        {/* 3 Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-lg text-[#DA9928] tracking-wide">COMPANY</h4>
            <ul className="space-y-2 border-l-2 border-[#DA9928] pl-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#DA9928] transition-colors duration-300 relative group text-sm"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-lg text-[#DA9928] tracking-wide">PRODUCTS</h4>
            <ul className="space-y-2 border-l-2 border-[#DA9928] pl-3">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#DA9928] transition-colors duration-300 relative group text-sm"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links & Social */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-lg text-[#DA9928] tracking-wide">LINKS</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h5 className="text-[#DA9928] font-semibold text-sm tracking-wide">CONNECT:</h5>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#DA9928] pl-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-10 h-10 rounded-lg bg-[#000000]/50 border-2 border-[#DA9928] flex items-center justify-center text-[#DA9928] hover:bg-[#DA9928] hover:text-[#000000] hover:scale-110 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[#DA9928]/50"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#DA9928] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <social.icon size={18} className="relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with accent */}
        <div className="mt-4 pt-3 border-t border-[#DA9928]/40 relative">
          <div className="absolute -top-1 left-0 w-20 h-1 bg-[#DA9928]" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 tracking-wide">
            © {new Date().getFullYear()} <span className="text-[#DA9928] font-bold">IsaWebDev</span> • All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-xs text-gray-400 hover:text-[#DA9928] transition-colors duration-300 tracking-wide"
            >
            
            </Link>
            <Link
              to="/terms-conditions"
              className="text-xs text-gray-400 hover:text-[#DA9928] transition-colors duration-300 tracking-wide"
            >
              
            </Link>
          </div>
        </div>
        {/* Decorative corner SVGs */}
        <svg className="absolute left-4 bottom-4 w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="2.5" fill="#DA9928" />
          <circle cx="12" cy="12" r="1.5" fill="#DA9928" opacity="0.6" />
          <circle cx="18" cy="18" r="1" fill="#DA9928" opacity="0.4" />
        </svg>
        <svg className="absolute right-4 bottom-6 w-14 h-14 opacity-70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="44" height="44" rx="8" stroke="#0A4531" strokeWidth="2" fill="url(#g)" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0A4531" stopOpacity="0.12" />
              <stop offset="1" stopColor="#DA9928" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};
