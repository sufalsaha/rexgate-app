import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  "title": "Provincial Nominee Program (PNP)",
  "eyebrow": "Province-led Canada PR",
  "description": "PNP advisory for candidates seeking province-specific Canada PR pathways, CRS boosts and occupation-driven opportunities across Canada.",
  "seoTitle": "PNP Canada Immigration | Provincial Nominee Advisory UAE",
  "seoDescription": "Provincial Nominee Program guidance for UAE professionals seeking Canada PR through province-specific streams and CRS score boosts.",
  "who": [
    "Express Entry candidates needing a CRS boost",
    "Professionals with occupations targeted by Canadian provinces",
    "Applicants open to settling in a specific province",
    "Candidates seeking Canada PR without a job offer where eligible streams exist"
  ],
  "requirements": [
    "Occupation, education and experience matching provincial criteria",
    "Language scores meeting stream thresholds",
    "Settlement intent for the province",
    "Proof of funds where required",
    "Accurate Express Entry profile for aligned streams"
  ],
  "process": [
    "Assess profile against active provincial streams",
    "Identify province-occupation fit and draw history",
    "Prepare expression of interest or profile submission",
    "Compile province-specific documents",
    "Respond to nomination requests and submit PR stage",
    "Track IRCC processing after nomination"
  ],
  "documents": [
    "Passport",
    "IELTS or language results",
    "ECA",
    "Employment letters",
    "Settlement funds",
    "Resume",
    "Province forms",
    "Family documents",
    "Police clearance"
  ],
  "cost": [
    "PNP costs vary by province and may include provincial application fees plus federal PR fees.",
    "Rexgate outlines government fees, documentation costs and expected advisory scope before submission."
  ],
  "timeline": "PNP timelines depend on the province, stream, draw cycle and federal processing stage. Some aligned streams move faster after nomination.",
  "mistakes": [
    "Applying to provinces without genuine fit",
    "Missing occupation-specific evidence",
    "Weak settlement intent explanation",
    "Not monitoring changing Canada immigration 2025 and 2026 criteria"
  ],
  "cta": "Find the right province-led Canada PR route for your profile.",
  "highlight": "A nomination can significantly improve Express Entry prospects, but province selection must be evidence-based rather than random."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
