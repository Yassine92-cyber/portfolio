"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const loadingToast = toast.loading("Sending message...", {
            position: "top-right",
        });

        // Simulate API call - Replace with your actual form submission endpoint
        // For now, this will use mailto as fallback
        try {
            // TODO: Replace with actual form submission service (e.g., Formspree, SendGrid, etc.)
            // Example with Formspree:
            // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData),
            // });

            // For now, simulate success
            await new Promise((resolve) => setTimeout(resolve, 1500));

            toast.success("Message sent successfully! I'll get back to you soon.", {
                id: loadingToast,
                duration: 5000,
            });
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Fallback: Open email client
            const mailtoLink = `mailto:yassine.kaddouri@example.com?subject=${encodeURIComponent(
                formData.subject
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;
            // Uncomment to open email client as fallback:
            // window.location.href = mailtoLink;
        } catch (error) {
            toast.error("Failed to send message. Please try again or use the email link below.", {
                id: loadingToast,
                duration: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/80 mb-2"
                    >
                        Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.15] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all"
                        placeholder="Your name"
                        aria-label="Your name"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/80 mb-2"
                    >
                        Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.15] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all"
                        placeholder="your.email@example.com"
                        aria-label="Your email address"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white/80 mb-2"
                >
                    Subject <span className="text-rose-400">*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.15] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    aria-label="Message subject"
                >
                    <option value="" className="bg-[#030303]">
                        Select a subject
                    </option>
                    <option value="collaboration" className="bg-[#030303]">
                        Collaboration Inquiry
                    </option>
                    <option value="coaching" className="bg-[#030303]">
                        Coaching Session
                    </option>
                    <option value="speaking" className="bg-[#030303]">
                        Speaking Engagement
                    </option>
                    <option value="other" className="bg-[#030303]">
                        Other
                    </option>
                </select>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                >
                    Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.15] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project, question, or how I can help..."
                    aria-label="Your message"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium hover:from-indigo-600 hover:to-rose-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030303]"
                aria-label="Submit contact form"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        Sending...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Send Message
                    </span>
                )}
            </button>

            <p className="text-white/40 text-xs text-center">
                By submitting this form, you agree to be contacted. Your information will be kept confidential.
            </p>
        </motion.form>
    );
}

