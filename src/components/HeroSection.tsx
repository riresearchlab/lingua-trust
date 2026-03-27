import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden weave-pattern">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-body mb-6">
              <Shield className="w-4 h-4 text-accent" />
              MIT Solve 10th Anniversary Challenge
            </div>

            <h1 className="heading-display text-foreground mb-6">
              Our Voices, Our Future:{" "}
              <span className="text-secondary">AI Owned by the People</span>{" "}
              Who Speak It.
            </h1>

            <p className="text-body-lg text-muted-foreground mb-10 max-w-xl">
              LinguaTrust creates Small Language Models (SLMs) that live on-device and stay offline, protecting Indigenous knowledge from digital extraction.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#ethics"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-gold-shimmer text-accent-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                See the Ethics Charter
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#technology"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-body font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Explore the SLM Specs
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="A young Indigenous person and an elder sharing knowledge through a tablet with a localized AI interface"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg font-body text-sm font-medium"
            >
              🔒 Zero-Cloud Dependency
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 md:-right-8 bg-accent text-accent-foreground px-5 py-3 rounded-xl shadow-lg font-body text-sm font-medium"
            >
              ⚡ &lt; 10W Power
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
