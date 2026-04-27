import { SEO } from "@/components/SEO";


export default function PrivacyPolicy() {
  return (
    <div>
      <SEO title="Privacy Policy | Rexgate Immigration" description="Privacy Policy for Rexgate Immigration Advisory." />
      <div className="bg-[#fff] py-20 text-black text-center">
        <h1 className="text-4xl font-serif font-bold">Privacy Policy</h1>
      </div>
      <div className="container py-20 max-w-4xl">
        <div className="prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>At Rexgate Immigration, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          <h2>2. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes name, email, phone number, and immigration-related details.</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below, such as providing immigration assessment services.</p>
        </div>
      </div>
    </div>
  );
}
