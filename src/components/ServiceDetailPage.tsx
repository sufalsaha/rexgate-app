"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import {
  CheckCircle2,
  Triangle,
  Clock,
  FileText,
  WalletCards,
} from "lucide-react";
import Link from "next/link";

type ServiceDetailPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  who: string[];
  requirements: string[];
  process: string[];
  documents: string[];
  cost: string[];
  timeline: string;
  mistakes: string[];
  cta: string;
  highlight?: string;
};

export function ServiceDetailPage({
  title,
  eyebrow,
  description,
  seoTitle,
  seoDescription,
  who,
  requirements,
  process,
  documents,
  cost,
  timeline,
  mistakes,
  cta,
  highlight,
}: ServiceDetailPageProps) {
  return (
    <div>
      <SEO title={seoTitle} description={seoDescription} />
      <section className="bg-[#fff] py-20 text-black text-center mt ">
        <div className="container max-w-4xl">
          <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.28em]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-black">
            {title}
          </h1>
          <p className="mt-6 text-xl text-[#585858] leading-8">{description}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container max-w-6xl grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <aside className="space-y-6">
            <Card className="border-[#C9A14A]/30 shadow-lg">
              <CardContent className="p-7">
                <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.22em]">
                  Who it's for
                </p>
                <div className="mt-5 grid gap-4">
                  {who.map((item) => (
                    <div key={item} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#EF3340]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {highlight && (
              <div className="rounded-xl bg-[#350000] p-7 text-white shadow-xl">
                <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.22em]">
                  Advisor Note
                </p>
                <p className="mt-4 leading-7 text-blue-50">{highlight}</p>
              </div>
            )}
          </aside>
          <div className="grid gap-7">
            <DetailSection title="Requirements" items={requirements} />
            <DetailSection
              title="Step-by-step process"
              items={process}
              ordered
            />
            <DetailSection
              title="Documents required"
              items={documents}
              icon="file"
            />
            <div className="grid md:grid-cols-2 gap-7">
              <InfoPanel
                title="Cost overview"
                icon={<WalletCards className="h-6 w-6 text-[#EF3340]" />}
                items={cost}
              />
              <InfoPanel
                title="Timeline"
                icon={<Clock className="h-6 w-6 text-[#EF3340]" />}
                items={[timeline]}
              />
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50 p-7">
              <div className="flex items-center gap-3">
                <Triangle className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-serif font-bold text-[#0B1F3A]">
                  Common mistakes
                </h2>
              </div>
              <div className="mt-5 grid gap-3">
                {mistakes.map((item) => (
                  <div
                    key={item}
                    className="bg-white px-4 py-3 text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-[#350000] p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-sm font-bold text-[#EF3340] uppercase tracking-[0.22em]">
                  Next Step
                </p>
                <h2 className="mt-2 text-2xl font-serif font-bold text-white">
                  {cta}
                </h2>
              </div>
              <Button
                asChild
                className="bg-[#EF3340] hover:bg-[#d81418] text-white font-semibold"
                data-testid="button-service-assessment"
              >
                <Link href="/contact">Request Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailSection({
  title,
  items,
  ordered = false,
  icon,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
  icon?: "file";
}) {
  const ListTag = ordered ? "ol" : "div";
  return (
    <section className="rounded-xl border border-[#0B1F3A]/10 bg-[#EEF2F7]/50 p-7 shadow-sm">
      <h2 className="text-2xl font-serif font-bold text-[#0B1F3A]">{title}</h2>
      <ListTag className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex gap-3 rounded-lg bg-white p-4 text-slate-700 shadow-sm"
          >
            {ordered ? (
              <span className="font-bold text-[#EF3340]">{index + 1}.</span>
            ) : icon === "file" ? (
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#EF3340]" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#EF3340]" />
            )}
            <span>{item}</span>
          </div>
        ))}
      </ListTag>
    </section>
  );
}

function InfoPanel({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-[#0B1F3A]/10 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-2xl font-serif font-bold text-[#0B1F3A]">
          {title}
        </h2>
      </div>
      <div className="mt-5 grid gap-3 text-slate-700">
        {items.map((item) => (
          <p key={item} className="leading-7">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
