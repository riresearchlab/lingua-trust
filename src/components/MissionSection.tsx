import { motion } from "framer-motion";
import { Heart, Leaf, BookOpen } from "lucide-react";

const impacts = [
  {
    icon: Heart,
    title: "Health Outcomes",
    description: "Traditional medicinal knowledge preserved in local languages directly improves community health access and outcomes.",
    stat: "340+",
    statLabel: "languages with medicinal terminology at risk",
  },
  {
    icon: Leaf,
    title: "Climate Adaptation",
    description: "Traditional Ecological Knowledge (TEK) encoded in Indigenous languages holds centuries of climate adaptation strategies.",
    stat: "80%",
    statLabel: "of world's biodiversity on Indigenous lands",
  },
  {
    icon: BookOpen,
    title: "Cultural Continuity",
    description: "Every language carries unique worldviews, legal systems, and scientific observations found nowhere else.",
    stat: "1 language",
    statLabel: "dies every 2 weeks",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-6">
            Beyond Translation
          </h2>
          <p className="text-body-lg text-muted-foreground italic font-heading">
            "Language is more than communication; it is a repository of ecological, medicinal, and spiritual wisdom. When a language dies, a library burns. When it is stolen by Big Tech, a culture is colonized."
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
