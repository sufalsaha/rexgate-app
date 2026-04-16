import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971501234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-7 h-7" />
    </a>
  );
}
