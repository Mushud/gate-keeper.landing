"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiCode, FiUser, FiShield, FiBarChart2, FiCreditCard } from "react-icons/fi";
import { Card } from "./ui/card";

const features = [
  {
    title: "Hosted Checkout",
    description: "Beautiful, pre-built checkout pages like Stripe. No UI development needed—just redirect and verify.",
    icon: FiShoppingCart,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Dual Integration Modes",
    description: "Choose between hosted checkout or direct API integration. Flexible for any use case.",
    icon: FiCode,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Name Resolution",
    description: "Automatically resolve phone numbers to names in Ghana. Perfect for KYC and user verification.",
    icon: FiUser,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "3-Strike Security",
    description: "Built-in brute force protection with automatic lockout after 3 failed verification attempts.",
    icon: FiShield,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Real-time Dashboard",
    description: "Monitor OTP delivery, success rates, and usage analytics in a beautiful developer portal.",
    icon: FiBarChart2,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Flexible Billing",
    description: "Credit-based pricing with 7 tiers. Credits never expire. Volume discounts up to 26% off.",
    icon: FiCreditCard,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-zinc-950 relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Powerful features built for developers who demand reliability and simplicity
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full group hover:shadow-lg hover:shadow-zinc-900/50">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-2xl text-zinc-100" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
