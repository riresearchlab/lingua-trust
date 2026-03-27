import { motion } from "framer-motion";
import { ShieldOff, Home, Trash2, Coins, TreePine } from "lucide-react";

const pillars = [
  {
    icon: ShieldOff,
    title: "Non-Extractive",
    description: "No data scraping. No surveillance capitalism. Our models learn from patterns, not from hoarding personal information.",
  },
  {
    icon: Home,
    title: "Local Ownership",
    description: "Communities own the weights of their model. The AI that speaks your language belongs to your people — legally and technically.",
  },
  {
    icon: Trash2,
    title: "Right to Be Forgotten",
    description: "Instant data revocation by the community. If a community decides to withdraw, their contribution is fully purged.",
  },
  {
    icon: Coins,
    title: "Economic Mobility",
    description: "Local linguists and elders are paid as 'Data Sovereigns' — compensated fairly for their irreplaceable expertise.",
  },
  {
    icon: TreePine,
    title: "Intergenerational Design",
    description: "Built for 100 years, not a 2-year VC cycle. Our architecture prioritizes durability, low maintenance, and community succession.",
  },
];

const EthicsCharter = () => {
  return (
    <section id="ethics" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-4">
            The Sovereignty Charter
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Five pillars that define how we build, govern, and sustain LinguaTrust — for communities, by communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 border border-border bg-card hover:shadow-xl transition-shadow ${
                i === pillars.length - 1 && pillars.length % 3 !== 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-2xl gradient-gold-shimmer flex items-center justify-center mb-6 shadow-lg">
                <pillar.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicsCharter;
