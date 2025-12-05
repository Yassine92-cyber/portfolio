"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { trackLinkClick } from "@/components/Analytics";
import Image from "next/image";

interface BlogPost {
  title: string;
  url: string;
  thumbnail?: string; // Optional thumbnail image path
  date?: string; // Optional date (e.g., "OCT, 2025")
  excerpt?: string; // Optional excerpt/description
}

const linkedInPosts: BlogPost[] = [
  {
    title: "Is it possible to learn Finnish fluently in less than a year?",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7363829978519547905/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7363829978519547905%29",
    thumbnail: "/blog-thumbnails/finnish-learning.jpg",
  },
  {
    title: "What does it really take to build a unicorn?",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7381726751145521152/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7381726751145521152%29",
    thumbnail: "/blog-thumbnails/build-unicorn.jpg",
  },
  {
    title: "From no job, no money, no network to building opportunities one step at a time.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7384516520510406656/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7384516520510406656%29",
    thumbnail: "/blog-thumbnails/building-opportunities.jpg",
  },
  {
    title: "LinkedIn is my favorite professional platform, but it's not perfect.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7373649192499630080/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7373649192499630080%29",
    thumbnail: "/blog-thumbnails/linkedin-platform.jpg",
  },
  {
    title: "From Marie Curie Postdoc Fellow to Night-Shift Worker: My Real Finnish Integration Story",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7391769210210729984/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7391769210210729984%29",
    thumbnail: "/blog-thumbnails/finnish-integration.jpg",
  },
  {
    title: "Are you an international professional in Finland looking to connect with like-minded communities?",
    url: "https://lnkd.in/dhV4uEzj",
    thumbnail: "/blog-thumbnails/communities-finland.jpg",
  },
  {
    title: "Looking for volunteering opportunities in Finland to boost your skills and network?",
    url: "https://lnkd.in/dsx76gEQ",
    thumbnail: "/blog-thumbnails/volunteering-finland.jpg",
  },
  {
    title: "Are you looking to advance your career in Finland? Don't miss these top recruitment events designed for international talent!",
    url: "https://lnkd.in/dD_p6hT",
    thumbnail: "/blog-thumbnails/recruitment-events.jpg",
  },
  {
    title: "Looking to advance your career or give back by mentoring others? Check out these top mentoring programs in Finland!",
    url: "https://lnkd.in/dj4rUwpY",
    thumbnail: "/blog-thumbnails/mentoring-programs.jpg",
  },
  {
    title: "Essential Tools, Resources, and Academies for Researchers",
    url: "https://lnkd.in/ds2x6yqE",
    thumbnail: "/blog-thumbnails/researcher-tools.jpg",
  },
  {
    title: "Aspiring entrepreneur or startup founder in Finland? Explore these active pre-incubator, incubator, and accelerator programs to take your idea to the next level!",
    url: "https://lnkd.in/dTSCnKvQ",
    thumbnail: "/blog-thumbnails/startup-programs.jpg",
  },
  {
    title: "Proud to share my LinkedIn Social Selling Index (SSI) score!",
    url: "https://lnkd.in/d_Qq54T3",
    thumbnail: "/blog-thumbnails/linkedin-ssi.jpg",
  },
  {
    title: "Spotlight on Hive Helsinki in its fifth anniversary",
    url: "https://lnkd.in/duR_W-Kn",
    thumbnail: "/blog-thumbnails/hive-helsinki.jpg",
  },
  {
    title: "Unforgettable Opportunity: Meeting the Co-Author of \"Suomen Mestari 1\"",
    url: "https://lnkd.in/dP_X3tXM",
    thumbnail: "/blog-thumbnails/suomen-mestari.jpg",
  },
  {
    title: "Discover Top Job Portals and Websites to Kickstart Your Career in Finland",
    url: "https://lnkd.in/dE74Q2Rc",
    thumbnail: "/blog-thumbnails/job-portals.jpg",
  },
  {
    title: "Unlocking the Hidden Job Market in Finland for All Professionals",
    url: "https://lnkd.in/de7C9fzm",
    thumbnail: "/blog-thumbnails/hidden-job-market.jpg",
  },
];

export default function BlogPage() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <div className="relative w-full bg-clarity-white dark:bg-gray-900 min-h-screen">
          {/* Subtle dot pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, #1A324A 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }} 
            />
          </div>
          <section className="relative py-24 px-6 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-bridge-blue dark:text-gray-100 mb-6 font-heading">
                  Thoughts & Resources
                </h1>
                <p className="text-xl text-kind-gray dark:text-gray-300 max-w-2xl mx-auto font-body leading-relaxed">
                  Insights, resources, and reflections from my LinkedIn—helping international talents, founders, and organizations navigate complexity.
                </p>
              </motion.div>

              {/* Posts List */}
              <div className="space-y-12 mb-12">
                {linkedInPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-clarity-white rounded-2xl overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
                      {/* Image Section */}
                      <div className="relative w-full h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-calm-sky-start via-calm-sky-end to-signal-teal/20">
                        {post.thumbnail ? (
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-20 h-20 text-signal-teal/30"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        {/* Date */}
                        {post.date && (
                          <p className="text-sm text-kind-gray font-body mb-3 uppercase tracking-wide">
                            {post.date}
                          </p>
                        )}
                        
                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-bridge-blue mb-6 leading-tight font-heading">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-base text-kind-gray font-body leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        
                        {/* CTA Button */}
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-bridge-blue text-white rounded-lg font-medium hover:bg-bridge-blue/90 transition-all duration-200 shadow-md hover:shadow-lg font-heading w-fit"
                          onClick={() => trackLinkClick(`Blog: ${post.title}`, post.url)}
                        >
                          <span>Discover</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: linkedInPosts.length * 0.05 }}
                className="text-center"
              >
                <a
                  href="https://www.linkedin.com/in/dr-yassine92/recent-activity/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-signal-teal text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-signal-teal focus:ring-offset-2 focus:ring-offset-clarity-white font-heading"
                  onClick={() => trackLinkClick("Blog: View All Posts", "https://www.linkedin.com/in/dr-yassine92/recent-activity/posts/")}
                >
                  View All Posts on LinkedIn
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </section>
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}

