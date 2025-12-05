"use client";

export default function WebGLFallback() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-calm-sky-start via-calm-sky-end to-clarity-white">
      {/* Animated gradient overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-signal-teal/10 via-transparent to-bridge-gold/10 animate-pulse" />
    </div>
  );
}

