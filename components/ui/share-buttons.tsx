"use client";

import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import toast from "react-hot-toast";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const fullUrl = typeof window !== "undefined" ? window.location.href : url;

  const handleShare = async (platform: "twitter" | "linkedin" | "facebook" | "copy") => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(fullUrl);

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(fullUrl);
          toast.success("Link copied to clipboard!", {
            duration: 2000,
            icon: "📋",
          });
        } catch (err) {
          console.error("Failed to copy:", err);
          toast.error("Failed to copy link. Please try again.", {
            duration: 3000,
          });
        }
        break;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="eyebrow mr-2 text-paper/60">Share</span>
      <button
        onClick={() => handleShare("twitter")}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper/15 px-4 py-2 text-paper/85 transition-colors hover:border-paper/40 hover:text-paper"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">Twitter</span>
      </button>
      <button
        onClick={() => handleShare("linkedin")}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper/15 px-4 py-2 text-paper/85 transition-colors hover:border-paper/40 hover:text-paper"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">LinkedIn</span>
      </button>
      <button
        onClick={() => handleShare("facebook")}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper/15 px-4 py-2 text-paper/85 transition-colors hover:border-paper/40 hover:text-paper"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">Facebook</span>
      </button>
      <button
        onClick={() => handleShare("copy")}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper/15 px-4 py-2 text-paper/85 transition-colors hover:border-paper/40 hover:text-paper"
        aria-label="Copy link"
      >
        <Link2 className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">Copy Link</span>
      </button>
    </div>
  );
}

