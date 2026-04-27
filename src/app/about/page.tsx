import { SEO } from "@/components/SEO";
// import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Target, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <SEO 
        title="About Us | Rexgate Immigration" 
        description="Rexgate Immigration is a premier Canada immigration advisory firm based in the UAE. We provide transparent and structured pathways." 
      />
      <div className="bg-[#fff] py-20 text-black text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">About Rexgate Immigration</h1>
        <p className="mt-4 text-xl text-[#585858] max-w-2xl mx-auto">
          Strategic, transparent, and built for results. Serving professionals in the UAE & GCC since 2015.
        </p>
      </div>
      
      <div className="container py-20 space-y-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#0B1F3A] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Rexgate Immigration, we believe that immigrating to Canada should be a strategic decision, not a gamble. Our mission is to provide transparent, data-driven, and structured pathways for professionals, students, and entrepreneurs looking to build their future in Canada.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 10 years of experience navigating IRCC updates and complex immigration policies, we've built a reputation for excellence, integrity, and results. We don't just process applications—we build comprehensive strategies.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded shadow-sm border-t-4 border-[#C9A14A]">
                <div className="text-4xl font-bold text-[#0B1F3A]">10+</div>
                <div className="text-sm text-gray-500 uppercase mt-2">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded shadow-sm border-t-4 border-[#1E3A8A]">
                <div className="text-4xl font-bold text-[#0B1F3A]">2.5k+</div>
                <div className="text-sm text-gray-500 uppercase mt-2">Success Stories</div>
              </div>
              <div className="text-center p-6 bg-white rounded shadow-sm border-t-4 border-[#1E3A8A]">
                <div className="text-4xl font-bold text-[#0B1F3A]">100%</div>
                <div className="text-sm text-gray-500 uppercase mt-2">Transparency</div>
              </div>
              <div className="text-center p-6 bg-white rounded shadow-sm border-t-4 border-[#C9A14A]">
                <div className="text-4xl font-bold text-[#0B1F3A]">UAE</div>
                <div className="text-sm text-gray-500 uppercase mt-2">Headquarters</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif font-bold text-center text-[#0B1F3A] mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <ShieldCheck className="w-12 h-12 mx-auto text-[#EF3340] mb-4" />
                <h3 className="font-bold text-lg mb-2">Integrity</h3>
                <p className="text-sm text-gray-600">No false promises. We give you a realistic assessment of your chances.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto text-[#EF3340] mb-4" />
                <h3 className="font-bold text-lg mb-2">Strategy</h3>
                <p className="text-sm text-gray-600">Data-driven approaches to maximize your CRS score and profile strength.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto text-[#EF3340] mb-4" />
                <h3 className="font-bold text-lg mb-2">Knowledge</h3>
                <p className="text-sm text-gray-600">Constant monitoring of IRCC updates, draws, and policy changes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto text-[#EF3340] mb-4" />
                <h3 className="font-bold text-lg mb-2">Client Focus</h3>
                <p className="text-sm text-gray-600">Dedicated support throughout your entire immigration journey.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative bg-[#0B0A0A] text-white p-12 rounded-xl text-center space-y-6">
 <div 
        className="absolute inset-0 opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(159,0,0,0.6) 0%, rgba(0,0,0,1) 100%)'
        }}
      ></div>
          <div className="relative">
            <h2 className="text-3xl font-serif font-bold">Ready to take the next step?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Book a consultation with our experts to discuss your Canada PR or Visa options.
          </p>
          <Button size="lg" className="bg-[#EF3340] hover:bg-[#d81418] text-white mt-4" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
