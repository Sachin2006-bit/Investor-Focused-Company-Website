import { motion } from "motion/react";

const footerLinks = [
  {
    category: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#about" },
    ],
  },
  {
    category: "Products",
    links: [
      { name: "Bibleway", href: "#bibleway" },
      { name: "ManaKart", href: "#manakart" },
      { name: "Mana Coin", href: "#mana-coin-shoppy-finance" },
      { name: "Linchpin Studio", href: "#linchpin-studio" },
      { name: "Succession - A Brand of Manakart", href: "#succession" },
    ],
  },
  {
    category: "Services",
    links: [
      { name: "Mobile Development", href: "#mobile-app-development" },
      { name: "Web Development", href: "#web-development" },
      { name: "AI Solutions", href: "#ai-intelligent-automation" },
      { name: "Consulting", href: "#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#EAEAEA] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-[#0B6B3A] mb-3" style={{ fontWeight: 700 }}>
                LINCHPIN
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Steadfast in all Your Ways
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Engineering the future of intelligent digital infrastructure through
                innovation, integrity, and execution excellence.
              </p>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="col-span-1"
            >
              <h4 className="text-sm text-[#111111] mb-6" style={{ fontWeight: 600 }}>
                {section.category}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-[#0B6B3A] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EAEAEA]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 LINCHPIN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
