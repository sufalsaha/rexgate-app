import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  "title": "ICT Work Permit",
  "eyebrow": "Business Mobility",
  "description": "Intra-Company Transfer work permit advisory for qualified executives, managers and specialized knowledge workers moving to a Canadian branch or affiliate.",
  "seoTitle": "ICT Work Permit Canada | Intra-Company Transfer UAE",
  "seoDescription": "Canada ICT Work Permit guidance for UAE companies transferring executives, managers or specialized knowledge workers to Canada.",
  "who": [
    "UAE companies expanding to Canada",
    "Executives or senior managers transferring within a multinational group",
    "Specialized knowledge employees supporting Canadian operations",
    "Business owners evaluating work permit to long-term Canada immigration planning"
  ],
  "requirements": [
    "Qualifying relationship between foreign and Canadian entities",
    "Eligible executive, managerial or specialized knowledge role",
    "Evidence of foreign company operations",
    "Canadian business plan or operational documents",
    "Applicant employment history with the company"
  ],
  "process": [
    "Review corporate structure and transfer eligibility",
    "Map applicant role to ICT category requirements",
    "Prepare Canadian entity and business evidence",
    "Compile employment, payroll and specialized knowledge documents",
    "Submit work permit application",
    "Plan compliance, extensions and PR options where suitable"
  ],
  "documents": [
    "Passport",
    "Employment letters",
    "Payroll records",
    "Company registration documents",
    "Organizational charts",
    "Canadian entity documents",
    "Business plan",
    "Financial statements",
    "Role description"
  ],
  "cost": [
    "Costs include work permit fees, employer compliance fee where applicable, biometrics, translations and corporate documentation preparation.",
    "Additional business setup or accounting costs may apply outside immigration fees."
  ],
  "timeline": "ICT processing depends on applicant location, biometrics, business document readiness and IRCC workload. Corporate evidence preparation often takes the most time.",
  "mistakes": [
    "Weak proof of qualifying company relationship",
    "Generic job descriptions",
    "No credible Canadian business plan",
    "Insufficient proof of specialized knowledge or managerial authority"
  ],
  "cta": "Assess whether your transfer qualifies for an ICT Work Permit.",
  "highlight": "ICT applications succeed when the company story and the applicant role are both credible, specific and well documented."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
