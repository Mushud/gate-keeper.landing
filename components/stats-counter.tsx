"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { FiMessageSquare, FiLock, FiTrendingUp } from "react-icons/fi";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
}

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 30,
    duration: duration * 1000,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [display]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StatsCounter() {
  const [stats, setStats] = useState<{
    totalOtps: number;
    totalMessages: number;
    todayOtps: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://api.gatekeeperpro.live/api/public/stats`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        if (data.success) {
          setStats(data.stats);
        }
      } catch (err) {
        console.error("Failed to fetch stats:", err);
        setError(true);
        // Set fallback values
        setStats({
          totalOtps: 50000,
          totalMessages: 150000,
          todayOtps: 1200,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // Refresh every 10 seconds
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const statItems: StatItem[] = stats
    ? [
        {
          label: "OTPs Sent",
          value: stats.totalOtps,
          icon: <FiLock className="w-6 h-6" />,
          color: "from-blue-500 to-blue-600",
        },
        {
          label: "Messages Delivered",
          value: stats.totalMessages,
          icon: <FiMessageSquare className="w-6 h-6" />,
          color: "from-green-500 to-green-600",
        },
        {
          label: "Today's OTPs",
          value: stats.todayOtps,
          icon: <FiTrendingUp className="w-6 h-6" />,
          color: "from-purple-500 to-purple-600",
        },
      ]
    : [];

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 animate-pulse flex flex-col items-center"
              >
                <div className="h-12 w-12 bg-gray-200 rounded-xl mb-3"></div>
                <div className="h-10 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-gray-500">
            Real-time platform statistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4 text-white`}
              >
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tabular-nums">
                <AnimatedCounter value={stat.value} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {!error && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-xs text-gray-400 mt-8"
          >
            Live stats • Updated every 10 seconds
          </motion.p>
        )}
      </div>
    </section>
  );
}
