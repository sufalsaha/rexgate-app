"use client";

import { Button } from "@/components/ui/button";

import { Menu, Phone, MessageSquare } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Logo } from "../Logo";

export function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Express Entry", href: "/services/express-entry" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
          <Logo className="scale-90 origin-left" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-secondary text-foreground/80"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
            <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              asChild
            >
              <Link href="/contact">Free Assessment</Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-2 py-1 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href="https://wa.me/971501234567"
                    className="flex items-center gap-2 text-green-600 px-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Free Assessment</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
