import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  "title": "Entrepreneur Immigration",
  "eyebrow": "Business Immigration",
  "description": "Business immigration advisory for entrepreneurs, founders and investors exploring Canada immigration through business ownership, provincial streams or innovation routes.",
  "seoTitle": "Entrepreneur Immigration Canada | Business Immigration UAE",
  "seoDescription": "Canada entrepreneur immigration advisory for UAE business owners and founders including business plan, net worth, experience and province strategy.",
  "who": [
    "UAE business owners planning Canada relocation",
    "Entrepreneurs evaluating provincial business immigration streams",
    "Founders with scalable business concepts or Canadian expansion plans",
    "Investors needing strategy before committing funds"
  ],
  "requirements": [
    "Business ownership or senior management experience",
    "Net worth and source of funds documentation",
    "Business concept or investment plan aligned with program criteria",
    "Language and education evidence where required",
    "Settlement and active management intent"
  ],
  "process": [
    "Assess business profile, funds and immigration goals",
    "Match entrepreneur streams by province and eligibility",
    "Develop business concept and documentation roadmap",
    "Prepare financial source and ownership evidence",
    "Submit EOI or application according to stream process",
    "Plan work permit, nomination or PR stages where applicable"
  ],
  "documents": [
    "Passport",
    "Business registration",
    "Audited financials or accounts",
    "Tax documents",
    "Bank statements",
    "Net worth evidence",
    "Business plan",
    "Resume",
    "Education and language proof"
  ],
  "cost": [
    "Business immigration may involve government fees, business plan preparation, translations, legal/accounting documents and investment or net worth evidence.",
    "Rexgate provides a cost overview based on the selected stream before proceeding."
  ],
  "timeline": "Entrepreneur pathway timelines vary widely by province, interview stages, business establishment requirements and nomination process.",
  "mistakes": [
    "Choosing a stream before verifying funds and management experience",
    "Weak or generic business plan",
    "Unclear source of funds",
    "Underestimating compliance after arrival"
  ],
  "cta": "Evaluate the right Canada business immigration route before investing.",
  "highlight": "Entrepreneur immigration is document-heavy and strategy-led. The business story, financial trail and settlement plan must be credible."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
