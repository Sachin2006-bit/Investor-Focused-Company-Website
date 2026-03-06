import { motion } from "motion/react";
import { ArrowUpRight, Users, Share2, Radio, ShoppingBag, Globe, Sparkles, Coins, BarChart3, Box, Layers } from "lucide-react";
import biblewayLogo from "@/assets/biblewaylaningpage.png";
import manakartLogo from "@/assets/manakartlandingpage.png";
import manacoinLogo from "@/assets/manacoinimage.png";
import successionLogo from "@/assets/successionimage.jpeg";
// import manaCoinImage from "figma:asset/eea1afbed5d4da3fc537452beb0263b47cba38fd.png";
const manaCoinImage = "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JwdG8lMjBoinxlbnwxfHx8fDE3NzA5NzY1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"; // Crypto/Finance placeholder

const products = [
  {
    name: "Bibleway",
    tagline: "World's First Biblical Social Communicational Platform",
    description: "Bibleway is a faith-centered digital social platform designed to connect communities globally through scripture-based communication, digital fellowships, and media engagement.",
    image: biblewayLogo,
    features: [
      { icon: Share2, text: "Biblical social feed" },
      { icon: Users, text: "Community networking" },
      { icon: Radio, text: "Digital church integration" },
      { icon: Users, text: "Voice & media engagement tools" },
    ],
    highlight: "Faith-Tech Market Opportunity",
    reverse: false,
    websiteUrl: "https://bibleway-fe.vercel.app/",
  },
  {
    name: "ManaKart",
    tagline: "Taking Indian Commodity products to Global Market",
    description: "ManaKart is a cross-border eCommerce platform focused on empowering Indian artisans by connecting commodity products to global buyers.",
    image: manakartLogo,
    features: [
      { icon: Globe, text: "Global logistics integration" },
      { icon: Users, text: "Artisan onboarding" },
      { icon: ShoppingBag, text: "Secure payment gateway" },
      { icon: Sparkles, text: "Cultural storytelling marketplace" },
    ],
    highlight: "Projected GMV Growth",
    reverse: true,
    websiteUrl: "https://manakart.vercel.app/",
  },
  {
    name: "Mana Coin – Shoppy Finance",
    tagline: "Global Online Shopping & Digital Financial Infrastructure",
    description: "Mana Coin is a digital financial infrastructure layer designed to enable seamless online shopping transactions, cross-border settlements, and blockchain-backed commerce.",
    image: manacoinLogo,
    features: [
      { icon: Coins, text: "Token-based payments" },
      { icon: Globe, text: "Cross-border capabilities" },
      { icon: ShoppingBag, text: "Merchant ecosystem" },
      { icon: BarChart3, text: "Financial inclusion layer" },
    ],
    highlight: "Blockchain Infrastructure Roadmap",
    reverse: false,
    websiteUrl: "https://www.msfcoin.com/",
  },
  {
    name: "Linchpin Studio",
    tagline: "Original Biblical Web-Series & Faith-Based OTT Entertainment",
    description: "Linchpin Studio is building a scalable faith-tech entertainment ecosystem by producing original biblical web-series designed for global OTT distribution. By merging cinematic excellence with digital platform ownership, we aim to create a sustainable faith-based content network serving audiences worldwide. Our long-term vision includes multi-language productions, franchise storytelling, and global streaming partnerships.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3ZpZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcxMDQxNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      { icon: Layers, text: "Original Biblical Web-Series Production" },
      { icon: Sparkles, text: "High-Quality Cinematic Storytelling" },
      { icon: Globe, text: "Dedicated Faith-Based OTT Platform" },
      { icon: BarChart3, text: "Global Digital Distribution Strategy" },
    ],
    highlight: "Faith-Based Digital Media",
    reverse: true,
    websiteUrl: "https://www.msfcoin.com/",
  },
  {
    name: "Succession - A Brand of Manakart",
    tagline: "Old-Money Luxury Apparel & Timeless Craftsmanship",
    description: "Succession is positioned as a high-margin luxury fashion label targeting the global premium apparel market through curated collections rooted in heritage aesthetics and superior craftsmanship. The brand focuses on limited production, elevated pricing strategy, and aspirational storytelling to build long-term brand equity and exclusivity. Our long-term vision includes flagship retail experiences, global e-commerce expansion, and curated luxury collaborations.",
    image: successionLogo,
    features: [
      { icon: Layers, text: "Premium Leather & Fine Textile Collections" },
      { icon: Sparkles, text: "Timeless Old-Money Aesthetic" },
      { icon: Users, text: "Heritage-Inspired Tailoring" },
      { icon: ShoppingBag, text: "Limited Edition Luxury Drops" },
    ],
    highlight: "Luxury Heritage Fashion",
    reverse: false,
    websiteUrl: "https://succession.fit/",
  },
];

export function Products() {
  return (
    <section className="py-24 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Our Ecosystem of <span className="text-[#0B6B3A]">Products</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Building transformative digital platforms that create value across industries
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={index}
              id={product.name.toLowerCase().replace(/\s+/g, '-').replace(/–/g, '').replace(/--+/g, '-')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${product.reverse ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={product.reverse ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[280px] md:h-[320px] object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0B6B3A]/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content */}
                <div className={product.reverse ? "lg:col-start-1 lg:row-start-1 text-left" : "text-left"}>
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full border border-[#0B6B3A]/20">
                    <div className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
                    <span className="text-xs md:text-sm text-[#0B6B3A]">{product.highlight}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#111111] mb-3" style={{ fontWeight: 700 }}>
                    {product.name}
                  </h3>

                  <p className="text-[#0B6B3A] text-base md:text-lg mb-6" style={{ fontWeight: 500 }}>
                    {product.tagline}
                  </p>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                          <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-[#0B6B3A]" />
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={product.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-[#0B6B3A] group"
                    style={{ fontWeight: 600 }}
                  >
                    View website
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}