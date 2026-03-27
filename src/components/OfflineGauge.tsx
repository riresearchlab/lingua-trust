import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Battery, HardDrive, Gauge, Smartphone, Monitor, WifiOff } from "lucide-react";

const devices = [
  { name: "Raspberry Pi 4", icon: Cpu, ram: "4GB", storage: "32GB", perf: 87, inference: "340ms", power: "5W" },
  { name: "Android (2019)", icon: Smartphone, ram: "3GB", storage: "16GB", perf: 72, inference: "520ms", power: "3W" },
  { name: "Low-spec Laptop", icon: Monitor, ram: "4GB", storage: "64GB", perf: 94, inference: "180ms", power: "8W" },
];

const OfflineGauge = () => {
  const [selectedDevice, setSelectedDevice] = useState(0);
  const [animatedPerf, setAnimatedPerf] = useState(0);

  const device = devices[selectedDevice];

  useEffect(() => {
    setAnimatedPerf(0);
    const timer = setTimeout(() => setAnimatedPerf(device.perf), 100);
    return () => clearTimeout(timer);
  }, [selectedDevice, device.perf]);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-body mb-4">
            <WifiOff className="w-4 h-4 text-accent" />
            Interactive Demo
          </div>
          <h2 className="heading-section text-foreground mb-4">
            The "Offline-First" Gauge
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            A live dashboard simulating real-world hardware. Watch as the SLM processes complex linguistic syntax with 0% Wi-Fi signal and minimal battery drain — at the speed of need.
          </p>
        </motion.div>

        {/* Device selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {devices.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setSelectedDevice(i)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-body text-sm font-medium transition-all border ${
                i === selectedDevice
                  ? "border-accent bg-accent/10 text-foreground shadow-md"
                  : "border-border text-muted-foreground hover:border-accent/50"
              }`}
            >
              <d.icon className="w-5 h-5" />
              {d.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gauge */}
          <motion.div
            key={selectedDevice}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                <circle cx="100" cy="100" r="85" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 85}`}
                  strokeDashoffset={`${2 * Math.PI * 85 * (1 - animatedPerf / 100)}`}
                  style={{ transition: "stroke-dashoffset 1s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-heading font-bold text-foreground">{device.perf}%</span>
                <span className="text-sm font-body text-muted-foreground mt-1">Accuracy</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            key={`stats-${selectedDevice}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground">{device.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: HardDrive, label: "RAM", value: device.ram },
                { icon: HardDrive, label: "Storage", value: device.storage },
                { icon: Gauge, label: "Inference", value: device.inference },
                { icon: Battery, label: "Power", value: device.power },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 border border-border">
                  <stat.icon className="w-5 h-5 text-accent mb-2" />
                  <div className="text-xs font-body text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  <div className="text-xl font-heading font-bold text-foreground mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
            <div className="bg-muted rounded-xl p-4 border border-border">
              <p className="font-body text-sm text-muted-foreground">
                <span className="text-accent font-semibold">✓ Fully offline.</span> The system remains 100% functional during internet blackouts. Updates sync opportunistically when connectivity is available.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfflineGauge;
