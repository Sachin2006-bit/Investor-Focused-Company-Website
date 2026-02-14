import { motion } from "motion/react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    description: "Establishing core products and market presence",
    year: "2024-2025",
  },
  {
    phase: "Phase 2",
    title: "Product Expansion",
    description: "Scaling existing products and launching new verticals",
    year: "2025-2026",
  },
  {
    phase: "Phase 3",
    title: "Global Scaling",
    description: "International expansion and strategic partnerships",
    year: "2026-2027",
  },
  {
    phase: "Phase 4",
    title: "Infrastructure & Tokenization",
    description: "Building decentralized infrastructure and token economy",
    year: "2027+",
  },
];

export function VisionRoadmap() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Vision <span className="text-[#0B6B3A]">Roadmap</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our strategic journey towards global technology leadership
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-[#0B6B3A]/20" />

          <div className="grid grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Gold Dot */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="w-6 h-6 rounded-full bg-[#F4C430] border-4 border-white shadow-lg relative z-10"
                  />
                </div>

                {/* Content */}
                <div className="bg-[#F7F9FB] rounded-2xl p-6 border border-[#EAEAEA]">
                  <div className="text-[#0B6B3A] text-sm mb-2" style={{ fontWeight: 600 }}>
                    {phase.phase}
                  </div>
                  <h3 className="text-xl text-[#111111] mb-2" style={{ fontWeight: 600 }}>
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="text-xs text-[#0B6B3A] opacity-70">
                    {phase.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#F4C430] border-4 border-white shadow-lg flex-shrink-0" />
                {index < phases.length - 1 && (
                  <div className="w-0.5 h-full bg-[#0B6B3A]/20 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="bg-[#F7F9FB] rounded-2xl p-6 border border-[#EAEAEA] flex-1 mb-8">
                <div className="text-[#0B6B3A] text-sm mb-2" style={{ fontWeight: 600 }}>
                  {phase.phase}
                </div>
                <h3 className="text-xl text-[#111111] mb-2" style={{ fontWeight: 600 }}>
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {phase.description}
                </p>
                <div className="text-xs text-[#0B6B3A] opacity-70">
                  {phase.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
