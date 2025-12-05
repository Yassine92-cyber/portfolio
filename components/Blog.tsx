"use client";

import { motion } from "framer-motion";
import { trackLinkClick } from "./Analytics";

interface BlogPost {
  title: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Is it possible to learn Finnish fluently in less than a year?",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7363829978519547905/",
  },
  {
    title: "What does it really take to build a unicorn?",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7381726751145521152/",
  },
  {
    title: "From no job, no money, no network to building opportunities one step at a time.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7384516520510406656/",
  },
  {
    title: "LinkedIn is my favorite professional platform, but it's not perfect.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7373649192499630080/",
  },
  {
    title: "From Marie Curie Postdoc Fellow to Night-Shift Worker: My Real Finnish Integration Story",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7391769210210729984/",
  },
  {
    title: "Are you an international professional in Finland looking to connect with like-minded communities?",
    url: "https://lnkd.in/dhV4uEzj",
  },
  {
    title: "Looking for volunteering opportunities in Finland to boost your skills and network?",
    url: "https://lnkd.in/dsx76gEQ",
  },
  {
    title: "Are you looking to advance your career in Finland? Don't miss these top recruitment events designed for international talent!",
    url: "https://lnkd.in/dD_p6h5T",
  },
  {
    title: "Looking to advance your career or give back by mentoring others? Check out these top mentoring programs in Finland!",
    url: "https://lnkd.in/dj4rUwpY",
  },
  {
    title: "Essential Tools, Resources, and Academies for Researchers",
    url: "https://lnkd.in/ds2x6yqE",
  },
  {
    title: "Aspiring entrepreneur or startup founder in Finland? Explore these active pre-incubator, incubator, and accelerator programs to take your idea to the next level!",
    url: "https://lnkd.in/dTSCnKvQ",
  },
  {
    title: "Proud to share my LinkedIn Social Selling Index (SSI) score!",
    url: "https://lnkd.in/d_Qq54T3",
  },
  {
    title: "Spotlight on Hive Helsinki in its fifth anniversary",
    url: "https://lnkd.in/duR_W-Kn",
  },
  {
    title: "Unforgettable Opportunity: Meeting the Co-Author of \"Suomen Mestari 1\"",
    url: "https://lnkd.in/dP_X3tXM",
  },
  {
    title: "Discover Top Job Portals and Websites to Kickstart Your Career in Finland",
    url: "https://lnkd.in/dE74Q2Rc",
  },
  {
    title: "Unlocking the Hidden Job Market in Finland for All Professionals",
    url: "https://lnkd.in/de7C9fzm",
  },
];

export default function Blog() {
  return (
    <section 
      id="blog" 
      className="py-24 bg-slate-900 px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            id="blog-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Thoughts & Resources
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl">
            Insights, stories, and resources I&apos;ve shared on LinkedIn about integration, career development, and building opportunities in Finland.
          </p>
        </motion.div>

        <div className="space-y-4" role="list" aria-label="Blog posts">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              role="listitem"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                onClick={() => trackLinkClick(`Blog: ${post.title}`, post.url)}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-pink-400 transition-colors duration-200">
                  <span>Read on LinkedIn</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://linkedin.com/in/yassinekaddouri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            onClick={() => trackLinkClick("View All LinkedIn Posts", "https://linkedin.com/in/yassinekaddouri")}
          >
            <span>View All Posts on LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

