import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const faqs = [
  [
    "How to immigrate to Canada from UAE?",
    "Start with a profile assessment covering age, education, work experience, IELTS potential, ECA status, proof of funds and family composition. Common pathways include Express Entry Canada, PNP, RCIP, Study in Canada and business mobility routes."
  ],
  [
    "What are the Canada PR requirements?",
    "Canada PR requirements depend on the program. Most skilled pathways review language scores, education, work experience, admissibility, proof of funds and complete documentation."
  ],
  [
    "Can I get Canada PR without a job offer?",
    "Yes. Many Express Entry Canada candidates qualify for Canada PR without job offer if their CRS score Canada profile is competitive or if they qualify through a PNP stream that does not require a job offer."
  ],
  [
    "What is a good CRS score Canada target?",
    "The right CRS target changes with IRCC updates and draw categories. Rexgate reviews current draws, category-based invitations and provincial options before advising a target."
  ],
  [
    "How much does Canada immigration cost?",
    "Canada immigration cost can include IELTS, ECA, government fees, biometrics, medicals, PCC, translations, proof of funds and advisory fees. Exact cost depends on program and family size."
  ],
  [
    "How long does the Canada immigration process take?",
    "Timelines vary by pathway. Express Entry PR processing may be around six months after complete submission, while PNP, study permits, visitor visas and business routes follow different timelines."
  ],
  [
    "Is IELTS mandatory for Canada PR?",
    "IELTS General Training or another accepted language test is commonly required for skilled Canada PR pathways. Higher scores can significantly improve CRS score Canada outcomes."
  ],
  [
    "What is ECA?",
    "Educational Credential Assessment verifies how a foreign degree compares to Canadian education standards. It is commonly required for Express Entry Canada."
  ],
  [
    "What proof of funds is required?",
    "Proof of funds usually includes bank statements and financial evidence showing available settlement funds. Requirements depend on program and family size."
  ],
  [
    "What are IRCC updates?",
    "IRCC updates are official policy, processing and program announcements from Immigration, Refugees and Citizenship Canada. They can affect eligibility, draws and timelines."
  ],
  [
    "What is Express Entry Canada?",
    "Express Entry Canada is an online selection system for skilled workers under programs such as Federal Skilled Worker, Canadian Experience Class and Federal Skilled Trades."
  ],
  [
    "What is PNP?",
    "The Provincial Nominee Program allows Canadian provinces to nominate candidates who match local labour market or settlement needs."
  ],
  [
    "Is RCIP a low CRS option?",
    "RCIP can be an alternative pathway for candidates whose CRS score is not competitive, provided they meet community and program requirements."
  ],
  [
    "Can I Study in Canada and later apply for PR?",
    "Many students use Study in Canada as a long-term route involving a study permit, eligible program, possible PGWP and later PR strategy."
  ],
  [
    "What makes a strong SOP for student visa?",
    "A strong SOP explains program logic, career progression, finances, home ties and why Canada is appropriate for your studies."
  ],
  [
    "Why are Canada tourist visas refused?",
    "Common reasons include unclear travel purpose, weak financial evidence, limited ties, inconsistent documents or previous refusal concerns not addressed."
  ],
  [
    "What is a Super Visa?",
    "A Super Visa allows eligible parents and grandparents of Canadian citizens or permanent residents to visit Canada for extended stays, subject to insurance and financial requirements."
  ],
  [
    "Do you guarantee visas?",
    "No. We do not guarantee visas. Final decisions are made by IRCC. Rexgate provides structured advisory, documentation strategy and transparent guidance."
  ],
  [
    "Can UAE residents apply for Canada immigration?",
    "Yes. UAE residents of many nationalities can apply for Canada immigration from UAE if they meet program requirements."
  ],
  [
    "Do I need a consultation before applying?",
    "A consultation is recommended because program choice, CRS planning, cost, documents and timelines should be reviewed before submission."
  ],
  [
    "What documents should I prepare first?",
    "Passport, IELTS, ECA, work experience letters, proof of funds, bank statements, SOP where relevant, PCC and medical planning are common starting points."
  ],
  [
    "How does Rexgate stay current?",
    "Rexgate monitors Canada immigration news, IRCC updates, Express Entry draws and Canada immigration 2025 and 2026 program changes."
  ]
];

export default function FAQ() {
  return (
    <div>
      <SEO title="Frequently Asked Questions | Rexgate Immigration" description="Answers to questions about Canada PR, CRS score Canada, IELTS, cost, processing time and Canada immigration from UAE." />
      <section className="bg-[#fff] py-20 text-[#000] text-center">
        <div className="container max-w-4xl">
          <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.28em]">FAQ</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-[#000]">Frequently Asked Questions</h1>
          <p className="mt-5 text-xl text-[#585858]">Clear answers to complex Canada immigration, Canada PR and Canada visa questions.</p>
        </div>
      </section>
      <section className="container py-20 max-w-5xl">
        <div className="grid gap-5">
          {faqs.map(([q, a], index) => (
            <div key={q} className="rounded-xl border border-[#0B1F3A]/10 bg-white p-6 shadow-sm" data-testid={"faq-item-" + index}>
              <h2 className="text-xl font-bold text-[#0B1F3A]">{q}</h2>
              <p className="mt-3 text-slate-600 leading-7">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-[#350000] p-8 text-center">
          <p className="text-lg text-white mb-6">Have a question not listed here?</p>
          <Button asChild className="bg-[#EF3340] text-white hover:bg-[#d81418]/90" data-testid="button-ask-expert">
            <Link href="/contact">Ask an Expert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
