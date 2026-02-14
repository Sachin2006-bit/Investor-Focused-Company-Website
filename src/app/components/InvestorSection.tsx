import { motion } from "motion/react";
import { TrendingUp, DollarSign, Users, Rocket } from "lucide-react";

const investorHighlights = [
  {
    icon: TrendingUp,
    title: "Business Model",
    description: "Multi-vertical revenue streams across B2B SaaS, B2C platforms, and enterprise services.",
  },
  {
    icon: DollarSign,
    title: "Revenue Streams",
    description: "Subscription models, transaction fees, licensing, and enterprise contracts.",
  },
  {
    icon: Users,
    title: "Market Size",
    description: "Targeting $500B+ combined TAM across AI, blockchain, eCommerce, and enterprise software.",
  },
  {
    icon: Rocket,
    title: "Growth Roadmap",
    description: "Aggressive expansion strategy with focus on product-market fit and global scaling.",
  },
];

export function InvestorSection() {
  return (
    <section className="py-24 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Designed for Scale. Built for{" "}
            <span className="text-[#0B6B3A]">Global Expansion</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Investment opportunity in a diversified technology company with proven execution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {investorHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#EAEAEA] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#0B6B3A] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-[#111111] mb-2" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Funding Ask Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#0B6B3A] to-[#0F8F4E] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="investor-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#investor-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4" style={{ fontWeight: 700 }}>
              Ready to Partner with Us?
            </h3>
            <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in building the infrastructure for the next generation of digital innovation
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-6 md:px-10 md:py-8 bg-white rounded-2xl md:rounded-3xl border border-white/20 w-full max-w-md md:max-w-none shadow-xl">
                <div className="text-center w-full">
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Contact our team at</p>
                  <a
                    href="mailto:info@linchpinsoftsolution.com"
                    className="text-lg sm:text-2xl md:text-3xl text-[#111111] hover:text-[#0B6B3A] transition-colors break-words block"
                    style={{ fontWeight: 800 }}
                  >
                    info@linchpinsoftsolution.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
