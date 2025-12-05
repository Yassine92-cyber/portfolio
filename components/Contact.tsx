"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { trackFormSubmission } from "@/components/Analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Option 1: Formspree (Recommended - free tier available)
      // Get your endpoint from https://formspree.io after signing up
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to your .env.local file
      // Example: NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Portfolio Contact Form Submission",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Track form submission
        trackFormSubmission("contact_form");
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      // Fallback to mailto if Formspree fails or isn't configured
      const subject = encodeURIComponent("Portfolio Contact");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:contact@yassinekaddouri.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-clarity-white px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 
            id="contact-heading"
            className="text-4xl sm:text-5xl font-bold text-bridge-blue mb-6 leading-tight font-heading"
          >
            Let&apos;s Talk
          </h2>
          <p className="text-lg text-kind-gray leading-relaxed font-body">
            If you are an international talent, a founder, or an organization working with people in transition, I would be happy to listen and see if I can help. No pressure, no pitch. Just a real conversation.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {error && (
            <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg text-sm font-body">
              {error}
            </div>
          )}

          {submitted && (
            <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg text-sm font-body">
              Thank you! Your message has been sent. I&apos;ll get back to you soon.
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-kind-gray mb-2 font-body"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-bridge-blue/30 rounded-lg focus:ring-2 focus:ring-signal-teal focus:border-signal-teal transition-colors bg-clarity-white text-bridge-blue placeholder-kind-gray font-body"
              required
              disabled={isSubmitting || submitted}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-kind-gray mb-2 font-body"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-bridge-blue/30 rounded-lg focus:ring-2 focus:ring-signal-teal focus:border-signal-teal transition-colors bg-clarity-white text-bridge-blue placeholder-kind-gray font-body"
              required
              disabled={isSubmitting || submitted}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-kind-gray mb-2 font-body"
            >
              What&apos;s on your mind?
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 border border-bridge-blue/30 rounded-lg focus:ring-2 focus:ring-signal-teal focus:border-signal-teal transition-colors bg-clarity-white text-bridge-blue placeholder-kind-gray resize-none font-body"
              required
              disabled={isSubmitting || submitted}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className="w-full px-8 py-4 bg-signal-teal text-white rounded-lg font-medium text-lg hover:bg-signal-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-signal-teal/50 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 focus:ring-offset-clarity-white disabled:opacity-50 disabled:cursor-not-allowed font-heading"
          >
            {submitted ? "Message sent! ✓" : isSubmitting ? "Sending..." : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
