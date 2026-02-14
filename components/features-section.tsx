"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiCode,
  FiUser,
  FiShield,
  FiBarChart2,
  FiCreditCard,
  FiMail,
  FiMessageSquare,
  FiUsers,
  FiSmartphone,
  FiBell,
  FiLock,
} from "react-icons/fi";

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

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 to-zinc-300/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

const features = [
  {
    title: "Hosted Checkout",
    description:
      "Beautiful, pre-built checkout pages like Stripe. No UI development needed—just redirect and verify.",
    icon: FiShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Dual Integration Modes",
    description:
      "Choose between hosted checkout or direct API integration. Flexible for any use case.",
    icon: FiCode,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "SMS Campaigns",
    description:
      "Send bulk SMS campaigns to your customers. Track delivery status and engagement in real-time.",
    icon: FiMessageSquare,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    title: "Email Campaigns",
    description:
      "Send email campaigns with custom SMTP. Support for HTML templates and personalization.",
    icon: FiMail,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
  {
    title: "KYC Phone Verification",
    description:
      "Verify phone numbers and resolve registered names instantly. 1 credit per verification for Ghana numbers.",
    icon: FiShield,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    title: "Name Resolution",
    description:
      "Automatically resolve phone numbers to names in Ghana. Perfect for KYC and user verification.",
    icon: FiUser,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Team Management",
    description:
      "Invite team members with role-based access. Admin, Developer, and Viewer roles for your organization.",
    icon: FiUsers,
    color: "text-sky-600",
    bgColor: "bg-sky-100",
  },
  {
    title: "USSD OTP Retrieval",
    description:
      "Users can retrieve OTP codes via USSD (*713*882#). No internet required—works on any phone.",
    icon: FiSmartphone,
    color: "text-lime-600",
    bgColor: "bg-lime-100",
  },
  {
    title: "3-Strike Security",
    description:
      "Built-in brute force protection with automatic lockout after 3 failed verification attempts.",
    icon: FiLock,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Real-time Dashboard",
    description:
      "Monitor OTP delivery, SMS/Email campaigns, and analytics in a beautiful developer portal.",
    icon: FiBarChart2,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
  {
    title: "Low Credit Alerts",
    description:
      "Automatic SMS and email alerts when your balance runs low. Never miss a verification.",
    icon: FiBell,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    title: "Flexible Billing",
    description:
      "Credit-based pricing with 7 tiers. Credits never expire. Volume discounts up to 26% off.",
    icon: FiCreditCard,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-zinc-100 border border-zinc-300 rounded-full text-zinc-700 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
            Everything you need in one platform
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            OTP verification, SMS & Email campaigns, KYC, and team management—all in one powerful developer platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card content */}
              <div className="relative h-full bg-white rounded-2xl p-8 border border-zinc-300 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Grid Pattern */}
                <Grid size={20} />
                
                {/* Icon with white background and gray outline */}
                <div className={`relative z-20 w-12 h-12 rounded-xl bg-white border border-zinc-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`text-xl ${feature.color}`} />
                </div>

                {/* Content */}
                <div className="relative z-20">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
