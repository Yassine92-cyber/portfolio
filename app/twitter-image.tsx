import { ogAlt, ogSize, renderOgCard } from "@/lib/og-card";

export const dynamic = "force-static";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard();
}
