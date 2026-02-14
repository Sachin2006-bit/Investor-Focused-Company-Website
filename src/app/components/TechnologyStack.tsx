import { motion } from "motion/react";

const techStack = {
  Frontend: ["React", "Angular", "Vue", "TypeScript"],
  Backend: ["Node.js", "Python", "Java", ".NET", "PHP"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  AI: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"],
};

export function TechnologyStack() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Technology <span className="text-[#0B6B3A]">Stack</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Building with industry-leading technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F7F9FB] rounded-2xl p-8 border border-[#EAEAEA]"
            >
              <h3 className="text-xl text-[#0B6B3A] mb-6" style={{ fontWeight: 600 }}>
                {category}
              </h3>
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-white rounded-lg px-4 py-3 text-gray-700 text-sm border border-[#EAEAEA]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
