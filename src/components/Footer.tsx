import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 gradient-teal">
      <div className="section-container">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join the Movement
          </h2>
          <p className="text-body-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Every language saved is a worldview preserved. Partner with us to build AI that serves communities, not corporations.
          </p>
          <a
            href="mailto:hello@linguatrust.org"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-gold-shimmer text-accent-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            <Heart className="w-5 h-5" />
            Become a Partner
          </a>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body text-primary-foreground/50">
          <span>© 2026 LinguaTrust. Built for sovereignty, not scale.</span>
          <span>MIT Solve 10th Anniversary Challenge Submission</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
