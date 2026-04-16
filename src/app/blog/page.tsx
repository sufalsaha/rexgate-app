import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";


export default function Blog() {
  const posts = [
    {
      title: "Canada Immigration News Today: IRCC Updates 2025",
      excerpt: "Latest developments in the Express Entry system and what it means for applicants from the UAE.",
      date: "October 15, 2024",
      category: "News"
    },
    {
      title: "Express Entry Latest Draws: Trends & Analysis",
      excerpt: "A deep dive into recent CRS cut-offs and how targeted draws are reshaping the immigration landscape.",
      date: "October 10, 2024",
      category: "Analysis"
    },
    {
      title: "Canada PR Requirements 2026: Preparing Ahead",
      excerpt: "Strategic advice on how to start building a competitive profile for future immigration targets.",
      date: "October 5, 2024",
      category: "Guide"
    }
  ];

  return (
    <div>
      <SEO title="Blog & Immigration News | Rexgate Immigration" description="Stay updated with the latest Canada immigration news, Express Entry draws, and IRCC policy changes." />
      <div className="bg-[#0B1F3A] py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Immigration Insights</h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Data-driven analysis, news, and strategic advice for your Canada PR journey.
        </p>
      </div>
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[#C9A14A] uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F3A] mb-3 leading-snug">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <Link href="#" className="text-[#1E3A8A] font-semibold text-sm hover:underline">Read Article →</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
