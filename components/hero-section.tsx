"use client";

import { FiShield, FiCheck, FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-white border-b border-zinc-200">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
            <FiShield className="text-sm" />
            <span>Trusted by developers in Ghana</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-zinc-900 tracking-tight">
            Enterprise OTP Verification
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
            Secure, scalable OTP verification and KYC phone verification with hosted checkout pages and REST API.
            Integrate in minutes, trusted by businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold rounded-lg shadow-sm"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/register'}
            >
              Start Free Trial
              <FiArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 px-8 py-4 text-base font-semibold rounded-lg"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/developer'}
            >
              View Documentation
            </Button>
          </div>

          {/* Key features */}
          <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 mb-16">
            <div className="flex items-center gap-2">
              <FiCheck className="text-green-600" />
              <span>100 free credits</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="text-green-600" />
              <span>KYC verification</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="text-green-600" />
              <span>5-minute setup</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-3xl pt-8 border-t border-zinc-200">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">99.9%</div>
              <div className="text-sm text-zinc-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">&lt;2s</div>
              <div className="text-sm text-zinc-600">Avg Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">24/7</div>
              <div className="text-sm text-zinc-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
