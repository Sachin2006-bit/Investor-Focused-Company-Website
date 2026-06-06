import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  Check, 
  Sparkles, 
  Info, 
  DollarSign, 
  PlusCircle, 
  Video, 
  Instagram, 
  LayoutGrid, 
  Scale as ScaleIcon, 
  BookOpen, 
  Briefcase,
  AlertCircle,
  Laptop,
  Smartphone
} from "lucide-react";

export function Services() {
  const [activeTab, setActiveTab] = useState<"marketing" | "reels" | "web_mobile" | "policies">("marketing");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [reelsTrack, setReelsTrack] = useState<"track1" | "track2">("track1");

  // Digital Marketing Packages
  const marketingPackages = [
    {
      name: "SEED",
      tagline: "Early-stage brand building",
      mrp: 35000,
      offer: 30000,
      popular: false,
      features: [
        "7 Reels (3 influencer, 4 solo)",
        "5 Static Posts + Captions",
        "2 Carousels (3–5 slides)",
        "10 Stories/month",
        "1 Influencer of your choice",
        "1 Shoot Day included",
        "1 Meta Ads Campaign",
        "Monthly Content Calendar"
      ]
    },
    {
      name: "GROWTH",
      tagline: "Scaling your content engine",
      mrp: 75000,
      offer: 60000,
      popular: true,
      features: [
        "12 Reels (6 influencer, 6 solo)",
        "10 Static Posts + Hashtag Sets",
        "5 Carousels (5–7 slides)",
        "20 Stories/month",
        "3 Influencers of your choice",
        "5 Shoot Days (5 hrs each)",
        "Brand Guidelines",
        "5 Meta Ad Campaigns"
      ]
    },
    {
      name: "SCALE",
      tagline: "Performance-led content marketing",
      mrp: 110000,
      offer: 100000,
      popular: false,
      features: [
        "20 Reels (all with influencers)",
        "5 Static Posts + Hashtag Sets",
        "5 Carousels (up to 10 slides)",
        "Stories on request",
        "5 Influencers",
        "8 Shoot Days included",
        "10 Meta Ad Campaigns",
        "Full Analytics Dashboard"
      ]
    },
    {
      name: "ELITE",
      tagline: "Full-stack creative & performance",
      mrp: 165000,
      offer: 140000,
      popular: false,
      features: [
        "30 Reels (all with influencers)",
        "15 Static Posts + Hashtag Sets",
        "10 Carousels (multi-slide)",
        "60 Stories/month",
        "10 Influencers",
        "12 Shoot Days",
        "20 Meta Ad Campaigns",
        "Dedicated Creative Director"
      ]
    }
  ];

  // Reel Creation Track 1 (With Influencers)
  const reelsTrack1 = [
    {
      name: "SILVER",
      tagline: "Entry-level influencer reels",
      rate: "₹2,000",
      description: "Standard influencer · core edits · basic scripting · single-location shoot",
      packages: [
        { qty: "3 Reels Package", price: "₹6,000" },
        { qty: "5 Reels Package", price: "₹10,000" },
        { qty: "10 Reels Package", price: "₹20,000" },
        { qty: "Custom Bulk", price: "Let's Talk" }
      ]
    },
    {
      name: "GOLD",
      tagline: "Our signature tier",
      rate: "₹2,500",
      description: "Premium influencer · advanced edits · professional scripting · multi-angle shoot · strategy support",
      popular: true,
      packages: [
        { qty: "3 Reels Package", price: "₹7,500" },
        { qty: "5 Reels Package", price: "₹12,500" },
        { qty: "10 Reels Package", price: "₹25,000" },
        { qty: "Custom Bulk", price: "Let's Talk" }
      ]
    },
    {
      name: "PLATINUM",
      tagline: "Cinematic, top-tier creator",
      rate: "₹3,000",
      description: "Top-tier influencer · cinematic edits · in-depth scripting · multi-day shoot · full content strategy",
      packages: [
        { qty: "3 Reels Package", price: "₹9,000" },
        { qty: "5 Reels Package", price: "₹15,000" },
        { qty: "10 Reels Package", price: "₹30,000" },
        { qty: "Custom Bulk", price: "Let's Talk" }
      ]
    }
  ];

  // Reel Creation Track 2 (Without Influencers)
  const reelsTrack2 = [
    {
      name: "GOLD",
      tagline: "Brand-led signature reels",
      rate: "₹1,500",
      description: "Standard edits · core scripting · single-day shoot · brand-aligned content strategy",
      packages: [
        { qty: "3 Reels Package", price: "₹4,500" },
        { qty: "5 Reels Package", price: "₹7,500" },
        { qty: "10 Reels Package", price: "₹15,000" },
        { qty: "Custom Bulk", price: "Let's Talk" }
      ]
    },
    {
      name: "DIAMOND",
      tagline: "Cinematic brand storytelling",
      rate: "₹2,000",
      description: "Cinematic edits · in-depth scripting · multi-angle / multi-location shoot · complete content strategy",
      popular: true,
      packages: [
        { qty: "3 Reels Package", price: "₹6,000" },
        { qty: "5 Reels Package", price: "₹10,000" },
        { qty: "10 Reels Package", price: "₹20,000" },
        { qty: "Custom Bulk", price: "Let's Talk" }
      ]
    }
  ];

  // Deliverables baseline
  const deliverables = [
    {
      qty: "3 Reels Package",
      items: [
        "1 Influencer included",
        "1 Shoot day",
        "2 Revisions per reel",
        "Full editing & post-production",
        "Minimum package for premium influencers"
      ]
    },
    {
      qty: "5 Reels Package",
      items: [
        "1 Influencer included",
        "1–2 Shoot days (max)",
        "2 Revisions per reel",
        "Full editing & post-production",
        "Professional scripting"
      ]
    },
    {
      qty: "10 Reels Package",
      items: [
        "2 Influencers included",
        "Up to 3 Shoot days (max)",
        "2 Revisions per reel",
        "Full editing & post-production",
        "Professional scripting"
      ]
    },
    {
      qty: "Custom Bulk",
      items: [
        "Custom influencer allocation",
        "Flexible shoot schedule",
        "2 Revisions per reel",
        "Bulk pricing discussion",
        "Dedicated project manager"
      ]
    }
  ];

  // Rules and Regulations
  const policies = [
    { id: "01", title: "Minimum Reel Order", desc: "The minimum order for reel production is 3 reels. No single-reel orders are accepted. All base packages are priced at ₹1,500 per reel (solo, Gold tier)." },
    { id: "02", title: "Influencer Allocation", desc: "Packages of up to 5 reels include 1 influencer. The 10-reel package includes 2 influencers. Any additional influencer is charged separately: ₹2,500 – ₹6,000 per influencer." },
    { id: "03", title: "Premium Influencers", desc: "For premium influencer talent, the minimum commitment is a 3-reel package. Premium influencer selection affects per-reel pricing and is discussed prior to confirmation." },
    { id: "04", title: "Revision Policy", desc: "Each reel comes with 2 free revisions. Any additional revision beyond the 2nd will be subject to extra charges as discussed with the project coordinator." },
    { id: "05", title: "Shoot Day Limits", desc: "5-reel packages: max 1–2 shoot days. 10-reel packages: max 3 shoot days. Additional shoot days will incur extra production fees." },
    { id: "06", title: "Raw Footage Charges", desc: "Clients requesting raw, unedited footage will be charged 40% of the total project bill. Raw files are delivered only after full payment clearance." },
    { id: "07", title: "Influencer Pricing Variance", desc: "The selection of influencer directly impacts reel pricing. Rates vary from ₹2,500 to ₹6,000 per additional influencer based on their profile, following, and engagement metrics." },
    { id: "08", title: "Custom Bulk Packages", desc: "For orders beyond 10 reels or special campaign requirements, custom bulk pricing is discussed case-by-case. All custom packages include a dedicated project manager." }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0
    }).format(price);
  };

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
          <h2 className="text-4xl lg:text-5xl text-[#111111] mb-4 font-bold">
            Our <span className="text-[#0B6B3A]">Services & Pricing</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choose the perfect plan that fits your brand's growth and marketing ambitions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "marketing"
                  ? "bg-[#0B6B3A] text-white shadow-md"
                  : "text-gray-600 hover:text-[#0B6B3A] hover:bg-gray-50"
              }`}
            >
              Digital Marketing Packages
            </button>
            <button
              onClick={() => setActiveTab("reels")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "reels"
                  ? "bg-[#0B6B3A] text-white shadow-md"
                  : "text-gray-600 hover:text-[#0B6B3A] hover:bg-gray-50"
              }`}
            >
              Reel Creation Tiers
            </button>
            <button
              onClick={() => setActiveTab("web_mobile")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "web_mobile"
                  ? "bg-[#0B6B3A] text-white shadow-md"
                  : "text-gray-600 hover:text-[#0B6B3A] hover:bg-gray-50"
              }`}
            >
              Web & Mobile Services
            </button>
            <button
              onClick={() => setActiveTab("policies")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "policies"
                  ? "bg-[#0B6B3A] text-white shadow-md"
                  : "text-gray-600 hover:text-[#0B6B3A] hover:bg-gray-50"
              }`}
            >
              Inclusions & Policies
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            {activeTab === "marketing" && (
              <motion.div
                key="marketing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Billing Cycle Toggle */}
                <div className="flex flex-col items-center mb-10">
                  <div className="flex items-center gap-3 bg-white p-1 rounded-full border border-gray-100 shadow-sm">
                    <button
                      onClick={() => setBillingCycle("monthly")}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                        billingCycle === "monthly"
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Monthly Billing
                    </button>
                    <button
                      onClick={() => setBillingCycle("annual")}
                      className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        billingCycle === "annual"
                          ? "bg-[#0B6B3A] text-white"
                          : "text-gray-600 hover:text-[#0B6B3A]"
                      }`}
                    >
                      Annual Billing
                      <span className="bg-[#EAF5EF] text-[#0B6B3A] text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                        15% OFF
                      </span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#0B6B3A]" />
                    Limited-Time Launch Offer • Save up to ₹25,000 + Reel Hub Add-on Available
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {marketingPackages.map((pkg) => {
                    const pricePerMonth = billingCycle === "annual" ? pkg.offer * 0.85 : pkg.offer;
                    const savings = pkg.mrp - pricePerMonth;
                    return (
                      <div
                        key={pkg.name}
                        className={`bg-white rounded-3xl p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                          pkg.popular
                            ? "border-2 border-[#0B6B3A] shadow-lg md:scale-105 z-10"
                            : "border-gray-100 shadow-sm hover:shadow-md"
                        }`}
                      >
                        {pkg.popular && (
                          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0B6B3A] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-sm uppercase">
                            Most Popular
                          </span>
                        )}
                        <div>
                          <div className="mb-6">
                            <span className="text-xs font-bold text-[#0B6B3A] uppercase tracking-widest">{pkg.tagline}</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">{pkg.name}</h3>
                          </div>

                          <div className="mb-6">
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-black text-gray-900">
                                ₹{formatPrice(pricePerMonth)}
                              </span>
                              <span className="text-sm text-gray-400 font-medium">/ mo</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-1.5">
                              <span className="text-xs text-gray-400 line-through">
                                MRP ₹{formatPrice(pkg.mrp)}
                              </span>
                              <span className="text-xs bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-bold">
                                Save ₹{formatPrice(savings)}
                              </span>
                            </div>
                          </div>

                          <div className="border-t border-gray-100 pt-6 mb-8">
                            <ul className="space-y-3.5">
                              {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-2.5 items-start">
                                  <Check className="w-4 h-4 text-[#0B6B3A] mt-1 shrink-0" />
                                  <span className="text-sm text-gray-600 leading-tight">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <a
                          href={`mailto:info@linchpinsoftsolution.com?subject=Inquiry regarding Digital Marketing Package: ${pkg.name}`}
                          className={`w-full py-3.5 rounded-xl font-bold text-center block transition-all ${
                            pkg.popular
                              ? "bg-[#0B6B3A] text-white hover:bg-[#08532c] shadow-md shadow-[#0B6B3A]/20"
                              : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                          }`}
                        >
                          Choose {pkg.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === "reels" && (
              <motion.div
                key="reels"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Track Selector */}
                <div className="flex justify-center mb-10">
                  <div className="inline-flex bg-white p-1 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-1">
                    <button
                      onClick={() => setReelsTrack("track1")}
                      className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        reelsTrack === "track1"
                          ? "bg-[#0B6B3A] text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Video className="w-4 h-4" />
                      Track 1: With Influencers
                    </button>
                    <button
                      onClick={() => setReelsTrack("track2")}
                      className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        reelsTrack === "track2"
                          ? "bg-[#0B6B3A] text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Instagram className="w-4 h-4" />
                      Track 2: Solo / Brand-Led
                    </button>
                  </div>
                </div>

                {/* Introduction Text */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <p className="text-base text-gray-500 leading-relaxed">
                    {reelsTrack === "track1"
                      ? "Premium on-camera faces, full production, scripting, shooting, editing and content strategy. Tiers are decided by influencer profile, reach, scripting depth, and edit complexity."
                      : "Founder-fronted, product-focused, or brand-led content with no third-party talent. High studio quality without an external influencer."}
                  </p>
                  <p className="text-xs text-[#0B6B3A] font-semibold mt-2">
                    * All packages below are calculated on a per-reel basis.
                  </p>
                </div>

                {/* Cards for Track */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
                  {(reelsTrack === "track1" ? reelsTrack1 : reelsTrack2).map((tier) => (
                    <div
                      key={tier.name}
                      className={`bg-white rounded-3xl p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                        tier.popular
                          ? "border-2 border-[#0B6B3A] shadow-lg md:scale-105 z-10"
                          : "border-gray-100 shadow-sm hover:shadow-md"
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0B6B3A] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-sm uppercase">
                          Our Signature Tier
                        </span>
                      )}
                      <div>
                        <div className="mb-6">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            {tier.tagline}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-1">{tier.name}</h3>
                          <p className="text-xs text-gray-500 mt-2 leading-relaxed">{tier.description}</p>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-3xl font-black text-[#0B6B3A]">
                              {tier.rate}
                            </span>
                            <span className="text-sm text-gray-400 font-medium">/ reel</span>
                          </div>
                        </div>

                        {/* Package Pricing List */}
                        <div className="border-t border-gray-100 pt-6 mb-8">
                          <h4 className="text-xs font-bold text-gray-800 uppercase mb-4 tracking-wider">Package Sizes:</h4>
                          <div className="space-y-3">
                            {tier.packages.map((pkg, idx) => (
                              <div key={idx} className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                                <span className="text-sm font-semibold text-gray-700">{pkg.qty}</span>
                                <span className="text-sm font-bold text-[#0B6B3A]">{pkg.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <a
                        href={`mailto:info@linchpinsoftsolution.com?subject=Inquiry regarding Reel Package: ${tier.name}`}
                        className="w-full py-3 rounded-xl font-bold text-center block bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                      >
                        Inquire Now
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-emerald-50 rounded-2xl p-5 max-w-2xl mx-auto border border-[#0B6B3A]/20 text-center">
                  <p className="text-xs text-[#0B6B3A] font-semibold leading-relaxed">
                    💡 <strong>Want more flexibility?</strong> Track 1 (with influencer) and Track 2 (solo) can be mixed inside a custom bulk package. Speak to our project coordinator about hybrid campaign builds.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "web_mobile" && (
              <motion.div
                key="web_mobile"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex p-3 rounded-2xl bg-[#F0F7F4] text-[#0B6B3A]">
                      <Laptop className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Web & Mobile Services</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We engineer high-performance web platforms and mobile applications tailored to your specific operational needs. From enterprise dashboards and e-commerce architectures to sleek iOS & Android consumer apps, our team delivers production-ready digital products.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2.5 text-xs text-gray-600">
                        <Check className="w-4 h-4 text-[#0B6B3A] shrink-0" />
                        <span>Responsive, modern Web Apps (Next.js, React, Node.js)</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-600">
                        <Check className="w-4 h-4 text-[#0B6B3A] shrink-0" />
                        <span>Native & Hybrid Mobile Apps (React Native, Flutter)</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-600">
                        <Check className="w-4 h-4 text-[#0B6B3A] shrink-0" />
                        <span>Custom API Integrations & Database Architecture</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs text-gray-600">
                        <Check className="w-4 h-4 text-[#0B6B3A] shrink-0" />
                        <span>Cloud Deployments & Serverless Architectures (AWS, Vercel)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-80 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between text-center md:text-left h-full min-h-[220px]">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2">Pricing & Scope</h4>
                      <p className="text-xs text-gray-500 leading-relaxed mb-6">
                        Because web and app solutions vary greatly based on complexity, integration requirements, and design scope, we provide tailored pricing packages on a per-project basis.
                      </p>
                    </div>
                    <a
                      href="mailto:info@linchpinsoftsolution.com?subject=Inquiry regarding Web & Mobile Development Services"
                      className="w-full py-3.5 rounded-xl font-bold text-center block bg-[#0B6B3A] text-white hover:bg-[#08532c] transition-colors shadow-sm"
                    >
                      Contact Us for Details
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "policies" && (
              <motion.div
                key="policies"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* 2 Column sub-layout for deliverables & rules */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left block - Inclusions & Addons */}
                  <div className="lg:col-span-5 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2.5">
                        <Briefcase className="w-5 h-5 text-[#0B6B3A]" />
                        Package Deliverables Baseline
                      </h3>
                      <div className="space-y-6">
                        {deliverables.map((item, idx) => (
                          <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="text-sm font-bold text-[#0B6B3A] mb-3 uppercase tracking-wider">{item.qty}</h4>
                            <ul className="space-y-2">
                              {item.items.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex gap-2 items-start text-xs text-gray-600">
                                  <Check className="w-3.5 h-3.5 text-[#0B6B3A] mt-0.5 shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Addons */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <PlusCircle className="w-5 h-5 text-[#0B6B3A]" />
                        Add-Ons & Extras
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <div className="flex justify-between items-start mb-1.5">
                            <h4 className="text-xs font-bold text-gray-800">Extra Influencer Add-On</h4>
                            <span className="text-xs font-black text-[#0B6B3A]">₹2,500 – ₹6,000 / infl</span>
                          </div>
                          <p className="text-[11px] text-gray-500 leading-relaxed">
                            Need more influencer faces for your reels? Add extra influencers to any package. Pricing varies based on the profile, reach, and niche audience.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <div className="flex justify-between items-start mb-1.5">
                            <h4 className="text-xs font-bold text-gray-800">Raw Footage Access</h4>
                            <span className="text-xs font-black text-[#0B6B3A]">+40% on Total Bill</span>
                          </div>
                          <p className="text-[11px] text-gray-500 leading-relaxed">
                            Want the unedited raw footage from your shoots? Purchase the complete raw files for any reel project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right block - Rules & Regulations */}
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2.5">
                        <ScaleIcon className="w-5 h-5 text-[#0B6B3A]" />
                        Rules & Regulations
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {policies.map((rule) => (
                          <div key={rule.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-3">
                            <span className="text-lg font-black text-[#0B6B3A]/20 mt-0.5 shrink-0">{rule.id}</span>
                            <div>
                              <h4 className="text-xs font-bold text-gray-900 mb-1">{rule.title}</h4>
                              <p className="text-[11px] text-gray-500 leading-relaxed">{rule.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-[#111111] p-6 rounded-2xl text-white">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B6B3A] mb-4 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#0B6B3A]" />
                        Important Notes
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[11px] text-gray-300">
                        <div className="flex gap-2 items-start py-1 border-b border-white/5">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>All prices exclude taxes (GST)</span>
                        </div>
                        <div className="flex gap-2 items-start py-1 border-b border-white/5">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>Payment terms: 50% advance, 50% on delivery</span>
                        </div>
                        <div className="flex gap-2 items-start py-1 border-b border-white/5">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>Cancellations after shoot incur full charges</span>
                        </div>
                        <div className="flex gap-2 items-start py-1 border-b border-white/5">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>Ownership transfers after full payment</span>
                        </div>
                        <div className="flex gap-2 items-start py-1 border-b border-white/5">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>Timeline: 7–10 working days per batch</span>
                        </div>
                        <div className="flex gap-2 items-start py-1 border-b border-white/5">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>Rescheduling must be done 48 hrs in advance</span>
                        </div>
                        <div className="flex gap-2 items-start py-1 border-b border-white/5">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>Location & props arranged by client</span>
                        </div>
                        <div className="flex gap-2 items-start py-1 border-[#0B6B3A]/20">
                          <span className="text-[#0B6B3A] font-bold">•</span>
                          <span>Marketing packages billed monthly in advance</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Contact Section */}
        <div className="bg-[#111111] rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to Make Your Brand Unforgettable?</h3>
            <p className="text-gray-400 text-sm max-w-xl">
              Let's discuss how Linchpin Studio can transform your brand's digital presence. Every great brand starts with a conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 shrink-0 justify-center">
            <a href="tel:+917416393958" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl transition-all text-xs font-semibold">
              <Phone className="w-4 h-4 text-[#0B6B3A]" />
              +91 7416 393 958
            </a>
            <a href="mailto:info@linchpinsoftsolution.com" className="flex items-center gap-2 bg-[#0B6B3A] hover:bg-[#08532c] px-5 py-3 rounded-xl transition-all text-xs font-semibold">
              <Mail className="w-4 h-4" />
              Get Started Today
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
