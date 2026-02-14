"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkSquareIcon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();
 
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export const LinePattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, #e4e4e7 1px, transparent 1px),
          linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
      }} />
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #e4e4e7 35px, #e4e4e7 37px)',
      }} />
    </div>
  );
};

const pricingTiers = [
  {
    name: "Developer",
    credits: 9000,
    price: 300,
    pricePerCredit: "0.03333",
    duration: "No Expiry",
    popular: false,
    features: [
      "9,000 SMS & Email OTPs",
      "SMS & Email Campaigns",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Startup",
    credits: 25000,
    price: 500,
    pricePerCredit: "0.02000",
    duration: "No Expiry",
    popular: true,
    features: [
      "25,000 SMS & Email OTPs",
      "SMS & Email Campaigns",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Advanced Analytics",
      "Priority Support",
      "Team Management",
      "Custom SMTP",
    ],
  },
  {
    name: "Enterprise",
    credits: 65000,
    price: 1200,
    pricePerCredit: "0.01846",
    duration: "No Expiry",
    popular: false,
    features: [
      "65,000 SMS & Email OTPs",
      "SMS & Email Campaigns",
      "Hosted Checkout Pages",
      "Direct API Access",
      "Enterprise Analytics",
      "24/7 Support",
      "Unlimited Team Members",
      "Custom Sender ID",
      "API Rate Limit Increase",
      "Dedicated Account Manager",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-zinc-200">
      <div className="container mx-auto px-4">
        {/* Free credits banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
            <span>✓</span>
            <span>100 Free Credits • No Credit Card Required</span>
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-zinc-100 border border-zinc-300 rounded-full text-zinc-700 text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Pay only for what you use. Credits never expire.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Light gradient glow on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-zinc-400 via-zinc-300 to-zinc-200 rounded-2xl opacity-0 group-hover:opacity-15 transition duration-500 blur-sm" />
              
              {/* Card content */}
              <div className={`relative p-8 h-full flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 group-hover:shadow-xl ${
                tier.popular
                  ? "bg-white border-zinc-300 border-2 shadow-lg"
                  : "bg-white border-zinc-200 group-hover:border-zinc-300"
              }`}>
                {/* Line Pattern */}
                <LinePattern />

                <div className="flex-1 relative z-20">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-zinc-900">
                      {tier.name}
                    </h3>
                    {tier.popular && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
                        <span>⭐</span>
                        <span>Most Popular</span>
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-zinc-900">
                        GHS {tier.price}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-zinc-700 mt-2">
                      {tier.credits.toLocaleString()} credits
                    </div>
                    <div className="text-xs text-zinc-500">
                      GHS {tier.pricePerCredit}/credit · {tier.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-zinc-700"
                      >
                        <HugeiconsIcon
                          icon={CheckmarkSquareIcon}
                          size={18}
                          strokeWidth={1.5}
                          className="text-green-600 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full relative z-20 font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "bg-black hover:bg-zinc-800 text-white shadow-md hover:shadow-lg"
                      : "bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 hover:border-zinc-400"
                  }`}
                  onClick={() =>
                    (window.location.href =
                      "https://developer.gatekeeperpro.cc/billing")
                  }
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16 pt-8 border-t border-zinc-200">
          <p className="text-zinc-600">
            Need custom solutions or higher volumes?{" "}
            <a
              href="mailto:jayedabraham@gmail.com"
              className="text-zinc-900 hover:text-zinc-700 font-medium underline"
            >
              Contact sales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
