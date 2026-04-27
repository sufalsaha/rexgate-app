"use client";

// import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "@/assets/294 by 110-01.jpg.jpeg";
import img2 from "@/assets/428px 494px-01.jpg.jpeg";
import img3 from "@/assets/428px  322px-01.jpg.jpeg";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Star,
  FileText,
  ChevronRight,
  ClipboardList,
  AlertTriangle,
  Newspaper,
  Award,
  Target,
  Clock,
  Briefcase,
  BadgeCheck,
  Wallet,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { SEO } from "@/components/SEO";

// export const metadata: Metadata = {
//   title: "Canada Immigration from UAE | Rexgate Advisory",
//   description:
//     "Rexgate Immigration is a premier UAE-based Canada immigration consultancy. Strategic, transparent, and structured pathways for professionals.",
// };

export default function Home() {
  const OurAdvantages = [
    {
      label: "RCIC-certified specialists ",
      icon: <BadgeCheck className="h-5 w-5 text-[#EF3340]" />,
    },
    {
      label: "Real-time application tracking",
      icon: <Clock className="h-5 w-5 text-[#EF3340]" />,
    },
    {
      label: "Flat fees, zero hidden costs",
      icon: <Wallet className="h-5 w-5 text-[#EF3340]" />,
    },
    {
      label: "98% Client Satisfaction",
      icon: <Star className="h-5 w-5 text-[#EF3340]" />,
    },
  ];

  return (
    <div>
      <SEO
        title="Canada Immigration from UAE | Rexgate Advisory"
        description="Rexgate Immigration is a premier UAE-based Canada immigration consultancy. Strategic, transparent, and structured pathways for professionals."
      />

      {/* Hero Section */}
      <section className="relative bg-[#fff] text-black pt-20 pb-24 overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517737812598-1a43d0ef2a60?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div> */}

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight text-black">
              Canada Immigration –{" "}
              <span className="text-[#EF3340]">Done Right</span>
            </h1>

            <p className="text-sm md:text-base font-bold uppercase tracking-[0.28em] text-[#EF3340]">
              A Decade of Excellence in the UAE
            </p>
            {/* #EF3340 */}
            <p className="text-lg md:text-xl text-[#585858] max-w-2xl leading-relaxed border-l-2 border-[#EF3340] pl-4">
              {/* Strategic. Transparent. Engineered for Results | Because your
              Canadian dream isn’t a gamble, it’s a calculation. We fuse
              real-time IRCC intelligence with high-velocity strategy to unlock
              your PR pathway. */}
              <strong>Strategic | Transparent | Engineered for Results </strong> <br />
              Because your Canadian dream isn’t a gamble, it’s a calculation. We
              fuse real-time IRCC intelligence with high-velocity strategy to
              unlock your PR Pathway.
            </p>

            <div className="flex flex-col items-start gap-2 pt-4">
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("open-popup"));
                }}
                className="bg-[#EF3340] hover:bg-[#d81418] text-white font-semibold text-lg px-8 py-6 h-auto w-full sm:w-auto shadow-[0_4px_14px_0_rgba(201,161,74,0.39)]"
                // asChild
              >
                Claim Your Free PR Audit
              </button>
              <p className="text-sm font-medium text-black/70">
                Takes less than 2 minutes.
              </p>
            </div>

            {/* <div className="pt-8 flex flex-wrap items-center gap-5 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#C9A14A]" />
                <span>No False Promises</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C9A14A]" />
                <span>Transparent Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C9A14A]" />
                <span>Instant Score Calculation</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#3B0809] text-white py-8 border-y border-white/10 relative z-20 -mt-10 mx-4 md:mx-auto container rounded-lg shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#EF3340] mb-1">
              10+
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#EF3340] mb-1">
              2.5k+
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium">
              Successfully Immigrated
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#EF3340] mb-1">
              3k+
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium">
              Temporary Visas
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#EF3340] mb-1">
              UAE & GCC
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium">
              Wide Expertise
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white border-b border-[#0B1F3A]/10">
        <div className="container py-6 grid gap-4 md:grid-cols-4 text-sm font-semibold text-[#0B1F3A]">
          {OurAdvantages.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 border-l-2 border-[#EF3340] bg-[#EEF2F7]/60 px-4 py-3"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="space-y-6">
            <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.24em]">
              Why Rexgate Immigration?
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#000]">
              Canadian PR success through strategy – not paperwork alone.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Rexgate Immigration is a UAE-based, RCIC-regulated firm that
              engineers Canadian PR success through strategy not paperwork
              alone.
            </p>
            <p className="leading-7 text-slate-600">
              We map your best route from Express Entry and Provincial Nominee
              Programs to study, visitor, family, and business mobility streams
              using real-time IRCC data.
            </p>
            <div className="rounded-xl border border-[#0B1F3A]/10 bg-[#EEF2F7]/70 p-6">
              <p className="font-bold text-[#0B1F3A]">What you get:</p>
              <div className="mt-4 grid gap-3 text-slate-700">
                {[
                  "Clear CRS-score planning and cost timelines",
                  "Tailored options for PR without a job offer",
                  "Document checklists built for zero rework",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#EF3340]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-lg font-semibold text-[#0B1F3A]">
              Make relocation a calculated move, not a guesswork.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 min-h-[420px]">
              <Image
                src={img1}
                alt="Toronto skyline for Canada immigration"
                className="col-span-3 row-span-5 h-full w-full rounded-2xl object-cover shadow-xl"
              />
              <Image
                src={img2}
                alt="Canadian landscape"
                className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover shadow-lg"
              />
              <Image
                src={img3}
                alt="Canadian landscape"
                className="col-span-2 row-span-2 h-full w-full rounded-2xl object-cover shadow-lg"
              />
              {/* <div className="col-span-2 row-span-2 rounded-2xl bg-[#0B1F3A] p-6 text-white shadow-lg">
                <p className="text-4xl font-bold text-[#C9A14A]">PR</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-blue-100">
                  Strategy first
                </p>
              </div> */}
            </div>
            <p className="text-center text-lg font-serif font-bold text-[#0B1F3A]">
              Your Passport to a New Beginning in Canada
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-[#EF3340] uppercase tracking-widest">
              Our Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] dark:text-white">
              Structured Pathways to Canada
            </h3>
            <p className="text-muted-foreground text-lg">
              We provide end-to-end advisory for professionals, students, and
              businesses seeking to establish their future in Canada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Express Entry"
              description="The fastest pathway for skilled professionals. We optimize your CRS score and manage your profile for maximum ITA chances."
              link="/services/express-entry"
              icon={<TrendingUp className="w-8 h-8 text-[#EF3340]" />}
            />
            <ServiceCard
              title="Provincial Nomination Program (PNP)"
              description="Alternative pathways for specific provinces. Ideal for candidates with targeted skills or those needing a CRS boost."
              link="/services/pnp"
              icon={<ShieldCheck className="w-8 h-8 text-[#EF3340]" />}
            />
            <ServiceCard
              title="Rural Community Immigration Pilot (RCIP)"
              description="A regional Canada immigration process for eligible professionals seeking alternative low CRS score pathways."
              link="/services/rcip"
              icon={<Target className="w-8 h-8 text-[#EF3340]" />}
            />
            <ServiceCard
              title="Study in Canada (Student Visa)"
              description="Secure your student visa with a strategic SOP. A proven stepping stone to Post-Graduation Work Permit and PR."
              link="/services/student-visa"
              icon={<FileText className="w-8 h-8 text-[#EF3340]" />}
            />
            <ServiceCard
              title="Tourist Visa"
              description="Visitor visa documentation strategy for UAE and GCC residents with travel purpose, ties, and finances aligned."
              link="/services/visit-visa"
              icon={<Users className="w-8 h-8 text-[#EF3340]" />}
            />
            <ServiceCard
              title="Work Permit"
              description="Work permit advisory for eligible professionals, business transfers, employer-backed pathways, and mobility streams."
              link="/services/ict-work-permit"
              icon={<Briefcase className="w-8 h-8 text-[#EF3340]" />}
            />
            <ServiceCard
              title="Super Visa"
              description="Long-stay visitor visa advisory for parents and grandparents with financial, insurance, and invitation planning."
              link="/services/super-visa"
              icon={<Award className="w-8 h-8 text-[#EF3340]" />}
            />
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#0B1F3A] text-[#0B1F3A] dark:border-white dark:text-white hover:bg-[#EF3340] hover:text-white dark:hover:bg-white dark:hover:text-[#0B1F3A]"
              asChild
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#EEF2F7]">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.24em]">
              Advisory Process
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-[#0B1F3A]">
              A structured Canada immigration process from the first assessment.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Profile Review",
              "CRS Strategy",
              "Documentation Planning",
              "Submission",
            ].map((step, index) => (
              <div
                key={step}
                className="relative bg-white p-6 shadow-md border-t-4 border-[#EF3340]"
              >
                <div className="text-5xl font-serif font-bold text-[#EF3340]/20">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#0B1F3A]">
                  Step {index + 1} – {step}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {index === 0 &&
                    "We assess eligibility, age, education, IELTS potential, work history, family status, and immigration goals."}
                  {index === 1 &&
                    "We map CRS score Canada improvement actions and identify Express Entry, PNP, RCIP, or study-backed options."}
                  {index === 2 &&
                    "We prepare a checklist for passport, IELTS, ECA, work experience, proof of funds, bank statements, SOP, PCC, and medical."}
                  {index === 3 &&
                    "We guide final review, forms, document order, statement consistency, and post-submission follow-up."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div className="rounded-xl border border-red-100 bg-red-50 p-8">
            <div className="mb-5 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-red-600" />
              <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">
                Common mistakes that weaken Canada visa and PR files
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                "Applying without CRS planning",
                "Weak documentation",
                "Ignoring Canada immigration cost",
                "Not following IRCC updates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white p-4 text-slate-700 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-red-600"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#0B1F3A]/10 bg-[#350000] p-8 text-white shadow-xl">
            <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.24em]">
              Document Checklist
            </p>
            <h2 className="mt-3 text-3xl font-serif font-bold text-white">
              Core documents reviewed during planning
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Passport",
                "IELTS",
                "ECA",
                "Work experience",
                "Proof of funds",
                "Bank statements",
                "SOP",
                "PCC",
                "Medical",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3"
                >
                  <ClipboardList className="h-4 w-4 text-[#EF3340]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Trust Section */}
      <section className="py-24 bg-white dark:bg-card border-y border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-[#EF3340] uppercase tracking-widest">
                  Why Choose Us
                </h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] dark:text-white">
                  We Don't Just Process Applications. We Build Strategies.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Canada immigration landscape is constantly changing.
                  Generic advice leads to rejections. Our approach is deeply
                  analytical—we assess your profile against the latest IRCC
                  updates and historical draw trends to position you for
                  success.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-[#1E3A8A]/10 p-2 rounded-lg h-fit">
                    <ShieldCheck className="w-6 h-6 text-[#EF3340] dark:text-[#C9A14A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Regulated & Compliant</h4>
                    <p className="text-muted-foreground">
                      We adhere strictly to IRCC guidelines. No false promises,
                      no hidden fees.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-[#1E3A8A]/10 p-2 rounded-lg h-fit">
                    <TrendingUp className="w-6 h-6 text-[#EF3340] " />
                    {/* dark:text-[#C9A14A] */}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      CRS Score Optimization
                    </h4>
                    <p className="text-muted-foreground">
                      We identify actionable steps to increase your score—from
                      PNP targeting to language retakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#350000] rounded-xl p-8 md:p-12 text-white shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-[#EF3340] text-white text-xs font-bold px-4 py-1 rounded shadow-lg uppercase tracking-wide">
                Case Study
              </div>
              <h4 className="text-2xl font-serif font-bold mb-6">
                From Stagnant to Invited
              </h4>
              <p className="text-gray-300 mb-8 italic">
                "My CRS score was stuck. Rexgate analyzed my profile, advised a
                specific provincial pathway, and guided my documentation."
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400">Initial CRS Score</span>
                  <span className="font-mono text-xl text-red-400">418</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400">Strategy Applied</span>
                  <span className="font-medium text-right text-sm">
                    Targeted PNP Nomination
                    <br />+ IELTS Retake Strategy
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-400 font-medium">
                    Final Score & Result
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-3xl font-bold text-green-400">
                      472
                    </span>
                    <div className="text-[#EF3340] text-sm font-bold mt-1">
                      ITA Received
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#EEF2F7]">
        <div className="container">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.24em]">
                Client Feedback
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-[#0B1F3A]">
                Professional, transparent, structured.
              </h2>
            </div>
            <div className="flex gap-1 text-[#EF3340]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-current" />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              [
                "Arjun Mehta",
                "Finance Professional (Dubai)",
                "Clear strategy and structured approach.",
              ],
              [
                "Sarah Khan",
                "HR Manager (Abu Dhabi)",
                "They transformed my profile completely.",
              ],
              [
                "Daniel Fernandes",
                "IT Consultant (Dubai)",
                "Highly professional and transparent.",
              ],
            ].map(([name, role, quote]) => (
              <Card
                key={name}
                className="bg-white border-[#0B1F3A]/10 shadow-md"
              >
                <CardContent className="p-7">
                  <p className="text-lg font-serif text-[#0B1F3A]">“{quote}”</p>
                  <div className="mt-8 border-t pt-4">
                    <p className="font-bold text-[#0B1F3A]">{name}</p>
                    <p className="text-sm text-slate-500">{role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.24em]">
                Latest Updates
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-[#0B1F3A]">
                Immigration news and strategy notes.
              </h2>
              <p className="mt-4 text-slate-600 leading-7">
                Read the latest Canada immigration updates separately from
                Rexgate's advisory service pages.
              </p>
            </div>
            <Button
              variant="outline"
              className="w-fit border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#d81418] hover:text-white"
              asChild
            >
              <Link href="/blog">View Blog</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title:
                  "Canada's 2026 Immigration Overhaul: Key Changes You Need to Know",
                date: "16th April, 2026",
                snippet:
                  "A concise overview of 2026 immigration target changes, Express Entry categories, temporary resident limits and compliance updates.",
                href: "/blog/canada-2026-immigration-overhaul",
              },
              {
                title:
                  "The Provincial Nominee Program (PNP) in 2026 and Beyond",
                date: "2026",
                snippet:
                  "A practical briefing on PNP allocation shifts, category-based draws, settlement intent and applicant strategy for the next five years.",
                href: "/blog/pnp-2026-and-beyond",
              },
              {
                title: "Canada’s New TR-to-PR Direction",
                date: "2026",
                snippet:
                  "The original Temporary Resident to Permanent Resident pathway remains closed and has been closed since November 5, 2021.",
                href: "/blog/canada-new-tr-to-pr-direction",
              },
              {
                title:
                  "Recent changes to Canada’s Rural Community Immigration Pilot (RCIP)",
                date: "2026",
                snippet:
                  "The RCIP sits in a very specific policy space: it is designed to move skilled workers into smaller communities that have persistent vacancies.",
                href: "/blog/recent-changes-canada-rcip",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group border border-[#0B1F3A]/10 bg-[#EEF2F7]/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Newspaper className="h-7 w-7 text-[#EF3340]" />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340]">
                  {post.date}
                </p>
                <h3 className="mt-3 text-xl font-bold font-serif text-[#0B1F3A] group-hover:text-[#1E3A8A]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {post.snippet}
                </p>
                <span className="mt-5 inline-flex text-sm font-bold text-[#1E3A8A]">
                  Read More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative bg-[#0B0A0A] text-white text-center ">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(159,0,0,0.6) 0%, rgba(0,0,0,1) 100%)",
          }}
        ></div>
        <div className="container relative max-w-4xl text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Book a comprehensive assessment with our senior consultants. We'll
            evaluate your profile and map out your exact timeline and costs.
          </p>
          <div className="pt-4">
            <span
              // size="lg"
              className="bg-[#EF3340] hover:bg-[#d81418] text-white font-semibold text-lg px-10 py-6 h-auto"
              // asChild
            >
              <Link href="/contact">Book Your Consultation Now</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <Card className="group hover:border-[#1E3A8A] hover:shadow-lg transition-all duration-300 border-border bg-card">
      <CardContent className="p-8 space-y-6">
        <div className="bg-primary/5 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="space-y-3">
          <h4 className="text-xl font-bold font-serif text-primary dark:text-white group-hover:text-[#1E3A8A] dark:group-hover:text-[#C9A14A] transition-colors">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="pt-4 border-t border-border">
          <Link
            href={link}
            className="inline-flex items-center text-sm font-bold text-[#EF3340] dark:text-[#C9A14A] hover:underline uppercase tracking-wide"
          >
            Learn More <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
