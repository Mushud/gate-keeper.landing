"use client";

import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiCode,
  FiUser,
  FiShield,
  FiBarChart2,
  FiCreditCard,
} from "react-icons/fi";
import { Card } from "./ui/card";

const features = [
  {
    title: "Hosted Checkout",
    description:
      "Beautiful, pre-built checkout pages like Stripe. No UI development needed—just redirect and verify.",
    icon: FiShoppingCart,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Dual Integration Modes",
    description:
      "Choose between hosted checkout or direct API integration. Flexible for any use case.",
    icon: FiCode,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "KYC Phone Verification",
    description:
      "Verify phone numbers and resolve registered names instantly. 1 credit per verification for Ghana numbers.",
    icon: FiShield,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Name Resolution",
    description:
      "Automatically resolve phone numbers to names in Ghana. Perfect for KYC and user verification.",
    icon: FiUser,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "3-Strike Security",
    description:
      "Built-in brute force protection with automatic lockout after 3 failed verification attempts.",
    icon: FiShield,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Real-time Dashboard",
    description:
      "Monitor OTP delivery, success rates, and KYC analytics in a beautiful developer portal.",
    icon: FiBarChart2,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Flexible Billing",
    description:
      "Credit-based pricing with 7 tiers. Credits never expire. Volume discounts up to 26% off.",
    icon: FiCreditCard,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
            Everything you need to verify users
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Enterprise-grade OTP verification with the flexibility developers
            love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={feature.title}>
              <Card className="p-8 bg-white border-zinc-200 hover:border-blue-200 hover:shadow-lg transition-all duration-200 h-full group">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="text-xl text-blue-600" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
