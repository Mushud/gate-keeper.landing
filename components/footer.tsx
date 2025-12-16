"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon, Github01Icon, TwitterIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200">
      {/* CTA Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              Join developers building secure authentication with GateKeeperPro.
              Start with 100 free credits.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold shadow-sm"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/register'}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="GateKeeperPro Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-bold text-lg text-zinc-900">GateKeeperPro</div>
                <div className="text-xs text-zinc-600">OTP Verification Platform</div>
              </div>
            </div>
            <p className="text-zinc-600 text-sm max-w-md mb-4">
              Enterprise-grade OTP verification for modern applications. Trusted by businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              >
                <HugeiconsIcon icon={Github01Icon} size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              >
                <HugeiconsIcon icon={TwitterIcon} size={20} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:support@gatekeeperpro.cc"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              >
                <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-zinc-100 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://developer.gatekeeperpro.cc/developer" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#integration" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-zinc-100 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://developer.gatekeeperpro.cc/login" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="https://developer.gatekeeperpro.cc/register" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="https://developer.gatekeeperpro.cc/dashboard" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="mailto:support@gatekeeperpro.cc" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 GateKeeperPro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-zinc-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
