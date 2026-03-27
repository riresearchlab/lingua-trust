import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Technology", href: "#technology" },
  { label: "Ethics", href: "#ethics" },
  { label: "Governance", href: "#governance" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  const handleAudioToggle = () => {
    setAudioActive(!audioActive);
    if (!audioActive) {
      const utterance = new SpeechSynthesisUtterance(
        "Welcome to LinguaTrust. We build AI that is owned by the people who speak it. Navigate with your voice, or explore our mission, technology, and ethics."
      );
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    } else {
      speechSynthesis.cancel();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-heading text-xl md:text-2xl font-bold text-primary">
          Lingua<span className="text-accent">Trust</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleAudioToggle}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            aria-label={audioActive ? "Disable oral navigation" : "Enable oral navigation"}
          >
            {audioActive ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            Oral-First
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={handleAudioToggle}
            className="p-2 rounded-full bg-accent text-accent-foreground"
            aria-label="Toggle oral navigation"
          >
            {audioActive ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
