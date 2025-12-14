"use client";

import { motion } from "framer-motion";
import { FiShield, FiZap, FiLock, FiGlobe } from "react-icons/fi";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Spotlight } from "./ui/spotlight";
import { SparklesCore } from "./ui/sparkles";
import { Boxes } from "./ui/background-boxes";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-zinc-950 z-0 overflow-hidden">
        <Boxes />
      </div>
      
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Spotlight />
      </div>
      
      {/* Sparkles effect */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={50}
          particleColor="#3b82f6"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 pointer-events-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <FiShield className="text-4xl text-zinc-100" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-zinc-800 text-zinc-200 border-zinc-700">
              🎉 Get 100 free credits on signup
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-zinc-100 leading-tight"
          >
            Seamless OTP Verification
            <br />
            <span className="text-blue-500">
              for Modern Apps
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl"
          >
            Secure authentication with hosted checkout pages and direct API integration.
            Built for developers, trusted by businesses.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center mb-10 text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <FiZap className="text-blue-500" />
              <span className="text-sm">Serverless</span>
            </div>
            <div className="flex items-center gap-2">
              <FiLock className="text-green-500" />
              <span className="text-sm">3-Strike Security</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGlobe className="text-purple-500" />
              <span className="text-sm">Ghana-Focused</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/register'}
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 px-8 py-6 text-lg"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/developer'}
            >
              View Documentation
            </Button>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-2xl"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-100 mb-1">10,000+</div>
              <div className="text-sm text-zinc-500">OTPs Sent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-100 mb-1">99.9%</div>
              <div className="text-sm text-zinc-500">Uptime</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-zinc-100 mb-1">&lt; 2s</div>
              <div className="text-sm text-zinc-500">Delivery Time</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
