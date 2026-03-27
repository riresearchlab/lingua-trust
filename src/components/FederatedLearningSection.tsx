import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Lock, Server, ShieldCheck, Wifi, WifiOff, Cpu, Zap } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    label: "Local Training",
    description: "The SLM trains on-device using community data. Voice, text, and cultural context never leave the village.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Lock,
    label: "Encryption",
    description: "Only encrypted model weight updates are prepared for sharing — never raw data.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Server,
    label: "Federated Aggregation",
    description: "A coordinator averages encrypted updates from multiple communities to improve the global model.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: ShieldCheck,
    label: "Data Stays Home",
    description: "Communities receive improved model weights. No personal data ever leaves. Full sovereignty preserved.",
    color: "bg-secondary text-secondary-foreground",
  },
];

const FederatedLearningSection = () => {
  const [federated, setFederated] = useState(true);

  return (
    <section id="technology" className="py-24 md:py-32 gradient-teal relative overflow-hidden">
      <div className="absolute inset-0 weave-pattern opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-primary-foreground mb-4">
            Private Federated Learning
          </h2>
          <p className="text-body-lg text-primary-foreground/70 max-w-2xl mx-auto">
            See how our models learn without extracting data. Toggle between federated and traditional approaches.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-primary-foreground/10 p-1 backdrop-blur-sm">
            <button
              onClick={() => setFederated(true)}
              className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-all ${
                federated
                  ? "gradient-gold-shimmer text-accent-foreground shadow-lg"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              <WifiOff className="w-4 h-4 inline mr-2" />
              Federated (Ours)
            </button>
            <button
              onClick={() => setFederated(false)}
              className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-all ${
                !federated
                  ? "bg-destructive text-destructive-foreground shadow-lg"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              <Wifi className="w-4 h-4 inline mr-2" />
              Traditional (Big Tech)
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {federated ? (
            <motion.div
              key="federated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-4 gap-6"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 h-full">
                    <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-body text-accent font-bold uppercase tracking-wider mb-2">
                      Step {i + 1}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">
                      {step.label}
                    </h3>
                    <p className="text-sm font-body text-primary-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-accent text-2xl">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="traditional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-destructive/20 backdrop-blur-sm rounded-2xl p-8 border border-destructive/30 text-center">
                <Wifi className="w-16 h-16 text-destructive mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                  Traditional Cloud Approach
                </h3>
                <div className="space-y-4 text-primary-foreground/70 font-body text-left">
                  <p>❌ All raw voice data uploaded to corporate servers</p>
                  <p>❌ Community has no control over how data is used</p>
                  <p>❌ Models trained on extracted cultural knowledge</p>
                  <p>❌ Requires constant internet connectivity</p>
                  <p>❌ Profits flow to Silicon Valley, not to communities</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Specs bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: ShieldCheck, label: "Zero-Cloud Dependency", value: "100%" },
            { icon: Zap, label: "Power Consumption", value: "< 10W" },
            { icon: Cpu, label: "Runs on Raspberry Pi", value: "ARM64" },
            { icon: Lock, label: "Encryption Standard", value: "AES-256" },
          ].map((spec) => (
            <div key={spec.label} className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/10">
              <spec.icon className="w-5 h-5 text-accent mx-auto mb-2" />
              <div className="text-xl font-heading font-bold text-primary-foreground">{spec.value}</div>
              <div className="text-xs font-body text-primary-foreground/50 mt-1">{spec.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FederatedLearningSection;
