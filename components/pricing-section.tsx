"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const pricingTiers = [
  {
    name: "Starter",
    credits: 6200,
    price: 150,
    pricePerCredit: "0.02419",
    duration: "1 month",
    popular: false,
    features: [
      "6,200 SMS & Email OTPs",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Basic",
    credits: 8030,
    price: 200,
    pricePerCredit: "0.02491",
    duration: "1 month",
    popular: false,
    features: [
      "8,030 SMS & Email OTPs",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    credits: 13240,
    price: 300,
    pricePerCredit: "0.02266",
    duration: "3 months",
    popular: true,
    features: [
      "13,240 SMS & Email OTPs",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Advanced Analytics",
      "Priority Support",
      "Custom Sender ID",
    ],
  },
  {
    name: "Pro",
    credits: 22900,
    price: 500,
    pricePerCredit: "0.02183",
    duration: "3 months",
    popular: false,
    features: [
      "22,900 SMS & Email OTPs",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Advanced Analytics",
      "Priority Support",
      "Custom Sender ID",
      "API Rate Limit Increase",
    ],
  },
  {
    name: "Business",
    credits: 53200,
    price: 1000,
    pricePerCredit: "0.01880",
    duration: "3 months",
    popular: false,
    features: [
      "53,200 SMS & Email OTPs",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Enterprise Analytics",
      "24/7 Support",
      "Custom Sender ID",
      "API Rate Limit Increase",
      "Custom Integrations",
    ],
  },
  {
    name: "Premium",
    credits: 112000,
    price: 2000,
    pricePerCredit: "0.01786",
    duration: "3 months",
    popular: false,
    features: [
      "112,000 SMS & Email OTPs",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Enterprise Analytics",
      "24/7 Support",
      "Custom Sender ID",
      "API Rate Limit Increase",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
  },
  {
    name: "Enterprise",
    credits: 170000,
    price: 3000,
    pricePerCredit: "0.01765",
    duration: "6 months",
    popular: false,
    features: [
      "170,000 SMS & Email OTPs",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Enterprise Analytics",
      "24/7 Support",
      "Custom Sender ID",
      "Unlimited API Rate",
      "Custom Integrations",
      "Dedicated Account Manager",
      "SLA Guarantee",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-zinc-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Free credits banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Badge className="px-6 py-3 text-base bg-blue-600 text-white border-0">
            🎁 100 Free Credits on Signup — No Credit Card Required
          </Badge>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Credits never expire.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={index >= 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card
                className={`p-8 h-full flex flex-col relative ${
                  tier.popular
                    ? "bg-blue-900/30 border-blue-500 shadow-lg shadow-blue-500/20"
                    : "bg-zinc-800 border-zinc-700"
                } hover:border-zinc-600 transition-all duration-300`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white border-0">
                    Most Popular
                  </Badge>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-100 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-zinc-100">GHS {tier.price}</span>
                    </div>
                    <div className="text-sm text-zinc-400 mt-1">{tier.credits.toLocaleString()} credits</div>
                    <div className="text-xs text-zinc-500">GHS {tier.pricePerCredit}/credit · {tier.duration}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-zinc-300">
                        <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-zinc-700 hover:bg-zinc-600 text-zinc-100"
                  }`}
                  onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/billing'}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-400">
            Need custom solutions or higher volumes?{" "}
            <a href="mailto:support@gatekeeperpro.cc" className="text-blue-500 hover:text-blue-400 underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
