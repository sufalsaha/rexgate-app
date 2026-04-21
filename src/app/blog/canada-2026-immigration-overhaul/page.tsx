import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const sections = [
  {
    title: "1. Permanent Resident Targets Locked at 380,000",
    points: [
      "Economic Class: 239,800, up from 59% to 64% of total PRs by 2027",
      "Family: 84,000",
      "Refugees/Humanitarian: 56,200",
      "French-speaking outside Quebec: 30,267, with the target exceeded at 9%",
      "New accelerated pathways for 33,000 rooted temporary workers and 115,000 protected persons",
    ],
  },
  {
    title: "2. Express Entry Gets Smarter Categories",
    points: [
      "New 2026 draws include medical doctors with Canadian experience, researchers with Canadian experience, senior managers with Canadian experience, transport occupations such as pilots, and skilled military recruits with CAF job offers",
      "Renewed and tougher categories include French proficiency, healthcare, education, STEM and trades",
      "Minimum work experience rises to 1 year in the last 3 years, up from 6 months",
      "Official tool: IRCC Express Entry",
    ],
  },
  {
    title: "3. Temporary Residents Slashed",
    points: [
      "New arrivals: 385,000 in 2026, then 370,000 in 2027-28",
      "Workers under TFWP/IMP: 230,000, moving to 220,000",
      "Students: 155,000, moving to 150,000",
      "Goal: temporary residents below 5% of population by end of 2027",
      "Rural boost: low-wage TFW cap rises to 15% of workforce to March 2027",
    ],
  },
  {
    title: "4. Asylum & Border Rules Tightened (Bill C-12)",
    points: [
      "Claims more than 1 year after entry, post-June 2020, receive no IRB referral",
      "Irregular crossers claiming after 14 days receive no IRB referral",
      "Effective June 3, 2025; PRRA still available",
      "Details: IRCC Bill C-12 Backgrounder",
    ],
  },
  {
    title: "5. Fees Up, Family Perks Expanded",
    points: [
      "April 30 hikes include Permanent Residence fee increases",
      "Citizenship costs rise",
      "Super Visa sponsor income can use either of the past 2 tax years plus visitor income",
      "Super Visa stay remains 5 years per entry",
    ],
  },
  {
    title: "6. Enforcement & Tech Ramp-Up",
    points: [
      "AI document fraud detection",
      "Employer compliance penalties",
      "14-day priority for doctoral and Global Skills Strategy applications",
      "Master's and PhD students exempt from provincial attestation letters",
    ],
  },
];

export default function CanadaOverhaul() {
  return (
    <div>
      <SEO
        title="Canada's 2026 Immigration Overhaul | Rexgate Immigration"
        description="Key 2026 Canada immigration changes: PR targets, Express Entry categories, temporary resident caps, Bill C-12, fees, Super Visa and compliance."
      />
      <article>
        <section className="bg-[#0B1F3A] py-20 text-white">
          <div className="container max-w-4xl">
            <p className="text-sm font-bold text-[#C9A14A] uppercase tracking-[0.28em]">16th April, 2026</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-white">Canada's 2026 Immigration Overhaul: Key Changes You Need to Know</h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Canada's immigration system is undergoing its most significant recalibration in years. With targets dropping and new rules targeting sustainability, here's what changed in 2026 – and how it affects applicants.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">Estimated read: 3 minutes</p>
          </div>
        </section>
        <section className="container max-w-4xl py-16">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="rounded-xl border border-[#0B1F3A]/10 bg-white p-7 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0B1F3A]">{section.title}</h2>
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li key={point} className="border-l-2 border-[#C9A14A] bg-[#EEF2F7]/70 px-4 py-3 text-slate-700">{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <section className="mt-10 rounded-xl bg-[#EEF2F7] p-8">
            <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">Action Steps for Applicants</h2>
            <div className="mt-5 grid gap-3 text-slate-700">
              <p><strong>Check Eligibility:</strong> Use IRCC's Come to Canada Tool.</p>
              <p><strong>Track Draws:</strong> Monitor IRCC Express Entry Rounds.</p>
              <p><strong>Levels Plan:</strong> Review full 2026-2028 details through IRCC supplementary information.</p>
            </div>
          </section>
          <section className="mt-10 rounded-xl bg-[#0B1F3A] p-8 text-white">
            <h2 className="text-3xl font-serif font-bold text-white">Bottom line</h2>
            <p className="mt-4 leading-8 text-blue-100">
              Canada prioritizes economic impact, French speakers, and rooted temporary residents while curbing volumes and fraud. Act fast – new Express Entry categories are live now.
            </p>
            <Button asChild className="mt-6 bg-[#C9A14A] hover:bg-[#b08b3a] text-white">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </section>
        </section>
      </article>
    </div>
  );
}