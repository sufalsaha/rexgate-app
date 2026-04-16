import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    { title: "Express Entry", desc: "Fast-track PR for skilled workers.", link: "/services/express-entry" },
    { title: "RCIP", desc: "Rural Community Immigration Pilot.", link: "/services/rcip" },
    { title: "Provincial Nominee (PNP)", desc: "Province-specific PR pathways.", link: "/services/pnp" },
    { title: "Student Visa", desc: "Study in Canada & pathway to PR.", link: "/services/student-visa" },
    { title: "Visit Visa", desc: "Canada tourist visa services.", link: "/services/visit-visa" },
    { title: "Super Visa", desc: "Long-term visa for parents & grandparents.", link: "/services/super-visa" },
    { title: "Entrepreneur Immigration", desc: "Start a business in Canada.", link: "/services/entrepreneur-immigration" },
    { title: "ICT Work Permit", desc: "Intra-Company Transfer work permits.", link: "/services/ict-work-permit" },
  ];

  return (
    <div>
      <SEO title="Our Services | Rexgate Immigration" description="Explore our Canada immigration services including Express Entry, PNP, Student Visas, and more." />
      <div className="bg-[#0B1F3A] py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Immigration Services</h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Comprehensive pathways for Canada PR, Work, Study, and Visit visas.
        </p>
      </div>
      
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={i} className="group hover:border-[#1E3A8A] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-3 group-hover:text-[#1E3A8A]">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.desc}</p>
                <Link href={s.link} className="inline-flex items-center text-sm font-bold text-[#C9A14A] hover:text-[#b08b3a] uppercase tracking-wider">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
