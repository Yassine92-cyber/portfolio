"use client";

import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import toast from "react-hot-toast";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const fullUrl = typeof window !== "undefined" ? window.location.href : url;

  const shareData = {
    title,
    url: fullUrl,
    text: description || title,
  };

  const handleShare = async (platform: "twitter" | "linkedin" | "facebook" | "copy") => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedText = encodeURIComponent(description || title);

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
    <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
      <span className="text-sm text-white/60 mr-2">Share:</span>
      <button
        onClick={() => handleShare("twitter")}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white/[0.03]"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">Twitter</span>
      </button>
      <button
        onClick={() => handleShare("linkedin")}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white/[0.03]"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">LinkedIn</span>
      </button>
      <button
        onClick={() => handleShare("facebook")}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white/[0.03]"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">Facebook</span>
      </button>
      <button
        onClick={() => handleShare("copy")}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white/[0.03]"
        aria-label="Copy link"
      >
        <Link2 className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm">Copy Link</span>
      </button>
    </div>
  );
}

