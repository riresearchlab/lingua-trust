import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Lock, Server, ShieldCheck, Wifi, WifiOff, Cpu, Zap, Radio, ArrowDownToLine } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    label: "Local Node",
    description: "A community-owned device (e.g., a Raspberry Pi) collects voice samples and text. All data stays on this hardware.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Cpu,
    label: "On-Device Training",
    description: "The model learns patterns locally. No raw audio or text ever leaves the hardware — only the knowledge of the pattern, never the content.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Lock,
    label: "Encrypted Updates",
    description: "Only mathematical 'weight updates' are encrypted and sent to the global server. The raw cultural data never crosses a border or enters a cloud.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Server,
    label: "Global Refinement",
    description: "The global model improves by aggregating encrypted updates and sends the smarter 'brain' back to the village. Zero raw data exchanged.",
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
          className="text-center mb-6"
        >
          <h2 className="heading-section text-primary-foreground mb-4">
            The "Data Stays Home" Architecture
          </h2>
          <p className="text-body-lg text-primary-foreground/70 max-w-3xl mx-auto">
            We have re-engineered the standard AI training pipeline to prioritize privacy over central aggregation. Our technical framework ensures that sensitive cultural data never crosses a border or enters a cloud.
          </p>
        </motion.div>

        {/* Interactive prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground/50 font-body text-sm mb-8 italic"
        >
          Toggle the switch to see how your voice is transformed into an anonymous mathematical vector before leaving your hand.
        </motion.p>

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

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 mb-6 text-center"
        >
          <h3 className="font-heading text-2xl font-semibold text-primary-foreground mb-2">
            Technical Specifications
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {[
            { icon: ShieldCheck, label: "Zero-Cloud Dependency", value: "100%" },
            { icon: Zap, label: "Power Consumption", value: "< 10W" },
            { icon: Cpu, label: "Hardware Agnostic", value: "ARM64" },
            { icon: Lock, label: "Encryption Standard", value: "AES-256" },
            { icon: Radio, label: "Translation Latency", value: "< 100ms" },
          ].map((spec) => (
            <div key={spec.label} className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/10">
              <spec.icon className="w-5 h-5 text-accent mx-auto mb-2" />
              <div className="text-xl font-heading font-bold text-primary-foreground">{spec.value}</div>
              <div className="text-xs font-body text-primary-foreground/50 mt-1">{spec.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Additional spec details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
            <h4 className="font-heading text-sm font-bold text-accent mb-2 uppercase tracking-wider">Compute Efficiency</h4>
            <p className="text-sm font-body text-primary-foreground/60">Optimized to run on &lt; 10W of power — fully compatible with small-scale solar arrays in off-grid communities.</p>
          </div>
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
            <h4 className="font-heading text-sm font-bold text-accent mb-2 uppercase tracking-wider">Hardware Agnostic</h4>
            <p className="text-sm font-body text-primary-foreground/60">High-performance inference on 5-year-old Android devices and low-spec ARM processors. No specialized hardware needed.</p>
          </div>
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
            <h4 className="font-heading text-sm font-bold text-accent mb-2 uppercase tracking-wider">Speed of Need</h4>
            <p className="text-sm font-body text-primary-foreground/60">Sub-100ms latency for real-time speech-to-speech translation without a satellite connection.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FederatedLearningSection;
