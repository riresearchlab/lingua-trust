import { useState } from "react";
import { motion } from "framer-motion";
import { Vote, CheckCircle2, XCircle, Users, Clock, Shield } from "lucide-react";

interface Proposal {
  id: number;
  title: string;
  description: string;
  type: "commercial" | "educational";
  votesFor: number;
  votesAgainst: number;
  totalEligible: number;
  status: "active" | "approved" | "rejected";
  deadline: string;
}

const initialProposals: Proposal[] = [
  {
    id: 1,
    title: "Share agricultural terminology dataset with university researchers",
    description: "Proposed use: Educational research on climate adaptation vocabulary in Zapotec languages.",
    type: "educational",
    votesFor: 12,
    votesAgainst: 2,
    totalEligible: 18,
    status: "active",
    deadline: "5 days remaining",
  },
  {
    id: 2,
    title: "License medicinal plant names for pharmaceutical company glossary",
    description: "Proposed use: Commercial product labeling with proper attribution and royalty agreement.",
    type: "commercial",
    votesFor: 3,
    votesAgainst: 11,
    totalEligible: 18,
    status: "active",
    deadline: "12 days remaining",
  },
  {
    id: 3,
    title: "Contribute oral histories to UNESCO preservation archive",
    description: "Proposed use: Non-commercial cultural heritage documentation with full community credit.",
    type: "educational",
    votesFor: 16,
    votesAgainst: 1,
    totalEligible: 18,
    status: "approved",
    deadline: "Completed",
  },
];

const GovernanceVoting = () => {
  const [proposals, setProposals] = useState(initialProposals);

  const castVote = (id: number, isFor: boolean) => {
    setProposals((prev) =>
      prev.map((p) => {
        if (p.id !== id || p.status !== "active") return p;
        return {
          ...p,
          votesFor: isFor ? p.votesFor + 1 : p.votesFor,
          votesAgainst: !isFor ? p.votesAgainst + 1 : p.votesAgainst,
        };
      })
    );
  };

  return (
    <section id="governance" className="py-24 md:py-32 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-body mb-4">
            <Shield className="w-4 h-4 text-accent" />
            Interactive Demo
          </div>
          <h2 className="heading-section text-foreground mb-4">
            Community Consent Portal
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Tribal elders and community members vote on how datasets are used. Every decision is transparent, revocable, and sovereign.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {proposals.map((proposal, i) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl border border-border p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${
                        proposal.type === "educational"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {proposal.type === "educational" ? "📚 Educational" : "💼 Commercial"}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${
                        proposal.status === "approved"
                          ? "bg-accent/20 text-accent-foreground"
                          : proposal.status === "rejected"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {proposal.status === "active" ? "🗳️ Voting" : proposal.status === "approved" ? "✅ Approved" : "❌ Rejected"}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{proposal.title}</h3>
                  <p className="text-sm font-body text-muted-foreground mt-1">{proposal.description}</p>
                </div>
              </div>

              {/* Vote bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-body text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-accent" /> {proposal.votesFor} For</span>
                  <span className="flex items-center gap-1"><XCircle className="w-3 h-3 text-destructive" /> {proposal.votesAgainst} Against</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden flex">
                  <div
                    className="gradient-gold-shimmer transition-all duration-500"
                    style={{ width: `${(proposal.votesFor / proposal.totalEligible) * 100}%` }}
                  />
                  <div
                    className="bg-destructive transition-all duration-500"
                    style={{ width: `${(proposal.votesAgainst / proposal.totalEligible) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs font-body text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {proposal.votesFor + proposal.votesAgainst}/{proposal.totalEligible} voted</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {proposal.deadline}</span>
                </div>
              </div>

              {/* Vote buttons */}
              {proposal.status === "active" && (
                <div className="flex gap-3">
                  <button
                    onClick={() => castVote(proposal.id, true)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-accent text-accent-foreground font-body font-medium text-sm hover:bg-accent/10 transition-colors"
                  >
                    <Vote className="w-4 h-4" /> Approve
                  </button>
                  <button
                    onClick={() => castVote(proposal.id, false)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-destructive text-destructive font-body font-medium text-sm hover:bg-destructive/10 transition-colors"
                  >
                    <XCircle className="w-4 h-4" /> Deny
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceVoting;
