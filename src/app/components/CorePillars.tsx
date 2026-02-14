import { motion } from "motion/react";
import { Sparkles, Shield, Target, Zap } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and forward-thinking solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency, ethics, and unwavering commitment.",
  },
  {
    icon: Target,
    title: "Long-Term Vision",
    description: "Creating sustainable value with a focus on enduring impact and growth.",
  },
  {
    icon: Zap,
    title: "Execution Excellence",
    description: "Delivering results through precision, speed, and operational mastery.",
  },
];

export function CorePillars() {
  return (
    <section className="py-24 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Our Core <span className="text-[#0B6B3A]">Pillars</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            The foundational principles that guide everything we build
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-[#EAEAEA] shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#F7F9FB] flex items-center justify-center mb-6 group-hover:bg-[#0B6B3A] transition-colors">
                <pillar.icon className="w-8 h-8 text-[#0B6B3A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl text-[#111111] mb-3" style={{ fontWeight: 600 }}>
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
