"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface MarqueeProps {
  items: { name: string; logo: string; className?: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export function InfiniteMarquee({
  items,
  direction = "left",
  speed = "normal",
  className,
}: MarqueeProps) {
  const duration = {
    fast: "20s",
    normal: "40s",
    slow: "60s",
  }[speed];

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden p-2 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-12 py-4 pr-12 min-w-full",
          "animate-scroll",
          direction === "right" && "direction-reverse"
        )}
        style={{
          animationDuration: duration,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "relative h-12 w-32 flex items-center justify-center grayscale brightness-0 invert opacity-60 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:opacity-100",
              item.className
            )}
          >
            <Image
              src={item.logo}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
