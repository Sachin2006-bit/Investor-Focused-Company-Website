import { motion } from "motion/react";
import { CheckCircle2, Star, Smartphone, Brain, ArrowRight, MapPin, Phone, Globe, Mail } from "lucide-react";

export function Services() {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="services">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-[#111111] mb-4" style={{ fontWeight: 700 }}>
            Services & <span className="text-[#0B6B3A]">Pricing</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Premium solutions to accelerate your brand's digital presence and growth.
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* =======================
              LEFT COLUMN: OUR SERVICES 
              ======================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Main Title Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-2xl text-[#111111] mb-8 font-bold flex items-center gap-3">
                  <span className="w-[4px] h-[32px] bg-[#0B6B3A] rounded-full inline-block"></span>
                  OUR SERVICES
                </h3>

                <div className="space-y-6 mb-10">
                  {/* Service Item 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F7F4] flex items-center justify-center shrink-0">
                      <Smartphone className="w-6 h-6 text-[#0B6B3A]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Web & App Development</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Native, cross-platform apps and scalable web platforms built for performance.
                      </p>
                    </div>
                  </div>

                  {/* Service Item 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F7F4] flex items-center justify-center shrink-0">
                      <Brain className="w-6 h-6 text-[#0B6B3A]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">AI Automation Services</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Intelligent workflows and custom AI agents perfectly tuned to your operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100 border-l-4 border-l-[#0B6B3A]">
                  <p className="text-sm font-semibold text-gray-800 mb-1">Fully customized solutions</p>
                  <p className="text-xs text-gray-500">Tailored to your business needs. Pricing based on requirements.</p>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-600 leading-relaxed">
                  We focus on delivering results-driven digital solutions that help businesses grow faster, attract more customers, and build a strong online presence.
                </p>
              </div>
            </div>

            {/* Contact Module */}
            <div className="bg-[#111111] rounded-3xl p-8 text-white mt-2 shadow-xl hover:shadow-[#0B6B3A]/10 transition-shadow">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                Get In Touch With Us
              </h4>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0B6B3A] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Hyderabad, India</span>
                </a>
                <a href="tel:+917416393958" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0B6B3A] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm">+91 7416 393 958</span>
                </a>
                <a href="mailto:info@linchpinsoftsolution.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0B6B3A] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm break-all">info@linchpinsoftsolution.com</span>
                </a>
                <a href="http://www.linchpinsoftsolution.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0B6B3A] transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-sm break-all">www.linchpinsoftsolution.com</span>
                </a>
              </div>
            </div>

          </motion.div>


          {/* =======================
              CENTER COLUMN: REEL HUB
              ======================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl text-[#111111] mb-3 font-bold flex items-center gap-3">
                <span className="w-[4px] h-[32px] bg-[#0B6B3A] rounded-full inline-block"></span>
                REEL CREATION HUB
              </h3>
              <p className="text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
                Includes content strategy, scripting, video shoot, editing, and anchor support.
              </p>

              <div className="space-y-8">
                {/* With Anchor */}
                <div>
                  <h4 className="text-[17px] font-bold text-[#0B6B3A] mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                    With Anchor <span className="text-gray-400 text-xs font-normal normal-case tracking-normal">(Presenter Included)</span>
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { count: "1 Reel", price: "₹1,500" },
                      { count: "3 Reels", price: "₹4,049" },
                      { count: "5 Reels", price: "₹6,363" },
                      { count: "10 Reels", price: "₹12,000" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center justify-between text-gray-800 font-medium pb-2 border-b border-gray-50 last:border-0 last:pb-0 text-sm">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A]" /> {item.count}</span>
                        <span>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Without Anchor */}
                <div>
                  <h4 className="text-[17px] font-bold text-[#0B6B3A] mb-4 uppercase tracking-wider text-sm">
                    Without Anchor
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { count: "1 Reel", price: "₹1,200" },
                      { count: "3 Reels", price: "₹3,240" },
                      { count: "5 Reels", price: "₹5,100" },
                      { count: "10 Reels", price: "₹9,600" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center justify-between text-gray-800 font-medium pb-2 border-b border-gray-50 last:border-0 last:pb-0 text-sm">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A]" /> {item.count}</span>
                        <span>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Ads */}
                <div>
                  <h4 className="text-[17px] font-bold text-[#0B6B3A] mb-4 uppercase tracking-wider text-sm">
                    AI Ads
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-2">30 Sec Ads</div>
                      <ul className="space-y-2">
                        {[
                          { count: "1 Reel", price: "₹1K" },
                          { count: "3 Reels", price: "₹2.7K" },
                          { count: "5 Reels", price: "₹4.25K" },
                        ].map((item, i) => (
                          <li key={i} className="flex items-center justify-between text-gray-800 font-medium text-sm">
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> {item.count}</span>
                            <span>{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-2">1 Min Ads</div>
                      <ul className="space-y-2">
                        {[
                          { count: "1 Reel", price: "₹1.5K" },
                          { count: "3 Reels", price: "₹4.05K" },
                          { count: "5 Reels", price: "₹6.37K" },
                        ].map((item, i) => (
                          <li key={i} className="flex items-center justify-between text-gray-800 font-medium text-sm">
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gray-300" /> {item.count}</span>
                            <span>{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>


          {/* =======================
              RIGHT COLUMN: MARKETING
              ======================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex-grow">
              <h3 className="text-2xl text-[#111111] mb-6 font-bold flex items-center gap-3 px-2">
                <span className="w-[4px] h-[32px] bg-[#0B6B3A] rounded-full inline-block"></span>
                DIGITAL MARKETING
              </h3>

              <div className="space-y-4">
                {/* Starter Package */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-[#0B6B3A]/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">Starter Package</h4>
                    <span className="font-bold text-[#0B6B3A]">₹30,000<span className="text-xs text-gray-500 font-normal">/mo</span></span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Lean launch with creative direction</p>
                  <ul className="space-y-2 mb-4">
                    <li className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Creative Direction</li>
                    <li className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Monthly Content Strategy</li>
                    <li className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Editor Briefs</li>
                  </ul>
                  <div className="bg-[#F9FAFB] rounded-lg p-3 text-xs text-gray-600 border border-gray-100">
                    <span className="font-semibold text-gray-800">📌 Client Provides:</span> Raw content + in-house editing<br />
                    <span className="font-semibold text-gray-800">👉 Best For:</span> Early-stage brands
                  </div>
                </div>

                {/* Growth Package - Most Popular */}
                <div className="bg-white rounded-2xl p-6 border-2 border-[#0B6B3A] shadow-md relative overflow-hidden transform hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 right-0 bg-[#0B6B3A] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#FDE047] fill-[#FDE047]" /> Most Popular
                  </div>

                  <div className="flex justify-between items-start mb-2 mt-1">
                    <h4 className="font-bold text-gray-900">Growth Package</h4>
                    <span className="font-bold text-[#0B6B3A]">₹60,000<span className="text-xs text-gray-500 font-normal">/mo</span></span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Scale content & build brand presence</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> 20–22 Posts/Mo</div>
                    <div className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Brand Guidelines</div>
                    <div className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Product Photoshoot</div>
                    <div className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Community Mgmt</div>
                    <div className="text-sm text-gray-700 flex items-start gap-2 col-span-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Strategy Calls</div>
                  </div>
                  <div className="bg-[#F0F7F4] rounded-lg p-3 text-xs text-[#0B6B3A] font-medium border border-[#0B6B3A]/20">
                    👉 Best For: Consistent growth
                  </div>
                </div>

                {/* Creative Director Package */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-[#0B6B3A]/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900 w-2/3">Creative Director & Global Growth</h4>
                    <span className="font-bold text-[#0B6B3A]">₹1.5L<span className="text-xs text-gray-500 font-normal">/mo</span></span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Full-scale brand building</p>
                  <ul className="space-y-2 mb-4">
                    <li className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Creative Director Role</li>
                    <li className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Multi-platform content</li>
                    <li className="text-sm text-gray-700 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#0B6B3A] shrink-0 mt-0.5" /> Influencer strategy & Market info</li>
                  </ul>
                  <div className="bg-[#F9FAFB] rounded-lg p-3 text-xs text-gray-600 border border-gray-100">
                    <span className="font-semibold text-gray-800">👉 Best For:</span> Global scale brands
                  </div>
                </div>

              </div>
            </div>



          </motion.div>

        </div>
      </div>
    </section>
  );
}
