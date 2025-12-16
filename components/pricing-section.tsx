"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkSquareIcon } from "@hugeicons/core-free-icons";
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
          <div className="inline-block px-4 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={index >= 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card
                className={`p-8 h-full flex flex-col relative ${
                  tier.popular
                    ? "bg-blue-50 border-2 border-blue-600 shadow-lg"
                    : "bg-white border-zinc-200"
                } hover:shadow-md transition-all duration-200`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    Popular
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">
                    {tier.name}
                  </h3>
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
                  className={`w-full ${
                    tier.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                      : "bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300"
                  }`}
                  onClick={() =>
                    (window.location.href =
                      "https://developer.gatekeeperpro.cc/billing")
                  }
                >
                  Get Started
                </Button>
              </Card>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16 pt-8 border-t border-zinc-200">
          <p className="text-zinc-600">
            Need custom solutions or higher volumes?{" "}
            <a
              href="mailto:support@gatekeeperpro.cc"
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              Contact sales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
