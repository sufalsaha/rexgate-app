// import { SEO } from "@/components/SEO";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const initiativeHighlights = [
//   ["Target Intake", "33,000 work permit holders to be transitioned in 2026 and 2027.", "Aims to stabilize the domestic labor market by prioritizing those already here."],
//   ["Sector Focus", "Emphasis on health care, trades, support services, and rural areas.", "Addresses specific labor shortages while reducing new temporary arrivals."],
//   ["Selection Criteria", "Priority for workers with 'established roots', tax records, and community ties.", "Shifts focus from just 'having a job' to 'being integrated'."],
//   ["2021 Extension", "Former TR-to-PR applicants (2021) can extend open work permits until Dec 31, 2026.", "Provides a safety net for those still in the legacy processing queue."],
// ];

// const whoBenefits = [
//   "In-Canada Workers: Those already contributing to the economy and paying taxes.",
//   "Rural Community Residents: Individuals living in areas facing chronic labor shortages.",
//   "Strategic Employers: Businesses looking to retain established staff through PR support.",
//   "Valid Permit Holders: Candidates with clean status and clear Canadian work history.",
// ];

// const strategySteps = [
//   ["Maintain Status", "Ensure your work permit remains valid; clean status is a baseline requirement."],
//   ["Document Everything", "Keep T4s, pay stubs, employment letters, and proof of residence ready."],
//   ["Review Existing Paths", "Don't wait; assess Express Entry, PNP, and Atlantic pathways now."],
//   ["Focus on Location", "If you are in a rural area or in-demand sector, double-check your NOC alignment."],
// ];

// const comparisonPoints = [
//   "Not a 'General' Reset: Unlike 2021, this is more selective and targeted toward specific needs.",
//   "Operational Details Pending: Policy direction is set, but the full application guide is still coming.",
//   "Stability Over Volume: The 2026-2028 plan favors transitions for people already in Canada.",
// ];

// export default function TrToPrDirection() {
//   return (
//     <div>
//       <SEO
//         title="Canada’s New TR-to-PR Direction: 2026 Strategy | Rexgate"
//         description="Analysis of Canada's new initiative to transition 33,000 work permit holders to permanent residency in 2026 and 2027."
//       />
//       <article>
//         {/* Hero Section */}
//         <section className="bg-[#fff] py-20 text-[#000]">
//           <div className="container max-w-4xl">
//             <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.28em]">Policy Update 2026</p>
//             <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-[#000]">
//               Canada’s New TR-to-PR Direction
//             </h1>
//             <p className="mt-6 text-xl leading-8 text-[#585858]">
//               Is a new TR-to-PR pathway coming back? The short answer is: not in the old 2021 format. But for 33,000 workers already in Canada, the door is opening in a new way.
//             </p>
//             <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#EF3340]">Published: 20 April 2026 • 5 min read</p>
//           </div>
//         </section>

//         <section className="container max-w-5xl py-16">
//           {/* 1. What's Announced */}
//           <section className="mb-12">
//             <h2 className="text-3xl font-serif font-bold text-[#000]">1. The 2026-2027 Initiative</h2>
//             <div className="mt-6 grid gap-5">
//               {initiativeHighlights.map(([area, shift, reason]) => (
//                 <div key={area} className="rounded-xl border border-[#EF3340]/10 bg-white p-6 shadow-sm">
//                   <h3 className="text-xl font-bold text-[#000]">{area}</h3>
//                   <p className="mt-3 text-[#585858]"><strong>Key Detail:</strong> {shift}</p>
//                   <p className="mt-2 text-[#585858]"><strong>Strategic Context:</strong> {reason}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 2. Who Benefits */}
//           <section className="mb-12 rounded-xl bg-[#EEF2F7] p-8">
//             <h2 className="text-3xl font-serif font-bold text-[#000]">2. Who Should Pay Attention?</h2>
//             <ul className="mt-5 grid gap-3">
//               {whoBenefits.map((item) => (
//                 <li key={item} className="border-l-2 border-[#EF3340] bg-white px-4 py-3 text-slate-700">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </section>

//           {/* 3. Strategy & Action */}
//           <section className="mb-12">
//             <h2 className="text-3xl font-serif font-bold text-[#000]">3. Strategic Preparation (What to Do Now)</h2>
//             <div className="mt-6 grid gap-5 md:grid-cols-2">
//               {strategySteps.map(([step, description]) => (
//                 <div key={step} className="rounded-xl bg-[#350000] p-6 text-white">
//                   <h3 className="text-xl font-bold text-[#EF3340]">{step}</h3>
//                   <p className="mt-3 leading-7 text-[#fff]">{description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 4. Comparison vs 2021 */}
//           <section className="mb-12 grid gap-6">
//             <div className="rounded-xl border border-blue-100 bg-blue-50 p-7">
//               <h2 className="text-3xl font-serif font-bold text-[#0B1F3A]">4. Is this the 2021 Pathway Reborn?</h2>
//               <p className="mt-4 text-slate-700 font-semibold">Short Answer: No.</p>
//               <ul className="mt-5 grid gap-3 text-slate-700">
//                 {comparisonPoints.map((item) => (
//                   <li key={item} className="flex items-start gap-2">
//                     <span className="text-[#EF3340]">•</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>

//           {/* Bottom Line & CTA */}
//           <section className="rounded-xl bg-[#350000] p-8 text-white">
//             <h2 className="text-3xl font-serif font-bold text-white">Bottom Line</h2>
//             <p className="mt-4 leading-8 text-blue-100">
//               The opportunity is real, but the details are still evolving. Canada is placing higher value on those already integrated into the workforce. Stay compliant, document your journey, and be ready to move when the formal gates open.
//             </p>
//             <Button asChild className="mt-6 bg-[#EF3340] hover:bg-[#d81418] text-white">
//               <Link href="/contact">Book a Consultation</Link>
//             </Button>
//           </section>
//         </section>
//       </article>
//     </div>
//   );
// }


import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const meaningGroups = [
  "Workers with Canadian experience may benefit if the future measure prioritizes people already integrated into the labour market. That would be consistent with the government’s language around workers who have “established strong roots” and are already contributing to local economies.",
  "Those working in sectors with labour shortages may have stronger positioning, especially if they are in health care, trades, support services, or other occupations that Canada continues to frame as economically important. The current public wording specifically refers to “specific in-demand sectors” and includes a focus on rural areas.",
  "Employers may also see this as a retention opportunity. If a pathway is designed around workers already employed and paying taxes in Canada, employers who rely on temporary foreign workers could have a stronger reason to support documentation, compliance, and long-term retention planning. This is an inference based on the stated focus of the measure, not yet a published eligibility rule."
];

const strategySteps = [
  "First, maintain valid status. If a targeted in-Canada measure opens, those with clean and current status are likely to be in a much stronger position than those scrambling after a permit has expired. That is not a formal eligibility rule yet, but it is one of the most consistent realities across Canadian immigration practice.",
  "Second, document your Canadian establishment. Keep records of your work permits, tax filings, pay stubs, T4s, employment letters, proof of residence, and any evidence showing stable ties to your community and labour market participation. The government’s language strongly emphasizes workers who have built roots and are contributing economically.",
  "Third, review your current PR options now instead of waiting passively. A future targeted measure may come, but it has not opened yet. Eligible candidates should still assess Express Entry, provincial nominee programs, Atlantic pathways, rural pathways, and any employer-supported options already available. This is strategic advice rather than a statement about a new published program.",
  "Fourth, pay attention to the sector and location. Because current federal wording mentions in-demand sectors and rural communities, workers in those settings may want to ensure their job titles, duties, payroll records, and employer documentation are well organized in case future selection criteria reflect those priorities."
];

export default function TrToPrDirection() {
  return (
    <div>
      <SEO
        title="Canada’s New TR-to-PR Direction: What It Means for Temporary Residents Already in Canada | Rexgate"
        description="Analysis of Canada's new initiative to transition up to 33,000 work permit holders to permanent residency in 2026 and 2027."
      />
      <article>
        <section className="bg-[#fff] py-20 text-[#000]">
          <div className="container max-w-4xl">
            <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.28em]">Immigration Update</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-[#000] leading-tight">
              Canada’s New TR-to-PR Direction: What It Means for Temporary Residents Already in Canada
            </h1>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#EF3340]">
              20 April 2026
            </p>
          </div>
        </section>

        <section className="container max-w-4xl py-16">
          <div className="prose prose-lg max-w-none text-[#585858] leading-8">
            <p>
              For many temporary residents in Canada, the biggest question right now is simple: is a new TR-to-PR pathway finally coming back?
            </p>
            <p>
              The short answer is: not in the old 2021 format.
            </p>
            <p>
              The original Temporary Resident to Permanent Resident pathway remains closed and has been closed since November 5, 2021. However, the latest federal immigration planning documents confirm something important: Canada intends to accelerate the transition of up to 33,000 work permit holders to permanent residence in 2026 and 2027 through a targeted, one-time measure.
            </p>
            <p>
              For people already living and working in Canada, this matters.
            </p>
            <p>
              It signals that the government is still committed to helping certain in-Canada workers move into permanent residence, even while it reduces new temporary resident intake and tightens the overall balance between temporary and permanent immigration. The 2026–2028 levels plan keeps permanent resident admissions stable at 380,000 in 2026 while also reducing temporary resident arrival targets, which shows a clear policy preference: more stability for people already here and contributing, rather than continued high volumes of new temporary arrivals.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#000] mt-12 mb-6">What exactly has been announced?</h2>
            <p>
              The government has announced a one-time, two-year initiative in 2026 and 2027 to fast-track permanent residence for up to 33,000 work permit holders. Official descriptions say the measure is aimed at workers who have established roots in their communities, are paying taxes, and are contributing in in-demand sectors, including rural areas facing labour shortages.
            </p>
            <p>
              What has not been announced yet is just as important. So far, IRCC has not published a full application stream, eligibility guide, launch date, or intake instructions for a general new TR-to-PR program. In other words, the policy direction is real, but the operational details are still pending.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#000] mt-12 mb-6">What this means for people already in Canada</h2>
            <p>
              This is encouraging news for temporary foreign workers and other work permit holders already inside Canada. It suggests that Canada is looking more closely at people who are already economically established here rather than relying only on future arrivals.
            </p>
            <p>
              In practical terms, this creates opportunity for several groups:
            </p>
            <ul className="mt-6 grid gap-4">
              {meaningGroups.map((text, index) => (
                <li key={index} className="rounded-xl border border-[#EF3340]/10 bg-[#EEF2F7] p-6 text-slate-700 shadow-sm">
                  {text}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-serif font-bold text-[#000] mt-12 mb-6">Who should pay the closest attention?</h2>
            <p>
              If you are already in Canada on a valid work permit, this update should be on your radar.
            </p>
            <p>
              That includes closed work permit holders, open work permit holders, workers in rural or hard-to-fill labour markets, and those with a clear Canadian work history and tax record. The announcement is specifically framed around work permit holders, so people in visitor status should be cautious about assuming this will apply to them unless future program rules say otherwise.
            </p>
            <p>
              Former 2021 TR-to-PR applicants are in a different category. They are not applying under a new pathway at this point. Instead, if they are still waiting on their 2021 permanent residence application, they may still apply for an open work permit until December 31, 2026.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#000] mt-12 mb-6">What should temporary residents do now?</h2>
            <p>
              This is the stage where strategy matters.
            </p>
            <div className="mt-8 grid gap-6">
              {strategySteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF3340] text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-slate-700 m-0 leading-7">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#000] mt-12 mb-6">Is this the return of the old 2021 TR-to-PR program?</h2>
            <p>
              No. At least not based on what has been published so far.
            </p>
            <p>
              The original 2021 pathway was a time-limited public policy with specific streams and caps. It is closed, and IRCC continues to treat it as a closed program while processing remaining cases. Parliamentary materials note that over 103,000 temporary residents and their families had been welcomed through that pathway as of October 31, 2024, with remaining applications expected to be processed by the end of 2025.
            </p>
            <p>
              The new measure is different in tone. It appears to be more selective, more targeted, and more closely tied to labour-market and settlement priorities. That means people should avoid assuming there will be a wide-open intake identical to 2021. That comparison is an analytical interpretation based on the official language currently available.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#000] mt-12 mb-6">Final thoughts</h2>
            <p>
              For temporary residents already in Canada, this announcement is not a full program launch – but it is a meaningful signal.
            </p>
            <p>
              Canada is clearly moving toward a model that places greater value on people already here, already working, already paying taxes, and already integrated into communities. For many workers, that is a positive shift. It suggests that remaining in compliance, building a strong work history, and preparing documentation now may create advantages when the next targeted opportunity is formally released.
            </p>
            <p>
              The opportunity is real. The details are still coming. And for those already in Canada, this is the time to prepare, not wait.
            </p>
            
            <div className="mt-12 rounded-xl bg-[#350000] p-8 text-center text-white">
              <p className="text-xl font-medium mb-6">
                (Have questions? Drop us a message and book a consultation to map out your TR to PR pathway.)
              </p>
              <Button asChild className="bg-[#EF3340] hover:bg-[#d81418] text-white px-8 py-6 text-lg rounded-full">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
            
          </div>
        </section>
      </article>
    </div>
  );
}