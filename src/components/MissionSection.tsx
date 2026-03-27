import { motion } from "framer-motion";
import { Heart, Leaf, BookOpen, GraduationCap, Flame, AlertTriangle } from "lucide-react";

const impacts = [
  {
    icon: Heart,
    title: "Health Outcomes",
    description: "Localized AI diagnostic assistants that understand colloquial symptoms and traditional medicinal contexts, directly improving community health access.",
    stat: "340+",
    statLabel: "languages with medicinal terminology at risk",
  },
  {
    icon: Leaf,
    title: "Climate Adaptation",
    description: "Digitizing Traditional Ecological Knowledge (TEK) to track local biodiversity changes using indigenous nomenclature — centuries of climate adaptation strategies preserved.",
    stat: "80%",
    statLabel: "of world's biodiversity on Indigenous lands",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Bridging the literacy gap by providing 'Oral-First' pedagogy for children in their mother tongue before transitioning to national languages.",
    stat: "40%",
    statLabel: "of children lack education in a language they understand",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-card">
      <div className="section-container">
        {/* The Library and the Flame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-body mb-6">
            <Flame className="w-4 h-4 text-secondary" />
            The Library and the Flame
          </div>
          <h2 className="heading-section text-foreground mb-6">
            Beyond Translation
          </h2>
          <p className="text-body-lg text-muted-foreground italic font-heading mb-8">
            "Language is more than a tool for communication; it is a living repository of ecological, medicinal, and spiritual wisdom. Every unique dialect contains a specific 'code' for surviving local climate shifts and identifying indigenous flora. When a language dies, a library burns. When that language is scraped and sold by Big Tech without consent, a culture is colonized."
          </p>
        </motion.div>

        {/* The Paradox of AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  The Paradox of AI
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Modern AI thrives on data extraction, often harvesting the linguistic heritage of marginalized groups to polish corporate products that those same communities can't afford or use. LinguaTrust solves this paradox by ensuring that the power of machine learning is decoupled from the practice of data theft.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scale of Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
            The Scale of Impact
          </h3>
          <p className="text-body text-muted-foreground">
            We measure success not in "users," but in the resilience of the communities we serve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border hover:border-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl gradient-terracotta flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-heading font-bold text-secondary">{item.stat}</span>
                <span className="block text-sm text-muted-foreground font-body mt-1">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
