import { motion } from "motion/react";
import { Smartphone, Globe, Box, Brain, TrendingUp, Gamepad2 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built for performance and user experience.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable web applications with modern frameworks and cutting-edge technologies.",
  },
  {
    icon: Box,
    title: "Product Engineering",
    description: "End-to-end product development from ideation to deployment and scaling.",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Automation",
    description: "Machine learning solutions and automation systems that drive business efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "Data-driven marketing strategies and growth hacking for maximum ROI.",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Engaging gaming experiences across platforms with stunning visuals and mechanics.",
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Enterprise <span className="text-[#0B6B3A]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored for modern businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`border-2 rounded-2xl p-8 transition-all ${hoveredIndex === index
                  ? "border-[#0B6B3A] bg-[#F7F9FB] shadow-xl"
                  : "border-[#EAEAEA] bg-white hover:shadow-lg"
                }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all ${hoveredIndex === index
                  ? "bg-[#0B6B3A]"
                  : "bg-[#F7F9FB]"
                }`}>
                <service.icon className={`w-7 h-7 transition-colors ${hoveredIndex === index ? "text-white" : "text-[#0B6B3A]"
                  }`} />
              </div>
              <h3 className="text-xl text-[#111111] mb-3" style={{ fontWeight: 600 }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
