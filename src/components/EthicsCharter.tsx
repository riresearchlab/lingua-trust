import { motion } from "framer-motion";
import { ShieldOff, Home, Trash2, Coins, TreePine, ScrollText } from "lucide-react";

const pillars = [
  {
    icon: ShieldOff,
    title: "Non-Extractive by Design",
    description: "We do not scrape the web. We build datasets through intentional, compensated, and consensual partnerships. No data scraping. No surveillance capitalism.",
  },
  {
    icon: Home,
    title: "Local Ownership",
    description: "Communities own the 'Weights' of their specific language models. They are the landlords of their own digital intelligence — legally and technically.",
  },
  {
    icon: Trash2,
    title: "The Right to Be Forgotten",
    description: "At any moment, a community can vote to revoke their data, triggering an instant 'forgetting' protocol in the global model. Full data sovereignty, always.",
  },
  {
    icon: Coins,
    title: "Economic Mobility",
    description: "We transform elders and local linguists into 'Data Sovereigns.' They are paid fair-trade wages to curate and validate the AI, turning linguistic preservation into a sustainable local economy.",
  },
  {
    icon: TreePine,
    title: "Intergenerational Design",
    description: "Our code is open-source and modular, built to be maintained by the next generation of indigenous technologists — not a distant corporate office. Designed for a 100-year horizon.",
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
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-body mb-4">
            <ScrollText className="w-4 h-4 text-accent" />
            Ethics & Durable Economics
          </div>
          <h2 className="heading-section text-foreground mb-4">
            The Sovereignty Charter
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Our governance model is designed for a 100-year horizon, resisting the short-term pressures of venture capital cycles to protect the "Digital Commons." Five pillars define how we build, govern, and sustain LinguaTrust — for communities, by communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
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
