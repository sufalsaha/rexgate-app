import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  "title": "Canada Super Visa",
  "eyebrow": "Parents & Grandparents",
  "description": "Super Visa advisory for parents and grandparents seeking long-term visits to Canada with strong invitation, income, insurance and family documentation.",
  "seoTitle": "Canada Super Visa | Parents and Grandparents Visa Advisory",
  "seoDescription": "Canada Super Visa guidance for parents and grandparents including invitation, income proof, medical insurance and documentation strategy.",
  "who": [
    "Parents or grandparents of Canadian citizens or permanent residents",
    "Families seeking longer visits than a standard visitor visa allows",
    "Applicants needing help with insurance, invitation and financial documents",
    "Families in UAE or GCC coordinating documents with relatives in Canada"
  ],
  "requirements": [
    "Eligible child or grandchild in Canada",
    "Letter of invitation with required details",
    "Proof host meets minimum income threshold where applicable",
    "Valid medical insurance",
    "Medical exam and admissibility documents"
  ],
  "process": [
    "Confirm family relationship and host eligibility",
    "Prepare host invitation and financial evidence",
    "Arrange insurance and medical requirements",
    "Compile applicant identity, funds and ties documents",
    "Submit application and biometrics",
    "Track IRCC updates and passport request"
  ],
  "documents": [
    "Passport",
    "Invitation letter",
    "Proof of relationship",
    "Host PR card or citizenship proof",
    "Host income documents",
    "Medical insurance",
    "Bank statements",
    "UAE residence documents if applicable"
  ],
  "cost": [
    "Costs include visa fee, biometrics, medical insurance, medical exam and document preparation.",
    "Insurance cost is a major variable and should be checked before submission."
  ],
  "timeline": "Processing varies by applicant location, biometrics and medical completion. Families should prepare early for intended travel dates.",
  "mistakes": [
    "Incomplete host income evidence",
    "Weak proof of family relationship",
    "Insurance not meeting requirements",
    "Ignoring applicant ties outside Canada"
  ],
  "cta": "Plan a compliant Super Visa application for long-term family visits.",
  "highlight": "A Super Visa file requires coordination between the applicant and the Canadian host. Both sides of the file matter."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
