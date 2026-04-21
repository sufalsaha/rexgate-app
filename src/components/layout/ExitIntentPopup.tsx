"use client";


import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
// import { useToast } from "@/hooks/use-toast";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    toast({
      title: "Assessment Requested",
      description: "One of our senior consultants will contact you shortly.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] border-t-4 border-t-[#C9A14A]" aria-describedby="exit-desc">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-[#0B1F3A] dark:text-white">Leaving so soon?</DialogTitle>
          <DialogDescription className="text-base mt-2" aria-describedby="exit-desc">
            Don't miss your chance for a <span className="font-semibold text-[#0B1F3A] dark:text-white">Free Canada PR Assessment</span>. Discover your CRS score and eligibility today.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="exit-name" className="text-sm font-medium">Full Name</label>
              <Input id="exit-name" required placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="exit-phone" className="text-sm font-medium">Phone (UAE)</label>
              <Input id="exit-phone" required placeholder="+971 5X XXX XXXX" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="exit-email" className="text-sm font-medium">Email Address</label>
            <Input id="exit-email" type="email" required placeholder="john@example.com" />
          </div>
          <Button type="submit" className="w-full bg-[#C9A14A] hover:bg-[#b08b3a] text-white font-semibold text-lg py-6 mt-4">
            Get My Free Assessment
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            No commitment required. 100% confidential.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
