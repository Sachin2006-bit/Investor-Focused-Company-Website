import { motion } from "motion/react";
import { Mail, Calendar, Users } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-6xl text-[#111111] mb-6" style={{ fontWeight: 700 }}>
            Let's Build the Future{" "}
            <span className="text-[#0B6B3A] relative inline-block">
              Together
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F4C430] to-[#0F8F4E]"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're an investor, strategic partner, or enterprise client,
            we're ready to collaborate on transformative projects.
          </p>


        </motion.div>
      </div>
    </section>
  );
}
