import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const data = {
  "title": "Canada Tourist Visa",
  "eyebrow": "Visitor Visa Strategy",
  "description": "Canada tourist visa advisory for UAE and GCC residents focused on clear travel purpose, financial evidence, home ties and documentation consistency.",
  "seoTitle": "Canada Tourist Visa from UAE | Visitor Visa Advisory",
  "seoDescription": "Canada tourist visa documentation strategy for UAE residents including purpose of visit, ties, finances, travel history and refusal risk review.",
  "who": [
    "UAE residents planning tourism, family visits or short business travel",
    "Applicants with previous refusals needing documentation review",
    "Families applying together for Canada visa travel",
    "Visitors who need a clear invitation, itinerary and financial file"
  ],
  "requirements": [
    "Valid passport and UAE residence status where applicable",
    "Clear purpose of visit and travel itinerary",
    "Proof of funds and stable income",
    "Evidence of ties to UAE or home country",
    "Invitation documents if visiting family or friends"
  ],
  "process": [
    "Review travel purpose and refusal risk factors",
    "Prepare documentation checklist and evidence strategy",
    "Draft explanations and travel plan where needed",
    "Complete forms and upload supporting documents",
    "Submit biometrics and monitor IRCC updates",
    "Prepare for passport request or further documents"
  ],
  "documents": [
    "Passport",
    "UAE residence visa",
    "Employment letter",
    "Bank statements",
    "Travel history",
    "Invitation letter",
    "Itinerary",
    "Family documents",
    "Property or business proof where relevant"
  ],
  "cost": [
    "Costs include visa fee, biometrics, translations, travel insurance where used and supporting document preparation.",
    "We explain expected Canada visa expenses based on applicant count and case complexity."
  ],
  "timeline": "Visitor visa processing varies by IRCC office, season and biometrics status. Early preparation is recommended before booking non-refundable travel.",
  "mistakes": [
    "Submitting generic itineraries with no evidence",
    "Weak proof of employment or income",
    "Ignoring prior refusal reasons",
    "Not showing strong return ties"
  ],
  "cta": "Prepare a stronger Canada tourist visa file before submission.",
  "highlight": "Visitor visa success depends on credibility. The file must explain why you are visiting, how you will fund the trip and why you will return."
};

export default function Page() {
  return <ServiceDetailPage {...data} />;
}
