import { ServiceDetailPage } from "@/components/ServiceDetailPage";


const data = {
  "title": "Express Entry Canada",
  "eyebrow": "Canada PR Pathway",
  "description": "A strategic pathway for skilled professionals seeking Canada PR from UAE through CRS score Canada optimization, Express Entry profile planning, and complete PR documentation.",
  "seoTitle": "Express Entry Canada | CRS Score & Canada PR from UAE",
  "seoDescription": "Express Entry Canada advisory for UAE professionals. CRS score Canada planning, Canada PR without job offer strategy, documents, cost and timelines.",
  "who": [
    "Skilled professionals in UAE and GCC with foreign work experience",
    "Applicants seeking Canada PR without job offer pathways",
    "Candidates who need CRS score Canada improvement before entering the pool",
    "Professionals monitoring Express Entry Canada draws and IRCC updates"
  ],
  "requirements": [
    "IELTS General Training or another accepted language result",
    "Educational Credential Assessment for foreign education",
    "Skilled work experience under eligible NOC/TEER categories",
    "Proof of funds where required by the selected program",
    "Accurate profile information aligned with employment and education documents"
  ],
  "process": [
    "Calculate baseline CRS score and Federal Skilled Worker eligibility",
    "Identify improvement strategy for IELTS, ECA, spouse factors, PNP or French",
    "Create or optimize the Express Entry profile",
    "Monitor draws, category-based invitations and IRCC updates",
    "Prepare eAPR documentation after Invitation to Apply",
    "Review submission for consistency before final filing"
  ],
  "documents": [
    "Passport",
    "IELTS or CELPIP test result",
    "ECA report",
    "Employment reference letters",
    "Proof of funds",
    "Police clearance certificates",
    "Medical exam",
    "Marriage and family documents where applicable"
  ],
  "cost": [
    "Government fees, biometrics, medicals, IELTS, ECA and police certificates vary by profile and family size.",
    "Rexgate provides a transparent Canada immigration cost overview during assessment before advisory work begins."
  ],
  "timeline": "Express Entry profile preparation may take a few weeks depending on IELTS and ECA readiness. IRCC targets many complete PR applications within about six months after submission, subject to case complexity.",
  "mistakes": [
    "Entering the pool without a CRS strategy",
    "Weak or inconsistent employment letters",
    "Ignoring category-based draws and PNP opportunities",
    "Assuming Canada PR without a job offer means no documentation strategy is needed"
  ],
  "cta": "Check your Express Entry eligibility and CRS improvement plan.",
  "highlight": "A job offer is not mandatory for many Express Entry Canada candidates. The key is building a competitive CRS score Canada strategy and preparing evidence before an ITA arrives."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
