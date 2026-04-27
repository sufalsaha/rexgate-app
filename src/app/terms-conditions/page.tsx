import { SEO } from "@/components/SEO";


export default function TermsConditions() {
  return (
    <div>
      <SEO title="Terms & Conditions | Rexgate Immigration" description="Terms and Conditions for Rexgate Immigration Advisory." />
      <div className="bg-[#FEF2F2] py-20 text-black text-center">
        <h1 className="text-4xl font-serif font-bold">Terms & Conditions</h1>
      </div>
      <div className="container py-20 max-w-4xl">
        <div className="prose prose-blue max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <h2>2. Advisory Services</h2>
          <p>Rexgate Immigration provides immigration advisory services. We do not guarantee visa approvals as the final decision rests solely with Immigration, Refugees and Citizenship Canada (IRCC).</p>
          <h2>3. Disclaimer</h2>
          <p>The information provided on this website is for general informational purposes only and does not constitute legal advice.</p>
        </div>
      </div>
    </div>
  );
}
