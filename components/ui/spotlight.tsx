"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Spotlight = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={cn(
        "absolute inset-0 h-screen w-full overflow-hidden",
        className
      )}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-zinc-950 via-zinc-900 to-transparent opacity-60" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-zinc-950 via-zinc-900 to-transparent opacity-60" />
    </motion.div>
  );
};
