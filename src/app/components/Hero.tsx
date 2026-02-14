import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/linchpinlogoanimation.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0B6B3A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#0B6B3A]/20 bg-[#F7F9FB]">
              <p className="text-sm text-[#0B6B3A]">Steadfast in all Your Ways</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 text-[#111111] leading-tight" style={{ fontWeight: 700 }}>
              Engineering The Future of{" "}
              <span className="text-[#0B6B3A]">Intelligent Digital Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              LINCHPIN is a multi-vertical technology company building scalable digital products
              across AI, Blockchain, Commerce, and Enterprise Software.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 lg:mb-0">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#0B6B3A] text-white rounded-2xl flex items-center justify-center gap-2 group hover:bg-[#0F8F4E] transition-all shadow-lg"
              >
                Explore Our Ecosystem
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B6B3A]/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#F4C430] rounded-full blur-3xl opacity-50"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0F8F4E] rounded-full blur-3xl opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
