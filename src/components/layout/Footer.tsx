// import { Link } from "wouter";
// import { Logo } from "@/components/Logo";
import { MapPin, Phone, Mail, X} from "lucide-react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Logo } from "../Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-8 border-t-4 border-[#C9A14A]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Logo className="scale-90 origin-left filter invert brightness-0 contrast-200" />
            <p className="text-gray-300 text-sm leading-relaxed mt-6">
              Rexgate Immigration is a premier Canada immigration advisory firm based in the UAE. We provide strategic, transparent, and structured pathways for professionals across the GCC to achieve their Canadian PR and visa goals.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><FaFacebook className="h-5 w-5" /></a>
              <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><FaTwitterSquare className="h-5 w-5" /></a>
              <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><FaInstagramSquare className="h-5 w-5" /></a>
              <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><FaLinkedin className="h-5 w-5" /></a>
              {/* <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-[#C9A14A] hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a> */}
            </div>
          </div>
          
          <div>
            <h4 className="text-[#C9A14A] font-serif font-semibold text-lg mb-6 uppercase tracking-wider text-sm">Immigration Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/services/express-entry" className="hover:text-[#C9A14A] transition-colors">Express Entry Canada</Link></li>
              <li><Link href="/services/rcip" className="hover:text-[#C9A14A] transition-colors">Rural Community Immigration (RCIP)</Link></li>
              <li><Link href="/services/pnp" className="hover:text-[#C9A14A] transition-colors">Provincial Nominee Programs (PNP)</Link></li>
              <li><Link href="/services/student-visa" className="hover:text-[#C9A14A] transition-colors">Study in Canada</Link></li>
              <li><Link href="/services/visit-visa" className="hover:text-[#C9A14A] transition-colors">Canada Tourist Visa</Link></li>
              <li><Link href="/services/entrepreneur-immigration" className="hover:text-[#C9A14A] transition-colors">Entrepreneur Immigration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A14A] font-serif font-semibold text-lg mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-[#C9A14A] transition-colors">About Rexgate</Link></li>
              <li><Link href="/blog" className="hover:text-[#C9A14A] transition-colors">Immigration News & Updates</Link></li>
              <li><Link href="/faq" className="hover:text-[#C9A14A] transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-[#C9A14A] transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#C9A14A] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-[#C9A14A] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A14A] font-serif font-semibold text-lg mb-6 uppercase tracking-wider text-sm">Contact Office</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C9A14A] shrink-0 mt-0.5" />
                <span>Office 104, Business Bay,<br/>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#C9A14A] shrink-0" />
                <a href="tel:+971501234567" className="hover:text-white transition-colors">+971 50 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C9A14A] shrink-0" />
                <a href="mailto:info@rexgateimmigration.com" className="hover:text-white transition-colors">info@rexgateimmigration.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rexgate Immigration Advisory. Serving clients since 2015. All rights reserved.</p>
          <p className="text-center md:text-right max-w-xl">
            Disclaimer: We are an independent immigration advisory firm. We do not guarantee visas. The final decision on all applications rests entirely with Immigration, Refugees and Citizenship Canada (IRCC).
          </p>
        </div>
      </div>
    </footer>
  );
}
