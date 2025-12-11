"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "Marina Repina",
        role: "Business Advisor",
        company: "Espoo Career Club",
        short: "Yassine's guidance—especially on market insights—was key to our project's success. I truly appreciated his supportive leadership style, navigating us in the right direction while empowering us to make decisions.",
        content: "Yassine was our business advisor during a prototyping project at Espoo Career Club. His guidance - especially on launching a customer survey and insights from the market - was key to our project's success. I truly appreciated Yassine's supportive and soft leadership style. He navigated our team in the right direction while giving us the space to make final decisions ourselves. On top of that, Yassine is a very positive, friendly, and approachable person. I would highly recommend Yassine as a mentor or advisor for any innovation or business development project in deep tech, edtech or SaaS startups.",
        initials: "MR",
        image: "/images/testimonials/Marina.jpg",
    },
    {
        name: "Petra Paavola",
        role: "Business IT Student",
        company: "",
        short: "Yassine is an invaluable asset to any team, consistently demonstrating a strong work ethic and a passion for excellence. His positive attitude creates a harmonious environment, making him not just a colleague but a friend.",
        content: "Yassine is such a sweet soul! He's truly a pleasure to work with and his outstanding performance doesn't go unnoticed. He's an invaluable asset to any team, consistently demonstrating a strong work ethic and a passion for excellence. Yassine's positive attitude and collaborative spirit create a harmonious work environment, making him not just a colleague but also a friend. His dedication to continuous improvement and willingness to take on challenges make him a standout professional.",
        initials: "PP",
        image: "/images/testimonials/Petra.jpg",
    },
    {
        name: "Marii Juht",
        role: "Founder",
        company: "Intero Integration",
        short: "Yassine excels in leadership and productivity with great attention to detail. His flexible, human-centric approach makes him an asset to any team—an independent thinker who is also an excellent team player.",
        content: "Yassine has a great ability to create connections and to truly connect with people. He excels in leadership, productivity, and has a great attention to detail. His flexible and human-centric approach makes him an asset to any team. He is an independent thinker with the ability to make decisions, while also being an excellent team player. Yassine is always willing to lend a helping hand. It has been a pleasure working with him!",
        initials: "MJ",
        image: "/images/testimonials/Marii.jpg",
    },
    {
        name: "Svenja Fassbender",
        role: "Event Manager",
        company: "Slush 2023",
        short: "As Sustainability Group Lead, Yassine’s ability to inspire his team toward a shared goal was commendable. He created an inclusive environment where every member felt valued, contributing significantly to our success.",
        content: "I had the pleasure to work with Yassine at Slush 2023. In his role as Sustainability Group Lead, Yassine's ability to inspire and motivate his group members towards a shared goal was truly commendable. He managed to create a positive and inclusive environment, fostering collaboration and ensuring that each group member felt valued and engaged. Yassine demonstrated a high level of motivation and commitment that inspired those around him. His enthusiasm and genuine belief in the importance of sustainability were contagious, contributing significantly to our team's success. I am confident that Yassine would be a great asset to any team or organisation seeking a dedicated, motivated, and compassionate leader. Thank you for your outstanding performance, Yassine. I look forward to working with you in future projects.",
        initials: "SF",
        image: "/images/testimonials/Svenja.jpg",
    },
    {
        name: "Shayaan Ahmed",
        role: "Maintenance Planning",
        company: "Geberit",
        short: "A diligent individual who thrives in a team. As a co-group lead during Junction and Slush 2023, his collaboration skills shone bright. An excellent addition to any team!",
        content: "A hardworking and diligent individual who thrives when working in a team. Yassine was a co-group lead during the Junction 2023 and Slush 2023 events and his team-working and collaboration skills definitely shone bright throughout. He is an excellent addition to any team out there!",
        initials: "SA",
        image: "/images/testimonials/Shayaan.jpg",
    },
    {
        name: "Regina Ainla",
        role: "Cultivator of human talent",
        company: "#WorkInFinland & #TalentBoost",
        short: "I’ve met Yassine in various tech and DEI events. With a warm smile and a passion for development, he will enrich any team he works in.",
        content: "I've had the pleasure to get acquainted with Yassine in various ICT, tech and DEI related networking events. With a warm smile and a passion for development and growth, Yassine will enrich the team he works in.",
        initials: "RA",
        image: "/images/testimonials/Regina.jpg",
    },
    {
        name: "Tamila Gvozdeva",
        role: "",
        company: "",
        short: "I worked with Yassine as a group leader at Slush. His leadership skills and organizational abilities were instrumental in our successful collaboration.",
        content: "I had the pleasure of working with Yassine as a group leader at Slush, one of the world's leading startup conferences ✨ Yassine's leadership skills, organizational abilities were instrumental in our successful collaboration🙌🏻",
        initials: "TG",
        image: "/images/testimonials/Tamila.jpg",
    },
    {
        name: "Netsanet Legesse",
        role: "Materials Engineer",
        company: "Specialized in Natural Fiber Composites",
        short: "I wholeheartedly endorse Yassine for his exceptional teamwork and supportive nature. His commitment and leadership qualities make him a valuable asset to any organization.",
        content: "I had the opportunity to volunteer alongside Yassine on the Slush sustainability team. I wholeheartedly endorse him for his exceptional teamwork. His management skills were apparent throughout our collaboration, and his supportive nature significantly contributed to our team's success. Yassine's commitment and leadership qualities make him a valuable asset to any team or organization.",
        initials: "NL",
        image: "/images/testimonials/Netsanet.jpg",
    },
    {
        name: "Sophie-Pearl White",
        role: "Senior Deputy GM",
        company: "Salesforce Training",
        short: "Yassine consistently exhibited a friendly and proactive approach. He puts himself out there for every opportunity and positively encourages everyone else to take part.",
        content: "Yassine and I worked within the sustainability team, where he consistently exhibited a friendly and proactive approach. He puts himself out there for every opportunity and actively and positively encourages everyone else to take part in everything available. He was such a valuable asset to our brilliant team!!",
        initials: "SPW",
        image: "/images/testimonials/Sophie.jpg",
    },
    {
        name: "Tai Tran",
        role: "Making next wave of founders",
        company: "@Aalto Founder School",
        short: "Yassine is proactive and quick at picking up new tasks, which significantly eased our workflow. I wholeheartedly recommend him to any company seeking a passionate teammate.",
        content: "Working with Yassine this year has been a great experience. Yassine is proactive, quick at picking up new tasks, which has significantly eased our workflow. Even though our paths didn't cross often, I wholeheartedly recommend Yassine to any company seeking a passionate and skilled teammate.",
        initials: "TT",
        image: "/images/testimonials/Tai.jpg",
    },
    {
        name: "Raimo Ainla",
        role: "Mentor",
        company: "Espoo Entrypoint",
        short: "Yassine is a talented, diligent, and curious professional. He reached all the goals we set together, showing a commendable can-do attitude. A brilliant results-oriented individual.",
        content: "I had the privilege of mentoring Yassine in the Espoo Entrypoint mentoring group. As we went through the career goals and dreams, I saw that Yassine is a very talented, diligent and curious professional, all while maintaining a humble approach. Our communication and mentor-mentee teamwork was conducted seamlessly and Yassine reached all the goals that we set together. He was not shy of learning new technologies or platforms and displayed a commendable level of commitment and can-do attitude. Any company would be lucky to benefit from his open-minded personality and practical way of working. Yassine's communication was always inclusive and empowering. He has shown that he is a brilliant results-oriented individual and an inclusive team player that gets things done.",
        initials: "RA",
        image: "/images/testimonials/Raimo.jpg",
    },
    {
        name: "Sinan Saka",
        role: "Senior Software Engineer",
        company: "Data & AI",
        short: "Yassine's leadership and attention to detail made a positive impact. He effectively tackled challenges with creative solutions and fostered a productive team environment.",
        content: "I had the pleasure of working with Yassine during the Arctic 15 startup event. Yassine's leadership skills and attention to detail made a positive impact on our team. He effectively tackled challenges and offered creative solutions. His open communication style fostered a productive team environment. I confidently endorse Yassine and hope to work together in the future again.",
        initials: "SS",
        image: "/images/testimonials/Sinan.jpg",
    },
    {
        name: "Sabine Werner",
        role: "COO",
        company: "Bridging international innovation to Germany",
        short: "Yassine is very solution-oriented, looks outside the box, and is always ready to help. Any employer who gets Yassine will have a very loyal and dedicated employee.",
        content: "I worked with Yassine at the Arctic15 as a volunteer. Yassine is a very helpful and social person. He always gives a helping hand, is very solution orientated, looks outside the box and a very mindful person. Every employer who gets Yassine will have a very loyal and dedicated employee.",
        initials: "SW",
        image: "/images/testimonials/Sabine.jpg",
    },
    {
        name: "Hannes Täyrönen",
        role: "",
        company: "",
        short: "It was a great pleasure to work with Yassine as a volunteer and connect with someone exploring new possibilities in Finland.",
        content: "I worked with Yassine during the 2023 Arctic Startup conference and in particular in the pre-event called Arctic LP Summit. It was a great pleasure to work with him as a volunteer and connect with a person who has recently come to Finland to discover the possibilities.",
        initials: "HT",
        image: "/images/testimonials/Hannes.jpg",
    },
    {
        name: "Nihal Koymatli",
        role: "Event Manager",
        company: "Arctic15",
        short: "Yassine was a fantastic volunteer with contagious enthusiasm! He went above and beyond, was reliable, and directly impacted the success of the event.",
        content: "Yassine was a fantastic volunteer with contagious enthusiasm! He did not only volunteer, but went above and beyond and took part in extra shifts, like helping at the Arctic15 LP Summit. He was easy to communicate with and reliable, and directly impacted the success of the event. I'm looking forward to working with him again in the future!",
        initials: "NK",
        image: "/images/testimonials/Nihal.jpg",
    },
    {
        name: "Elina Kruus",
        role: "MA | Specialist | Personal Coach",
        company: "",
        short: "I interacted with Yassine as a coach. He is talented, active, and motivated. I warmly recommend him for new assignments.",
        content: "I have done interaction with Yassine as a coach in Arffman. He is talented and has been active and motivated. I warmly recommend him for new assignments. Elina Kruus",
        initials: "EK",
        image: "/images/testimonials/Elina.jpg",
    },
    {
        name: "Dalia Allouss",
        role: "PhD Candidate in Chemical Engineering",
        company: "",
        short: "I’ve known Dr. Yassine Kaddouri for almost 8 years. We graduated from the same university, and I’ve seen firsthand how brilliant he is in organic chemistry.",
        content: "We have known each other for almost 8 years now. Dr. Yassine Kaddouri and I graduated from the same university, and I had the pleasure of taking a few classes with him and seeing how brilliant he is in organic chemistry.",
        initials: "DA",
        image: "/images/testimonials/Dalia.jpg",
    },
    {
        name: "Lynn Salonen",
        role: "Founder",
        company: "Kasvuly Marketing",
        short: "Yassine joined our Brand Ambassador Program in 2021. He was an awesome team player—creative, diligent, and analytical in solving problems.",
        content: "Yassine joined our Brand Ambassador Program in 2021. He was an awesome team player. He was creative, diligent and analytical in solving problems.",
        initials: "LS",
        image: "/images/testimonials/Lynn.jpg",
    },
    {
        name: "Afnan Zafar",
        role: "Innovation & Sustainability Specialist",
        company: "RDI Project Manager",
        short: "Dr. Yassine is punctual, proactive, and ready to take initiative. He is willing to learn new things and not afraid of hard work—an excellent asset to any organization.",
        content: "I have communicated and worked with Dr Yassine as a coach in Arffman, Finland. In our short interactions, I found Dr Yassine to be very punctual, proactive and a person who is ready to take the initiative. He was very willing to learn new things and not afraid of working hard. I wish him the best of luck in his future jobs; he can be an excellent asset to any organisation.",
        initials: "AZ",
        image: "/images/testimonials/Afnan.jpg",
    },
    {
        name: "Janne Disko",
        role: "Event Manager",
        company: "Snappmeal",
        short: "Yassine is intelligent, ambitious, and a teammate who will try everything to reach his goals. I recommend him to any team that appreciates creativity and a 'never give up' mentality.",
        content: "I met Yassine back in 2021 when I was putting together an ambassador program for Snappmeal. During our interview I could see that Yassine is intelligent, has good communication skills and is ambitious. He will be the teammate who will make sure that he has tried everything to reach his goals. For that he will utilise his creativity and problem solving skills and make sure that all the teammates are on the same page. Although our work connection was short, then I have kept in contact with Yassine, and would recommend him to any team that appreciates a person who has creativity, not giving up mentality and ambition.",
        initials: "JD",
        image: "/images/testimonials/Janne.jpg",
    },
    {
        name: "Hind Lahrour",
        role: "Laureate",
        company: "National School of Business and Management ENCG of Oujda",
        short: "Yassine is a hard worker, great team player, and creative person. At AIESEC, he showed these skills and proved the spirit of a true leader.",
        content: "Yassine is a hardworker, great team player, and a creative person. We worked together at AIESEC where he showed these skills and proved the spirit of a true leader.",
        initials: "HL",
        image: "/images/testimonials/Hind.jpg",
    },
    {
        name: "El Houcine Rahou",
        role: "Master degree in applied chemistry",
        company: "",
        short: "Yassine is a determined and confidential person with a passion for science and arts. He has a perfect sense of responsibility and is excellent in relationships with others.",
        content: "yassin is a serious, determined and confidential person with passion to science and arts, he is a good listener and he take action in the right time, he know what he is doing, he has a perfect sense of responsibility and good in relationships with others. I recommend him for any post that he may occupied",
        initials: "EHR",
        image: "/images/testimonials/El houcine.jpg",
    },
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
    const [showFullContent, setShowFullContent] = useState(false);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-rotate effect
    useEffect(() => {
        if (isAutoPlaying && !showFullContent) {
            autoPlayRef.current = setInterval(() => {
                nextTestimonial();
            }, 8000); // 8 seconds per slide
        }

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, currentIndex, showFullContent]);

    const nextTestimonial = () => {
        setShowFullContent(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setShowFullContent(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="testimonials" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                Words from the Network
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            What colleagues, mentors, and collaborators say about working together
                        </p>
                    </motion.div>

                    {/* Main Carousel Layout */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            
                            {/* Visual Side (Left) - Animated Stack */}
                            <div className="relative w-full md:w-1/2 max-w-md aspect-square flex items-center justify-center">
                                {/* Decorative Orbits */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-dashed border-white/5 rounded-full"
                                />
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-8 border border-dashed border-white/5 rounded-full"
                                />

                                <div className="relative w-64 h-64 md:w-80 md:h-80">
                                    <AnimatePresence mode="popLayout">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                            className="relative w-full h-full z-20"
                                        >
                                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-indigo-500/20 bg-[#1a1a1a]">
                                                {currentTestimonial.image && !imageError[currentIndex] ? (
                                                    <Image
                                                        src={currentTestimonial.image}
                                                        alt={currentTestimonial.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 300px, 400px"
                                                        onError={() => {
                                                            setImageError((prev) => ({ ...prev, [currentIndex]: true }));
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-rose-500/20 text-4xl md:text-5xl font-bold text-white/40">
                                                        {currentTestimonial.initials}
                                                    </div>
                                                )}
                                                
                                                {/* Quote Icon Overlay */}
                                                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg border-2 border-[#0a0a0a]">
                                                    <Quote className="w-5 h-5 fill-current" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Ghost Card (Next) - Subtle Preview */}
                                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/5 blur-sm scale-90 -z-10 translate-x-4 translate-y-2 opacity-50" />
                                </div>
                            </div>

                            {/* Content Side (Right) - Text & Controls */}
                            <div className="w-full md:w-1/2 relative min-h-[300px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative z-10"
                                    >
                                        <div className="mb-6">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {currentTestimonial.name}
                                            </h3>
                                            <div className="flex items-center gap-3 text-white/60 text-sm md:text-base">
                                                <span className="font-medium text-indigo-300">
                                                    {currentTestimonial.role}
                                                </span>
                                                {currentTestimonial.company && (
                                                    <>
                                                        <span className="w-1 h-1 rounded-full bg-white/30" />
                                                        <span>{currentTestimonial.company}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <blockquote className="text-lg md:text-xl leading-relaxed text-white/90 font-light mb-8 relative">
                                            <span className="absolute -left-4 -top-2 text-4xl text-indigo-500/20 font-serif select-none">"</span>
                                            {showFullContent ? currentTestimonial.content : currentTestimonial.short}
                                            {!showFullContent && (
                                                <button 
                                                    onClick={() => {
                                                        setShowFullContent(true);
                                                        setIsAutoPlaying(false);
                                                    }}
                                                    className="inline-block ml-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer transition-colors"
                                                >
                                                    Read full
                                                </button>
                                            )}
                                            <span className="absolute -bottom-4 text-4xl text-indigo-500/20 font-serif select-none leading-none ml-2">"</span>
                                        </blockquote>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Controls */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                prevTestimonial();
                                                setIsAutoPlaying(false);
                                            }}
                                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-white group"
                                            aria-label="Previous testimonial"
                                        >
                                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                nextTestimonial();
                                                setIsAutoPlaying(false);
                                            }}
                                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-white group"
                                            aria-label="Next testimonial"
                                        >
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    </div>

                                    <div className="h-8 w-px bg-white/10 mx-2" />

                                    <button
                                        onClick={toggleAutoPlay}
                                        className="p-2 rounded-full text-white/40 hover:text-white transition-colors"
                                        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                                    >
                                        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </button>

                                    {/* Progress Bar */}
                                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden relative">
                                        <motion.div 
                                            key={currentIndex}
                                            initial={{ width: "0%" }}
                                            animate={{ width: isAutoPlaying && !showFullContent ? "100%" : "0%" }}
                                            transition={{ 
                                                duration: 8, 
                                                ease: "linear",
                                                repeat: isAutoPlaying && !showFullContent ? 0 : 0 
                                            }}
                                            className={cn(
                                                "h-full bg-indigo-500",
                                                (!isAutoPlaying || showFullContent) && "hidden"
                                            )}
                                        />
                                        {(!isAutoPlaying || showFullContent) && (
                                            <div 
                                                className="h-full bg-indigo-500" 
                                                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }} 
                                            />
                                        )}
                                    </div>
                                    
                                    <span className="text-xs text-white/40 font-mono tabular-nums">
                                        {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
