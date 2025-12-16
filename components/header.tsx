"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="GateKeeperPro" 
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-lg text-zinc-900 group-hover:text-blue-600 transition-colors">
              GateKeeperPro
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
            >
              Pricing
            </a>
            <a 
              href="https://developer.gatekeeperpro.cc/developer" 
              className="text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
            >
              API Docs
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-zinc-700 hover:text-zinc-900"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/login'}
            >
              Login
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/register'}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HugeiconsIcon 
              icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon} 
              size={24} 
              strokeWidth={1.5} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-200 py-4"
          >
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-zinc-600 hover:text-zinc-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-zinc-600 hover:text-zinc-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="https://developer.gatekeeperpro.cc/developer" 
                className="text-zinc-600 hover:text-zinc-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                API Docs
              </a>
              <a 
                href="https://developer.gatekeeperpro.cc/billing" 
                className="text-zinc-600 hover:text-zinc-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Billing
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-zinc-200">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-zinc-700 hover:text-zinc-900"
                  onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/login'}
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/register'}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
