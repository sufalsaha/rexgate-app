import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  "title": "Study in Canada & Student Visa",
  "eyebrow": "Study Permit Advisory",
  "description": "A structured student visa service for applicants planning to Study in Canada with strong program selection, SOP strategy, financial proof and long-term PR planning.",
  "seoTitle": "Study in Canada | Student Visa & SOP Advisory UAE",
  "seoDescription": "Canada student visa guidance for UAE applicants including SOP, program selection, financial documentation and study-to-PR planning.",
  "who": [
    "Students seeking admission and a Canada student visa from UAE",
    "Professionals considering study as a long-term PR pathway",
    "Applicants needing a strong SOP and financial documentation plan",
    "Families evaluating education, cost and post-study options"
  ],
  "requirements": [
    "Letter of acceptance from a qualifying Canadian institution",
    "Clear study plan and credible career progression",
    "Sufficient funds for tuition, living expenses and travel",
    "Strong home ties and immigration history explanation where relevant",
    "Medical, biometrics and supporting identity documents"
  ],
  "process": [
    "Review education, career history and study goals",
    "Shortlist suitable programs and institutions",
    "Build SOP narrative and financial evidence plan",
    "Prepare forms, supporting documents and explanations",
    "Submit study permit application and biometrics",
    "Prepare for arrival, compliance and future PGWP or PR planning"
  ],
  "documents": [
    "Passport",
    "Letter of acceptance",
    "Academic transcripts",
    "IELTS or language proof if applicable",
    "SOP",
    "Bank statements",
    "Tuition payment proof",
    "Employment documents",
    "Family and sponsor documents"
  ],
  "cost": [
    "Costs include tuition deposit, study permit fee, biometrics, medicals, translations and living expense proof.",
    "We provide a realistic Canada immigration cost and education budget overview before application preparation."
  ],
  "timeline": "Admission timelines vary by institution. Study permit processing depends on IRCC workload, biometrics and document completeness.",
  "mistakes": [
    "Generic SOP with no academic logic",
    "Choosing a program that does not match previous education or career",
    "Weak financial trail or sudden unexplained deposits",
    "Ignoring post-study work and PR pathway planning"
  ],
  "cta": "Build a stronger Study in Canada plan before applying.",
  "highlight": "A student visa is not only about admission. The SOP, finances, program logic and future immigration pathway must work together."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
