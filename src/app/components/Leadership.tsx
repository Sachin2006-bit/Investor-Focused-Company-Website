import { motion } from "motion/react";
import babuImg from "@/assets/babu.png";
import sujayImg from "@/assets/sujay.jpeg";
import sachinImg from "@/assets/sachin2.jpeg";
import akshayImg from "@/assets/akshay.jpeg";

const leaders = [
  {
    name: "Babu",
    title: "Founder and CEO",
    quote: "Building the future, one innovation at a time.",
    image: babuImg,
  },
  {
    name: "Sujay",
    title: "Director",
    quote: "Innovation is our language, execution is our strength.",
    image: sujayImg,
  },
  {
    name: "Sachin",
    title: "CTO",
    quote: "Engineering excellence at scale, every day.",
    image: sachinImg,
  },
  {
    name: "Akshay",
    title: "Operations Executive",
    quote: "Driving operational excellence to power our vision.",
    image: akshayImg,
  },
];

export function Leadership() {
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
          <h2 className="text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Meet Our <span className="text-[#0B6B3A]">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced visionaries driving innovation and growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#EAEAEA] hover:shadow-xl transition-all group"
            >
              {/* Circular Image */}
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#F7F9FB] group-hover:border-[#0B6B3A] transition-colors">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </div>

              <h3 className="text-xl text-[#111111] text-center mb-1" style={{ fontWeight: 600 }}>
                {leader.name}
              </h3>
              <p className="text-[#0B6B3A] text-center mb-4" style={{ fontWeight: 500 }}>
                {leader.title}
              </p>
              <p className="text-gray-600 text-center italic text-sm leading-relaxed">
                "{leader.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
