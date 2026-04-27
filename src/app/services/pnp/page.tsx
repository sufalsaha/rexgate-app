"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, FileText, AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const provinces = [
  {
    name: "Ontario",
    program: "Ontario Immigrant Nominee Program (OINP)",
    img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "British Columbia",
    program: "BC Provincial Nominee Program (BC PNP)",
    img: "https://images.unsplash.com/photo-1559521783-1d1599583485?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Alberta",
    program: "Alberta Advantage Immigration Program (AAIP)",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Saskatchewan",
    program: "Saskatchewan Immigrant Nominee Program (SINP)",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Manitoba",
    program: "Manitoba Provincial Nominee Program (MPNP)",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Nova Scotia",
    program: "Nova Scotia Nominee Program (NSNP)",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "New Brunswick",
    program: "New Brunswick Provincial Nominee Program (NBPNP)",
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Prince Edward Island",
    program: "PEI Provincial Nominee Program (PEI PNP)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Newfoundland & Labrador",
    program: "Newfoundland & Labrador PNP (NLPNP)",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Yukon",
    program: "Yukon Nominee Program (YNP)",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Northwest Territories",
    program: "Northwest Territories Nominee Program (NTNP)",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&auto=format&fit=crop",
  },
];

const docs = [
  "Completed application forms — primary applicant plus spousal/dependent declarations (signed and attested)",
  "Valid passport, identity proofs (birth certificates), and recent colour photographs",
  "Educational Credential Assessment (ECA) for all foreign qualifications",
  "Language proficiency results — IELTS General, CELPIP, PTE Core, TEF/TCF Canada — valid for two years",
  "Proof of settlement funds, medical exam results, and police clearance certificates",
  "Supporting documents for spouse/dependents — marriage certificates, work/education history, relationship proofs",
];

export default function Pnp() {
  return (
    <div>
      <SEO
        title="PNP Canada Immigration | Provincial Nominee Advisory UAE"
        description="Provincial Nominee Program guidance for UAE professionals seeking Canada PR through province-specific streams and CRS score boosts."
      />

      {/* ─── HERO ─── */}
      <section className="bg-[#fff] py-14 border-b-4 border-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-4 border-l-2 border-[#EF3340] pl-3"
            >
              Immigration Services — Provincial Pathways
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[34px] md:text-[44px] font-bold text-black mb-4 leading-snug"
            >
              Provincial Nominee Program (PNP)
            </motion.h1>
            <motion.div
              variants={fadeUp}
              className="space-y-1.5 border-l-2 border-[#585858] pl-4 mb-7"
            >
              <p className="text-sm text-[#585858] font-sans">
                PNP is booming. 2026 slots: 91,500 — 66% more than 2025.
              </p>
              <p className="text-sm text-[#585858] font-sans">
                Now claims 38% of all economic-immigration spots.
              </p>
              <p className="text-sm text-[#585858] font-sans">
                Enhanced PNPs add +600 CRS points — virtually a guaranteed ITA.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("open-popup"));
                }}
                className="bg-[#EF3340] text-accent-foreground font-semibold px-6 py-3 text-sm text-center hover:bg-[#d81418] transition-colors inline-flex items-center gap-2"
              >
                Get PNP Assessment <ArrowRight size={15} />
              </button>
              <Link
                href="/contact"
                className="border border-white/30 text-black font-medium px-6 py-3 text-sm text-center hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Speak to an Advisor
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20 text-center">
            {[
              { n: "91,500", l: "2026 PNP Slots" },
              { n: "+66%", l: "Growth from 2025" },
              { n: "38%", l: "Of Economic Immigration" },
              { n: "+600", l: "CRS Points Added" },
            ].map((s, i) => (
              <div key={i} className="px-4 py-3">
                <p className="font-serif text-xl font-bold text-white">{s.n}</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-white/75 font-medium">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UNDERSTANDING PNP ─── */}
      <section className="bg-background py-14 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-3 border-l-2 border-[#EF3340] pl-3">
                Programme Overview
              </p>
              <h2 className="font-serif text-[26px] md:text-[32px] text-primary font-bold mb-4 leading-snug">
                Understanding Canada's PNP
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                Canada's Provincial Nominee Program enables provinces and
                territories — excluding Quebec and Nunavut — to nominate
                immigrants who meet their specific economic and regional needs,
                offering one of the most accessible routes to permanent
                residence.
              </p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                Each province designs unique PNP streams tailored to local
                labour markets, such as skilled workers, international
                graduates, or business owners, with varying eligibility criteria
                and processes.
              </p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                Enhanced PNPs add 600 CRS points to your Express Entry profile —
                virtually guaranteeing an Invitation to Apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT'S NEW 2026 ─── */}
      <section className="bg-muted py-14 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-8">
            <div className="w-1.5 h-full bg-[#EF3340] shrink-0 self-stretch" />
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-2">
                Policy Update
              </p>
              <h2 className="font-serif text-[26px] md:text-[32px] text-primary font-bold leading-snug">
                What's New in 2026
              </h2>
            </div>
          </div>

          <div className="bg-white border border-border border-l-4 border-l-secondary p-6 shadow-sm max-w-3xl">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle
                size={18}
                className="text-secondary shrink-0 mt-0.5"
              />
              <p className="font-sans text-sm font-semibold text-primary">
                Effective 30 March 2026
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-border pl-4">
              <p className="font-sans text-sm text-foreground/80">
                Provinces — not IRCC — now decide if nominees genuinely plan to
                live there and can support themselves (new and pending files).
              </p>
              <p className="font-sans text-sm text-foreground/80">
                IRCC now checks admissibility and Express Entry rules only.
              </p>
              <p className="font-sans text-sm text-foreground/80">
                Result: faster, province-focused processing — though timelines
                vary by province.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOCUMENTATION ─── */}
      <section className="bg-background py-14 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-3 border-l-2 border-[#EF3340] pl-3">
                Documentation
              </p>
              <h2 className="font-serif text-[26px] md:text-[32px] text-primary font-bold mb-4 leading-snug">
                Common Documents for PNP Applications
              </h2>
              <p className="font-sans text-sm text-foreground/70 mb-4 leading-relaxed">
                Document requirements vary by province, stream, and criteria.
                Always verify against the specific programme's official website.
              </p>
              <div className="bg-muted border border-border p-4">
                <div className="flex items-start gap-2 mb-2">
                  <FileText
                    size={15}
                    className="text-[#EF3340] shrink-0 mt-0.5"
                  />
                  <p className="font-sans text-sm font-semibold text-primary">
                    Our Role
                  </p>
                </div>
                <p className="font-sans text-sm text-foreground/70">
                  You focus on gathering documents while we handle every
                  submission, deadline, and follow-up.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-2">
                {docs.map((doc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 bg-white border border-border p-4 shadow-sm"
                  >
                    <Check
                      size={14}
                      className="text-[#EF3340] shrink-0 mt-0.5"
                    />
                    <p className="font-sans text-sm text-foreground/80">
                      {doc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROVINCES ─── */}
      <section className="bg-muted py-14 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-2 border-l-2 border-[#EF3340] pl-3">
              Participating Regions
            </p>
            <h2 className="font-serif text-[26px] md:text-[32px] text-primary font-bold">
              Provinces & Territories that Run PNP
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {provinces.map((prov, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="bg-white border border-border shadow-sm overflow-hidden group hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={prov.img}
                      alt={prov.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow border-t-2 border-accent">
                    <p className="font-sans text-[13px] font-bold text-primary mb-1">
                      {prov.name}
                    </p>
                    <p className="font-sans text-[11px] text-foreground/65 leading-relaxed">
                      {prov.program}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-background py-14 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-2 border-l-2 border-[#EF3340] pl-3">
              Our Process
            </p>
            <h2 className="font-serif text-[26px] md:text-[32px] text-primary font-bold">
              How We Handle Your PNP Application
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                n: "01",
                title: "Profile Analysis",
                desc: "Full review of credentials, NOC, language scores, and provincial fit.",
              },
              {
                n: "02",
                title: "Stream Selection",
                desc: "Identify the optimal province and stream — Enhanced or Base PNP.",
              },
              {
                n: "03",
                title: "EOI & Nomination",
                desc: "Submit Expression of Interest; manage the nomination process end-to-end.",
              },
              {
                n: "04",
                title: "Federal PR Filing",
                desc: "ITA secured. Full federal PR application within 60-day window.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-white border border-border border-t-4 border-t-[#EF3340] p-5 shadow-sm h-full">
                  <p className="font-sans text-[11px] font-bold text-[#EF3340] uppercase tracking-widest mb-3">
                    Step {step.n}
                  </p>
                  <h3 className="font-sans text-[14px] font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[12px] text-foreground/65 leading-relaxed">
                    {step.desc}
                  </p>
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
        <div className=" relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#EF3340] mb-3 border-l-2 border-[#EF3340] pl-3">
                Book a Consultation
              </p>
              <h2 className="font-serif text-[26px] md:text-[32px] font-bold text-white leading-snug max-w-xl">
                Map Out Your 2026 PNP Strategy
              </h2>
              <div className="mt-3 space-y-1.5">
                <p className="text-sm text-white/65 font-sans">
                  Written assessment of your PNP eligibility — no obligation.
                </p>
                <p className="text-sm text-white/65 font-sans">
                  We identify the best province and stream for your exact
                  profile.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("open-popup"));
                }}
                className="bg-[#EF3340] text-white font-semibold px-7 py-3 text-sm text-center hover:bg-[#d81418] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                Get PNP Assessment <ArrowRight size={14} />
              </button>
              <a
                href="https://wa.me/971000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-medium px-7 py-3 text-sm text-center hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                WhatsApp Our Advisors
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import { ServiceDetailPage } from "@/components/ServiceDetailPage";

// const data = {
//   "title": "Provincial Nominee Program (PNP)",
//   "eyebrow": "Province-led Canada PR",
//   "description": "PNP advisory for candidates seeking province-specific Canada PR pathways, CRS boosts and occupation-driven opportunities across Canada.",
//   "seoTitle": "PNP Canada Immigration | Provincial Nominee Advisory UAE",
//   "seoDescription": "Provincial Nominee Program guidance for UAE professionals seeking Canada PR through province-specific streams and CRS score boosts.",
//   "who": [
//     "Express Entry candidates needing a CRS boost",
//     "Professionals with occupations targeted by Canadian provinces",
//     "Applicants open to settling in a specific province",
//     "Candidates seeking Canada PR without a job offer where eligible streams exist"
//   ],
//   "requirements": [
//     "Occupation, education and experience matching provincial criteria",
//     "Language scores meeting stream thresholds",
//     "Settlement intent for the province",
//     "Proof of funds where required",
//     "Accurate Express Entry profile for aligned streams"
//   ],
//   "process": [
//     "Assess profile against active provincial streams",
//     "Identify province-occupation fit and draw history",
//     "Prepare expression of interest or profile submission",
//     "Compile province-specific documents",
//     "Respond to nomination requests and submit PR stage",
//     "Track IRCC processing after nomination"
//   ],
//   "documents": [
//     "Passport",
//     "IELTS or language results",
//     "ECA",
//     "Employment letters",
//     "Settlement funds",
//     "Resume",
//     "Province forms",
//     "Family documents",
//     "Police clearance"
//   ],
//   "cost": [
//     "PNP costs vary by province and may include provincial application fees plus federal PR fees.",
//     "Rexgate outlines government fees, documentation costs and expected advisory scope before submission."
//   ],
//   "timeline": "PNP timelines depend on the province, stream, draw cycle and federal processing stage. Some aligned streams move faster after nomination.",
//   "mistakes": [
//     "Applying to provinces without genuine fit",
//     "Missing occupation-specific evidence",
//     "Weak settlement intent explanation",
//     "Not monitoring changing Canada immigration 2025 and 2026 criteria"
//   ],
//   "cta": "Find the right province-led Canada PR route for your profile.",
//   "highlight": "A nomination can significantly improve Express Entry prospects, but province selection must be evidence-based rather than random."
// };

// export default function Page() {
//   return <ServiceDetailPage {...data} />;
// }
