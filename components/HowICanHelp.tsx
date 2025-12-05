"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "1",
    title: "Peer Support & Integration Coaching",
    subtitle: "Structured emotional clarity for people navigating transitions.",
    description: "Moving to a new country. Changing careers. Facing uncertainty. These moments are heavy but they don&apos;t have to be navigated alone.",
    method: "I use certified peer-support methods (MIELI, ADHD-liitto, Finnish Refugee Council) to create a safe, judgment-free space for clarity, direction, and confidence.",
    includes: [
      "Emotional grounding and perspective shifts",
      "Direction-setting for newcomers and jobseekers",
      "Clarity during moments of overwhelm or burnout",
      "Tools for rebuilding identity in Finland or abroad",
      "0→1 action planning for integration and career transitions",
    ],
    idealFor: "International talents, students, jobseekers, and professionals feeling stuck, uncertain, or unseen.",
  },
  {
    number: "2",
    title: "Career Clarity Coaching & Strategic Networking (0→1 Framework)",
    subtitle: "A system for people who want direction, confidence, and momentum.",
    description: "Career clarity is not a feeling, it&apos;s a structure. I help jobseekers and professionals find their direction, articulate their story, and build networks with purpose.",
    includes: [
      "My signature 0→1 Clarity Framework",
      "Personal narrative & introduction crafting",
      "LinkedIn profile optimization",
      "Strategic networking systems",
      "Job search roadmaps (30–60–90 days)",
      "Tools to reduce cognitive overload and regain control",
    ],
    idealFor: "International talents, early-career professionals, mid-career changers, students launching their next chapter.",
  },
  {
    number: "3",
    title: "Public Speaking & Workshops",
    subtitle: "Talks and experiences that create clarity, confidence, and community.",
    description: "I design and deliver interactive talks for universities, accelerators, NGOs, and talent hubs across Finland.",
    topics: [
      "Clarity under uncertainty",
      "Building opportunity systems",
      "Storytelling for professionals and scientists",
      "Career transitions and identity",
      "Networking for newcomers",
      "The psychology of job search and resilience",
    ],
    venues: "Haaga-Helia, Familia, Think Africa, City of Espoo, Maria 01, EntryPoint, and more.",
    volunteerExperience: "I&apos;ve also volunteered and led teams at Slush, Junction, Maria01, AIESEC, and Arctic15.",
  },
  {
    number: "4",
    title: "Scientific & Technical Writing",
    subtitle: "Clarity-driven writing for research, academia, product teams, and industry.",
    description: "As a researcher with 20+ peer-reviewed publications and experience as a Review Editor, I translate complexity into clean, actionable communication.",
    includes: [
      "Scientific papers and literature reviews",
      "Technical documentation",
      "Grant applications and academic communication",
      "Research summaries for decision-makers",
      "Stakeholder-facing scientific narratives",
      "Peer review & editing",
    ],
    idealFor: "Universities, labs, research teams, startups, and organizations that need scientific clarity.",
  },
  {
    number: "5",
    title: "Content Strategy & LinkedIn Positioning",
    subtitle: "Your story becomes your signal.",
    description: "Professionals, founders, and jobseekers often struggle to express their value. I help transform stories into clear, compelling content that attracts the right people.",
    includes: [
      "Personal brand narrative design",
      "Weekly LinkedIn content strategy",
      "Viral-style hooks & frameworks",
      "Community-building through storytelling",
      "Messaging clarity for founders, researchers, and professionals",
    ],
    idealFor: "Anyone looking to strengthen their visibility, reputation, and influence.",
  },
  {
    number: "6",
    title: "Lead Generation & Sales Development (SDR/BD)",
    subtitle: "Structured opportunity creation for early-stage startups.",
    description: "Using my experience in B2B SaaS business development, including researching 250+ companies, sourcing 600+ leads, and securing 11 qualified meetings. I help startups create clarity in their commercial engines.",
    includes: [
      "ICP & persona definition",
      "Lead sourcing and qualification",
      "Market scans and competitive analysis",
      "Outreach email and call scripts",
      "CRM setup and hygiene (HubSpot)",
      "Funnel clarity & reporting for leadership",
      "Investor list creation and pipeline mapping",
    ],
    idealFor: "Founders, early-stage startups, and teams needing structured BD processes.",
  },
];

export default function HowICanHelp() {
  return (
    <section 
      id="how-i-can-help" 
      className="py-24 bg-clarity-white px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="how-i-can-help-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 
            id="how-i-can-help-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bridge-blue mb-6 leading-tight font-heading"
          >
            SERVICES: How I Help People Move From Uncertainty to Clarity
          </h1>
          <p className="text-xl text-kind-gray max-w-3xl mx-auto mb-6 font-body leading-relaxed">
            I design human-centered experiences that support international talents, founders, teams, and organizations.
          </p>
          <p className="text-lg text-bridge-blue max-w-3xl mx-auto font-body leading-relaxed">
            My work blends peer support, scientific clarity, communication, and strategic systems, always with one mission:
          </p>
          <p className="text-xl text-signal-teal font-semibold max-w-3xl mx-auto mt-4 font-heading">
            Turn noise into signal. Build momentum. Create opportunity.
          </p>
          <p className="text-lg text-kind-gray max-w-3xl mx-auto mt-8 font-body">
            Below are the six core ways I serve individuals and organizations.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-warm-blush/30 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-bridge-blue/20 hover:border-signal-teal/50 hover:shadow-lg hover:shadow-signal-teal/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl font-bold text-signal-teal font-heading">{service.number}.</span>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-bridge-blue mb-2 leading-tight font-heading">
                    {service.title}
                  </h2>
                  <p className="text-lg text-signal-teal font-medium mb-4 font-body">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-base text-kind-gray mb-6 leading-relaxed font-body">
                {service.description}
              </p>

              {service.method && (
                <p className="text-base text-bridge-blue mb-6 leading-relaxed font-body italic">
                  {service.method}
                </p>
              )}

              {service.includes && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-signal-teal uppercase tracking-wide mb-3 font-heading">
                    What this includes:
                  </h3>
                  <ul className="space-y-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-kind-gray font-body">
                        <span className="text-signal-teal mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.topics && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-signal-teal uppercase tracking-wide mb-3 font-heading">
                    Popular topics:
                  </h3>
                  <ul className="space-y-2">
                    {service.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-kind-gray font-body">
                        <span className="text-signal-teal mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.venues && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-signal-teal uppercase tracking-wide mb-2 font-heading">
                    Where I&apos;ve spoken and mentored at:
                  </h3>
                  <p className="text-kind-gray font-body">{service.venues}</p>
                </div>
              )}

              {service.volunteerExperience && (
                <div className="mb-6">
                  <p className="text-kind-gray font-body">{service.volunteerExperience}</p>
                </div>
              )}

              {service.idealFor && (
                <div>
                  <h3 className="text-sm font-semibold text-bridge-gold uppercase tracking-wide mb-2 font-heading">
                    Ideal for:
                  </h3>
                  <p className="text-kind-gray font-body">{service.idealFor}</p>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-calm-sky-start/30 via-calm-sky-end/30 to-signal-teal/20 rounded-2xl p-8 lg:p-10 border border-bridge-blue/20 mb-12"
        >
          <h2 className="text-3xl font-bold text-bridge-blue mb-6 font-heading">
            🌉 My Approach: Warm, Structured, Human
          </h2>
          <p className="text-lg text-kind-gray mb-4 leading-relaxed font-body">
            No matter which service you choose, the experience is built on:
          </p>
          <p className="text-xl text-signal-teal font-semibold mb-6 font-heading">
            Clarity. Empathy. Structure. Action. Signal.
          </p>
          <p className="text-lg text-kind-gray leading-relaxed font-body">
            I build systems that help people and teams make sense of uncertainty, communicate clearly, and move with confidence.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-bridge-blue mb-4 font-heading">
            ✉️ Ready to work together?
          </h2>
          <p className="text-lg text-kind-gray mb-8 max-w-2xl mx-auto leading-relaxed font-body">
            If you&apos;re an international talent, founder, educator, or organization building opportunities for people, I&apos;d be happy to support your journey.
          </p>
          <p className="text-2xl font-bold text-signal-teal font-heading">
            Let&apos;s build clarity, together.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-signal-teal text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 focus:ring-offset-clarity-white font-heading"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
