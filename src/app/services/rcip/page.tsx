import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  "title": "RCIP Immigration Pathway",
  "eyebrow": "Alternative Low CRS Option",
  "description": "RCIP is positioned as an alternative Canada immigration pathway for eligible candidates whose CRS score may not be competitive for standard Express Entry draws.",
  "seoTitle": "RCIP Canada Immigration | Low CRS Alternative Pathway",
  "seoDescription": "RCIP advisory for UAE residents seeking low CRS alternatives to Canada PR through community-driven immigration pathways.",
  "who": [
    "Candidates with lower CRS scores seeking alternatives",
    "Applicants open to regional settlement and community-based routes",
    "Professionals whose occupations match participating community needs",
    "Families planning long-term relocation outside major Canadian cities"
  ],
  "requirements": [
    "Eligible work experience or qualifying education depending on program rules",
    "Community or employer alignment where required",
    "Language results meeting program thresholds",
    "Settlement funds and intent to live in the community",
    "Complete proof of experience, education and identity"
  ],
  "process": [
    "Assess profile against RCIP and regional criteria",
    "Map suitable communities and occupation demand",
    "Prepare employer/community documentation strategy",
    "Compile required IRCC and settlement documents",
    "Submit the community or PR stage according to program sequence",
    "Track updates and respond to document requests"
  ],
  "documents": [
    "Passport",
    "Language test results",
    "Education documents and ECA where required",
    "Work experience evidence",
    "Job offer or community documents where applicable",
    "Proof of funds",
    "Police clearance",
    "Medical exam"
  ],
  "cost": [
    "Costs may include language testing, document preparation, translations, medicals, PCC and government fees.",
    "If employer or community steps are required, additional document and settlement planning may be needed."
  ],
  "timeline": "Timelines depend on community intake, employer readiness, nomination or recommendation stages and IRCC processing. We explain expected milestones during assessment.",
  "mistakes": [
    "Treating RCIP as a shortcut rather than a structured pathway",
    "Ignoring community-specific requirements",
    "Weak proof of intent to settle regionally",
    "Not preparing employer and settlement documents early"
  ],
  "cta": "Explore whether RCIP is a realistic low CRS pathway for your profile.",
  "highlight": "RCIP can be valuable for lower CRS candidates, but only when the profile genuinely matches community needs and documentation is prepared with precision."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
