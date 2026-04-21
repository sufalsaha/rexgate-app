import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const newShifts = [
  ["Allocation Boost", "Total PNP admissions climb to 120,000, 32% of all economic PR spots, by 2028 per the supplementary levels plan.", "Provinces get more power to hit labour-market targets, especially outside Ontario and B.C."],
  ["Category-Based Express Entry Draws", "IRCC continues category draws for French, STEM, healthcare, trades, and transport. Provinces mirror them with matching PNP streams.", "Expect lower CRS cut-offs for STEM and Francophone candidates nominated by provinces like NB, ON and SK."],
  ["Regional Immigration Agreements 2.0", "Renewed Atlantic Immigration Program and RNIP+ feed directly into provincial quotas instead of separate caps.", "One LMIA-free job offer can unlock either AIP permanent residence or a PNP nomination, doubling options."],
  ["Digital Application Portals", "All provinces except Quebec now accept e-signatures and e-payments; some integrate directly with IRCC's PR Portal.", "Shorter hand-off time between nomination and PR filing, with fewer courier fees."],
  ["Tie-Breaker Rules", "Provinces introduce good-faith stay clauses requiring 12 months of residence before moving without risking PR renewal.", "Choosing a province you genuinely like is now even more important."],
];

const unchanged = [
  "Two-step process: you still need a provincial nomination plus federal approval for medical, security and funds.",
  "Job offer is not mandatory everywhere. Saskatchewan Occupation-In-Demand, Alberta Accelerated Tech and Ontario Masters streams remain job-offer-free.",
  "A provincial nomination under Express Entry still adds 600 points and guarantees an Invitation to Apply.",
  "Settlement intent matters. IRCC can revoke PR if you never attempt to live in the nominating province. Paper trail matters.",
];

const trends = [
  ["Demographic Targets", "Francophone and regional population quotas are baked into allocations. Watch NB, NS and MB for French-speaking incentives."],
  ["AI-Driven Fraud Screening", "Provinces share data with IRCC; fake job offers are flagged swiftly."],
  ["Stackable Pathways", "Work permits such as IMP C11 entrepreneurs and T13 mobilité francophone are designed to dovetail into PNPs."],
  ["Economic Slow-Down Contingencies", "Provincial quotas can be temporarily reallocated to family or humanitarian streams, so backup plans matter."],
];

const dos = [
  "Track provincial draw calendars and set alerts for SINP EOI rounds, OINP tech draws and BC PNP weekly updates.",
  "Tailor the resume using NOC 2021 titles exactly; mis-labelling can kill EOIs.",
  "Collect provincial ties such as short courses, prior work terms or a sibling in-province.",
  "Plan for proof of funds because provinces often require it twice: nomination and PR.",
  "Document settlement efforts such as rental searches and school inquiries; save emails for later.",
];

const donts = [
  "Ignore language scores. Every point counts, so re-test before hitting submit.",
  "Assume mobility. Moving straight to Toronto after a PEI nomination risks compliance issues.",
  "Rely on parallel applications. Duplicate provincial EOIs can trigger bans in some provinces.",
  "DIY complex cases. Previous refusals, medical issues or non-accompanying dependants warrant professional help.",
];

export default function PnpBeyond() {
  return (
    <div>
      <SEO
        title="The Provincial Nominee Program (PNP) in 2026 and Beyond | Rexgate"
        description="A practical 2026 PNP briefing covering allocations, category draws, regional agreements, digital portals, settlement intent and applicant strategy."
      />
      <article>
        <section className="bg-[#0B1F3A] py-20 text-white">
          <div className="container max-w-4xl">
            <p className="text-sm font-bold text-[#C9A14A] uppercase tracking-[0.28em]">PNP Strategy</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-white">The Provincial Nominee Program (PNP) in 2026 and Beyond</h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Canada's Provincial Nominee Programs have always been the back door that becomes a front door when Express Entry scores spike. In 2026 the door is wider – but also smarter – than ever.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">Estimated read: 4 minutes</p>
          </div>
        </section>
        <section className="container max-w-5xl py-16">
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">1. What's New for 2026</h2>
            <div className="mt-6 grid gap-5">
              {newShifts.map(([area, shift, reason]) => (
                <div key={area} className="rounded-xl border border-[#0B1F3A]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-[#0B1F3A]">{area}</h3>
                  <p className="mt-3 text-slate-700"><strong>Key shift:</strong> {shift}</p>
                  <p className="mt-2 text-slate-700"><strong>Why it matters:</strong> {reason}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12 rounded-xl bg-[#EEF2F7] p-8">
            <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">2. What Hasn't Changed</h2>
            <ul className="mt-5 grid gap-3">
              {unchanged.map((item) => <li key={item} className="border-l-2 border-[#C9A14A] bg-white px-4 py-3 text-slate-700">{item}</li>)}
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">3. Trends to Watch (2026-2030)</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {trends.map(([trend, implication]) => (
                <div key={trend} className="rounded-xl bg-[#0B1F3A] p-6 text-white">
                  <h3 className="text-xl font-bold text-[#C9A14A]">{trend}</h3>
                  <p className="mt-3 leading-7 text-blue-50">{implication}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-100 bg-green-50 p-7">
              <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">4. Do's</h2>
              <ul className="mt-5 grid gap-3 text-slate-700">
                {dos.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50 p-7">
              <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">Don'ts</h2>
              <ul className="mt-5 grid gap-3 text-slate-700">
                {donts.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>
          <section className="mb-12 rounded-xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">5. Action Checklist for 2026</h2>
            <div className="mt-6 grid gap-3 text-slate-700">
              <p><strong>Jan-Feb:</strong> Refresh NOC code, gather reference letters, schedule IELTS/TEF.</p>
              <p><strong>Mar-Apr:</strong> Create or update Express Entry profile; open EOIs in targeted provinces.</p>
              <p><strong>May-Jun:</strong> Attend virtual job fairs for Atlantic and Prairie regions.</p>
              <p><strong>Jul-Sep:</strong> File full application if invited; arrange police certificates early.</p>
              <p><strong>Oct-Dec:</strong> Prepare post-nomination documents including upfront medicals and proof of funds update.</p>
            </div>
          </section>
          <section className="rounded-xl bg-[#0B1F3A] p-8 text-white">
            <h2 className="text-3xl font-serif font-bold text-white">Bottom Line</h2>
            <p className="mt-4 leading-8 text-blue-100">
              With higher quotas, more tech-driven draws and stronger settlement enforcement, PNPs will remain the most reliable path to Canadian PR through 2030. Pick the right province, document your intent and stay agile as categories evolve.
            </p>
            <Button asChild className="mt-6 bg-[#C9A14A] hover:bg-[#b08b3a] text-white">
              <Link href="/contact">Map Your 2026 PNP Strategy</Link>
            </Button>
          </section>
        </section>
      </article>
    </div>
  );
}