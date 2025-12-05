import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useViewportDetection(
  onEnter: () => void,
  options?: { once?: boolean; amount?: number }
) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? false,
    amount: options?.amount ?? 0.3,
  });

  useEffect(() => {
    if (isInView) {
      onEnter();
    }
  }, [isInView, onEnter]);

  return ref;
}

