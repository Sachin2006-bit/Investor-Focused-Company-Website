import { motion } from "motion/react";
import { Users, Globe, TrendingUp } from "lucide-react";

const highlights = [
  { icon: TrendingUp, title: "15+ Years", subtitle: "Experience" },
  { icon: Users, title: "Multi-Industry", subtitle: "Presence" },
  { icon: Globe, title: "Global Expansion", subtitle: "Vision" },
];

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-6 leading-tight" style={{ fontWeight: 700 }}>
              <span className="text-[#0B6B3A]">Built</span> on innovation.
              <br />
              <span className="text-[#0B6B3A]">Driven</span> by purpose.
              <br />
              <span className="text-[#0B6B3A]">Designed</span> for global scale.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              LINCHPIN stands at the intersection of technology and transformation,
              creating digital infrastructure that powers the next generation of innovation.
            </p>
          </motion.div>

          {/* Right side - Highlight Cards */}
          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="border border-[#EAEAEA] rounded-2xl p-8 bg-white shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#F7F9FB] flex items-center justify-center group-hover:bg-[#0B6B3A] transition-colors">
                    <item.icon className="w-7 h-7 text-[#0B6B3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-[#111111] mb-1" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
