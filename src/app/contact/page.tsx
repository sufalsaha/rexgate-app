"use client";


import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Our team will contact you shortly." });
  };

  return (
    <div>
      <SEO title="Contact Us | Rexgate Immigration" description="Contact our Dubai office for your Canada PR assessment and immigration consultation." />
      <div className="bg-[#0B1F3A] py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Take the first step towards your Canadian dream.
        </p>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#0B1F3A] mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form to request a free assessment. Our senior immigration consultants will review your profile and get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#C9A14A] mt-1" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A]">Dubai Office</h4>
                  <p className="text-gray-600">Office 104, Business Bay<br />Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#C9A14A] mt-1" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A]">Phone</h4>
                  <p className="text-gray-600">+971 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#C9A14A] mt-1" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A]">Email</h4>
                  <p className="text-gray-600">info@rexgateimmigration.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Age</label>
                  <Input type="number" required placeholder="30" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nationality</label>
                  <Input required placeholder="Your Nationality" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input required placeholder="+971..." />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Education</label>
                  <Select required>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Experience</label>
                  <Select required>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 Years</SelectItem>
                      <SelectItem value="4-6">4-6 Years</SelectItem>
                      <SelectItem value="7+">7+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">IELTS</label>
                <Input placeholder="Overall score or planned test date" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message / Details</label>
                <Textarea rows={4} placeholder="Tell us about your goals..." />
              </div>

              <Button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#152960] text-white">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
