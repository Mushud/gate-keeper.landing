"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkSquareIcon,
  ArrowRight02Icon,
  Shield02Icon,
  LockIcon,
  MailLock02Icon,
  SecurityCheckIcon,
  SmartPhone01Icon,
  Key01Icon,
  FingerPrintIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

const floatingIcons = [
  { icon: Shield02Icon, color: "bg-blue-500" },
  { icon: LockIcon, color: "bg-purple-500" },
  { icon: MailLock02Icon, color: "bg-green-500" },
  { icon: SecurityCheckIcon, color: "bg-orange-500" },
  { icon: SmartPhone01Icon, color: "bg-indigo-500" },
  { icon: Key01Icon, color: "bg-pink-500" },
  { icon: FingerPrintIcon, color: "bg-teal-500" },
  { icon: Shield02Icon, color: "bg-blue-400" },
];

interface IconState {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
}

function FloatingIcon({
  icon: Icon,
  color,
  containerRef,
  id,
  allIcons,
  updateIcon,
}: any) {
  const iconRef = useRef<HTMLDivElement>(null);
  const x = useSpring(allIcons[id].position.x, { stiffness: 50, damping: 20 });
  const y = useSpring(allIcons[id].position.y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    x.set(allIcons[id].position.x);
    y.set(allIcons[id].position.y);
  }, [allIcons[id].position.x, allIcons[id].position.y, x, y, id, allIcons]);

  return (
    <motion.div
      ref={iconRef}
      className={`absolute ${color} rounded-2xl p-4 shadow-lg pointer-events-none hidden lg:block`}
      style={{
        left: `${allIcons[id].position.x}%`,
        top: `${allIcons[id].position.y}%`,
        x: "-50%",
        y: "-50%",
        opacity: 0.2,
      }}
    >
      <HugeiconsIcon
        icon={Icon}
        size={32}
        strokeWidth={2}
        className="text-white"
      />
    </motion.div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [icons, setIcons] = useState<IconState[]>(() =>
    floatingIcons.map(() => ({
      position: {
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 10,
      },
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      },
    }))
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const animate = () => {
      setIcons((prevIcons) => {
        const newIcons = prevIcons.map((iconState, i) => {
          let newX = iconState.position.x + iconState.velocity.x;
          let newY = iconState.position.y + iconState.velocity.y;
          let newVelX = iconState.velocity.x;
          let newVelY = iconState.velocity.y;

          // Icon-to-icon collision detection
          for (let j = 0; j < prevIcons.length; j++) {
            if (i === j) continue;

            const other = prevIcons[j];
            const dx2 = newX - other.position.x;
            const dy2 = newY - other.position.y;
            const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            const minDist = 8; // Collision threshold

            if (dist < minDist && dist > 0) {
              // Calculate collision response
              const nx = dx2 / dist;
              const ny = dy2 / dist;

              // Relative velocity
              const dvx = newVelX - other.velocity.x;
              const dvy = newVelY - other.velocity.y;
              const dvn = dvx * nx + dvy * ny;

              // Only resolve if moving towards each other
              if (dvn < 0) {
                // Apply impulse
                const impulse = dvn * 0.8;
                newVelX -= impulse * nx;
                newVelY -= impulse * ny;

                // Separate icons
                const overlap = minDist - dist;
                newX += nx * overlap * 0.5;
                newY += ny * overlap * 0.5;
              }
            }
          }

          // Boundary collision with bounce
          if (newX <= 2 || newX >= 96) {
            newVelX = -newVelX * 0.8;
            newX = newX <= 2 ? 2 : 96;
          }
          if (newY <= 2 || newY >= 94) {
            newVelY = -newVelY * 0.8;
            newY = newY <= 2 ? 2 : 94;
          }

          // Damping
          newVelX *= 0.995;
          newVelY *= 0.995;

          // Maintain minimum speed
          const speed = Math.sqrt(newVelX * newVelX + newVelY * newVelY);
          if (speed < 0.2) {
            const angle = Math.random() * Math.PI * 2;
            newVelX = Math.cos(angle) * 0.3;
            newVelY = Math.sin(angle) * 0.3;
          }

          return {
            position: { x: newX, y: newY },
            velocity: { x: newVelX, y: newVelY },
          };
        });

        return newIcons;
      });
    };

    const interval = setInterval(animate, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white border-b border-zinc-200 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <FloatingIcon
          key={index}
          id={index}
          icon={item.icon}
          color={item.color}
          containerRef={sectionRef}
          allIcons={icons}
        />
      ))}

      <div className="relative container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 text-sm font-medium mb-6">
            <HugeiconsIcon icon={Shield02Icon} size={16} strokeWidth={1.5} />
            <span>Trusted by developers in Ghana</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-zinc-900 tracking-tight">
            Enterprise OTP Verification
            <br />
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
            Secure OTP verification, SMS & Email campaigns, KYC phone verification, and team management—all with
            hosted checkout pages and REST API. Integrate in minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-black hover:bg-zinc-800 text-white px-8 py-4 text-base font-semibold rounded-lg shadow-sm"
              onClick={() =>
                (window.location.href =
                  "https://developer.gatekeeperpro.cc/register")
              }
            >
              Start Free Trial
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={18}
                strokeWidth={1.5}
                className="ml-2"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 px-8 py-4 text-base font-semibold rounded-lg"
              onClick={() =>
                (window.location.href =
                  "https://developer.gatekeeperpro.cc/developer")
              }
            >
              View Documentation
            </Button>
          </div>

          {/* Key features */}
          <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-600 mb-16">
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={CheckmarkSquareIcon}
                size={20}
                strokeWidth={1.5}
                className="text-green-600"
              />
              <span>100 free credits</span>
            </div>
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={CheckmarkSquareIcon}
                size={20}
                strokeWidth={1.5}
                className="text-green-600"
              />
              <span>SMS & Email OTP</span>
            </div>
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={CheckmarkSquareIcon}
                size={20}
                strokeWidth={1.5}
                className="text-green-600"
              />
              <span>Bulk SMS campaigns</span>
            </div>
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={CheckmarkSquareIcon}
                size={20}
                strokeWidth={1.5}
                className="text-green-600"
              />
              <span>KYC verification</span>
            </div>
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={CheckmarkSquareIcon}
                size={20}
                strokeWidth={1.5}
                className="text-green-600"
              />
              <span>Team management</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-3xl pt-8 border-t border-zinc-200">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
                99.9%
              </div>
              <div className="text-sm text-zinc-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
                &lt;2s
              </div>
              <div className="text-sm text-zinc-600">Avg Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
                24/7
              </div>
              <div className="text-sm text-zinc-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
