
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const posts = [
  {
    id: 1,
    title: "Canada's 2026 Immigration Overhaul: Key Changes You Need to Know",
    date: "April 16, 2026",
    readTime: "3 min read",
    category: "Policy Update",
    blogUrl: "/blog/canada-2026-immigration-overhaul",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    excerpt: "Canada's immigration system is undergoing its most significant recalibration in years. With targets dropping and new rules targeting sustainability, here's what changed in 2026 — and how it affects applicants.",
    highlights: [
      "PR targets fixed: 380,000 — Economic Class rises to 64% by 2027",
      "New Express Entry draws: medical doctors, researchers, senior managers, pilots",
      "Temporary resident arrivals capped at 385,000 (2026), falling to 370,000 by 2028",
      "Asylum rules tightened under Bill C-12 (effective June 3, 2025)",
      "Super Visa eased: sponsor income from either of last 2 tax years",
      "AI document fraud detection and 14-day priority processing for doctoral applicants",
    ],
  },
  {
    id: 2,
    title: "The Provincial Nominee Program (PNP) in 2026 and Beyond",
    date: "April 14, 2026",
    readTime: "4 min read",
    category: "PNP",
    blogUrl: "/blog/pnp-2026-and-beyond",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=900&auto=format&fit=crop",
    excerpt: "PNPs have always been the 'back door' that becomes a front door when Express Entry scores spike. In 2026 the door is wider — but also smarter — than ever. A concise briefing on what's changed and how to adjust your strategy.",
    highlights: [
      "Total PNP admissions climb to 120,000 (32% of all economic PR spots) by 2028",
      "Category-based Express Entry draws now mirror provincial PNP streams",
      "All provinces (except Quebec) accept e-signatures and e-payments",
      "Good-faith stay clauses introduced in MB, NB, PE — 12 months before moving",
      "+600 CRS points for Enhanced PNP nominations still intact",
      "AI-driven fraud screening: provinces share job-offer data with IRCC",
    ],
  },
  {
    id: 3,
    title: "Canada’s New TR-to-PR Direction",
    date: "April 20, 2026",
    readTime: "40 min read",
    category: "Immigration News",
    blogUrl: "/blog/canada-new-tr-to-pr-direction",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    excerpt: "For many temporary residents in Canada, the biggest question right now is simple: is a new TR-to-PR pathway finally coming back?",
    highlights: [],
  },
  {
    id: 4,
    title: "Recent changes to Canada’s Rural Community Immigration Pilot (RCIP)",
    date: "March 22, 2026",
    readTime: "8 min read",
    category: "IRCC Updates",
    blogUrl: "/blog/recent-changes-canada-rcip",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    excerpt: "The RCIP sits in a very specific policy space: it is designed to move skilled workers into smaller communities that have persistent vacancies",
    highlights: [],
  },
  {
    id: 5,
    title: "Express Entry Draws: CRS Trends and Analysis",
    date: "January 30, 2026",
    readTime: "5 min read",
    category: "Express Entry",
    blogUrl: "/blog/canada-2026-immigration-overhaul",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    excerpt: "CRS score cutoffs have varied significantly across different draw types. We analyse trends from the last 12 months and what they mean for applicants from UAE with scores between 420 and 520.",
    highlights: [],
  },
  {
    id: 6,
    title: "How to Improve Your CRS Score: 7 Proven Strategies",
    date: "January 15, 2026",
    readTime: "9 min read",
    category: "CRS Score",
    blogUrl: "/blog/canada-2026-immigration-overhaul",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    excerpt: "If your current CRS score isn't competitive enough for an ITA, there are concrete steps you can take. These strategies have helped clients increase their CRS by 30–80 points within 12 months.",
    highlights: [],
  },
];

export default function Blog() {
  return (
    <div>
 <SEO title="Blog & Immigration News | Rexgate Immigration" description="Stay updated with the latest Canada immigration news, Express Entry draws, and IRCC policy changes." />
      {/* ─── HERO ─── */}
      <section className="bg-[#fff] py-14 border-b-4 border-[#EF3340]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-4 border-l-2 border-[#d81418] pl-3">
              Immigration Insights
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-[34px] md:text-[44px] font-bold text-[#000] mb-4 leading-snug">
              Latest Updates &amp; Analysis
            </motion.h1>
            <motion.div variants={fadeUp} className="space-y-1.5 border-l-2 border-white/20 pl-4">
              <p className="text-sm text-[#585858] font-sans">IRCC policy updates, Express Entry draw analysis, and strategic guidance.</p>
              <p className="text-sm text-[#585858] font-sans">Updated regularly by the Rexgate advisory team.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED TWO ARTICLES ─── */}
      <section className="bg-background py-14 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-2 border-l-2 border-[#d81418] pl-3">Featured Articles</p>
            <h2 className="font-serif text-[24px] text-primary font-bold">Most Recent</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {posts.slice(0, 2).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-white border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col border-t-4 border-t-accent">
                  <div className="h-44 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-muted text-secondary text-[9px] font-bold uppercase tracking-widest px-2 py-1">{post.category}</span>
                      <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-sans">
                        <Calendar size={11} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-sans">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-[18px] font-bold text-primary mb-3 leading-snug">{post.title}</h3>
                    <p className="font-sans text-[13px] text-foreground/70 leading-relaxed mb-4">{post.excerpt}</p>

                    {post.highlights.length > 0 && (
                      <div className="bg-muted border border-border p-4 mb-4">
                        <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-accent mb-3">Key Takeaways</p>
                        <ul className="space-y-1.5">
                          {post.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-accent font-bold text-sm shrink-0 mt-[-1px]">—</span>
                              <span className="font-sans text-[12px] text-foreground/75">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-muted pt-4">
                      <Link href={post.blogUrl} className="font-sans text-[11px] font-bold text-primary hover:text-secondary uppercase tracking-wider flex items-center gap-1">
                        Read More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL OTHER POSTS ─── */}
      <section className="bg-muted py-14 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-2 border-l-2 border-[#d81418] pl-3">More Articles</p>
            <h2 className="font-serif text-[24px] text-primary font-bold">All Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {posts.slice(2).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="bg-white border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-36 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <span className="inline-block bg-muted text-secondary text-[9px] font-bold uppercase tracking-widest px-2 py-1 mb-3 w-fit">{post.category}</span>
                    <h3 className="font-serif text-[15px] font-bold text-primary mb-2 leading-snug flex-grow">{post.title}</h3>
                    <p className="font-sans text-[12px] text-foreground/65 mb-3 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="border-t border-muted pt-3 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-sans">
                        <Calendar size={10} /> {post.date}
                      </span>
                      <Link href={post.blogUrl} className="font-sans text-[11px] font-bold text-primary hover:text-secondary flex items-center gap-1 cursor-pointer uppercase tracking-wider">
                        Read <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative bg-[#0B0A0A] py-14">
         <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(159,0,0,0.6) 0%, rgba(0,0,0,1) 100%)'
        }}
      ></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-3 border-l-2 border-[#d81418] pl-3">Questions?</p>
              <h2 className="font-serif text-[26px] md:text-[32px] font-bold text-white leading-snug">
                Have Questions About 2026 Changes?
              </h2>
              <div className="mt-3 space-y-1.5">
                <p className="text-sm text-white/65 font-sans">Drop us a message and book a consultation.</p>
                <p className="text-sm text-white/65 font-sans">We'll map out your strategy based on the latest IRCC updates.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="bg-[#EF3340] text-accent-foreground font-semibold px-7 py-3 text-sm text-center hover:bg-[#d81418]/90 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer"
                className="border border-white/30 text-white font-medium px-7 py-3 text-sm text-center hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


























// import { SEO } from "@/components/SEO";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// export default function Blog() {
//   const posts = [
//     {
//       title: "Canada's 2026 Immigration Overhaul: Key Changes You Need to Know",
//       excerpt: "Canada's immigration system is undergoing its most significant recalibration in years. With targets dropping and new rules targeting sustainability, here's what changed in 2026.",
//       date: "16th April, 2026",
//       category: "IRCC Updates",
//       read: "3 minutes",
//       href: "/blog/canada-2026-immigration-overhaul"
//     },
//     {
//       title: "The Provincial Nominee Program (PNP) in 2026 and Beyond",
//       excerpt: "Canada's Provincial Nominee Programs remain the back door that becomes a front door when Express Entry scores spike. Here's what changed and how applicants should adjust.",
//       date: "2026",
//       category: "PNP Strategy",
//       read: "4 minutes",
//       href: "/blog/pnp-2026-and-beyond"
//     }
//   ];

//   return (
//     <div>
//       <SEO title="Blog & Immigration News | Rexgate Immigration" description="Stay updated with the latest Canada immigration news, Express Entry draws, and IRCC policy changes." />
//       <div className="bg-[#0B1F3A] py-20 text-white text-center">
//         <p className="text-sm font-bold text-[#C9A14A] uppercase tracking-[0.28em]">Rexgate Blog</p>
//         <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-white">Immigration Insights</h1>
//         <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
//           Data-driven analysis, news, and strategic advice for your Canada PR journey.
//         </p>
//       </div>
//       <div className="container py-20">
//         <div className="grid md:grid-cols-2 gap-8">
//           {posts.map((post, i) => (
//             <Card key={i} className="hover:shadow-xl transition-shadow border-[#0B1F3A]/10">
//               <CardContent className="p-8">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-xs font-bold text-[#C9A14A] uppercase tracking-wider">{post.category}</span>
//                   <span className="text-xs text-gray-500">{post.date}</span>
//                 </div>
//                 <h3 className="text-2xl font-bold font-serif text-[#0B1F3A] mb-3 leading-snug">{post.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4 leading-6">{post.excerpt}</p>
//                 <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Estimated read: {post.read}</p>
//                 <Link href={post.href} className="text-[#1E3A8A] font-semibold text-sm hover:underline" data-testid={`link-blog-post-${i}`}>Read Article →</Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
