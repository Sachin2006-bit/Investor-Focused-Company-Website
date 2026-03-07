import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/linchpin-logo.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Products",
    "Services",
    "Investors",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center">
              <img
                src={logo}
                alt="LINCHPIN"
                className="h-12 md:h-16 lg:h-20 w-auto transition-all"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-gray-600 hover:text-[#0B6B3A] transition-colors relative group whitespace-nowrap"
                style={{ fontWeight: 500 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0B6B3A] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#0B6B3A] text-white rounded-xl hover:bg-[#0F8F4E] transition-colors shadow-md whitespace-nowrap"
              style={{ fontWeight: 600 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0B6B3A] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-6 border-t border-[#EAEAEA] overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 text-gray-600 hover:text-[#0B6B3A] hover:bg-gray-50 rounded-lg transition-all"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ fontWeight: 500 }}
                  >
                    {item}
                  </a>
                ))}
                <div className="px-4 pt-4 border-t border-[#EAEAEA] mt-2">
                  <a
                    href="#contact"
                    className="w-full px-6 py-3 bg-[#0B6B3A] text-white rounded-xl hover:bg-[#0F8F4E] transition-colors shadow-lg flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ fontWeight: 600 }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}