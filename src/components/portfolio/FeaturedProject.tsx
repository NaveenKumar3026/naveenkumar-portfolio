import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, FileText, Search, Zap, Upload, Shield, Brain, AlertTriangle, Link2, Briefcase } from "lucide-react";
import Modal from "./Modal";

const FeaturedProject = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-4">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Spotlight <span className="gradient-text">Project</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-2xl opacity-50 animate-glow-pulse" />
          <div className="relative gradient-border p-8 sm:p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-4">
                  <Shield className="h-3 w-3" /> FLAGSHIP PROJECT
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                  ShieldAI <br />
                  <span className="gradient-text">Digital Protection Platform</span>
                </h3>
                <p className="text-sm font-mono text-primary mb-3">Powered by TruthLens AI</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  ShieldAI helps users identify scams, analyze contracts, detect hidden fees, verify suspicious websites, validate job offers, and simplify complex documents — instantly.
                </p>

                <ul className="space-y-2 mb-6 text-sm">
                  {[
                    { icon: AlertTriangle, t: "Scam & fraud detection" },
                    { icon: Link2, t: "Website verification" },
                    { icon: FileText, t: "Contract & fee analysis" },
                    { icon: Briefcase, t: "Job offer validation" },
                  ].map(({ icon: Icon, t }, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-7 w-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setOpen(true)}
                    className="ripple-btn inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </button>
                  <a
                    href="https://github.com/NaveenKumar3026"
                    target="_blank"
                    rel="noreferrer"
                    className="ripple-btn inline-flex items-center gap-2 rounded-xl glass border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary transition-colors"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="glass-strong rounded-2xl p-5 shadow-elegant">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Link2 className="h-3.5 w-3.5" /> suspicious-offer.com</span>
                    <span className="px-2 py-0.5 rounded-full bg-destructive/20 text-destructive font-bold">HIGH RISK</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-2 rounded bg-muted/60 w-full" />
                    <div className="h-2 rounded bg-muted/60 w-5/6" />
                    <div className="h-2 rounded bg-muted/60 w-4/6" />
                  </div>
                  <div className="rounded-xl bg-gradient-primary/10 border border-primary/20 p-3 text-xs">
                    <div className="flex items-center gap-1.5 text-primary font-semibold mb-1.5">
                      <Sparkles className="h-3 w-3" /> TruthLens Verdict
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Detected 3 scam patterns, 2 hidden clauses, and impersonation of a known brand. Trust score: <span className="text-destructive font-bold">12 / 100</span>.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["#scam", "#impersonation", "#hidden-fees"].map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/20 text-secondary-glow">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="ShieldAI — Live Demo">
        <div className="space-y-5">
          <div className="rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-8 text-center">
            <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
            <p className="font-semibold mb-1">Paste a link, contract, or message</p>
            <p className="text-xs text-muted-foreground">ShieldAI will analyze it using TruthLens</p>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
              <Sparkles className="h-4 w-4" /> TruthLens Report
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The submitted job offer shows multiple red flags: unverified domain, payment-before-onboarding clause, and impersonation of a well-known brand. Recommend rejecting and reporting.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { l: "Trust Score", v: "12" },
              { l: "Risks Found", v: "5" },
              { l: "Analysis", v: "1.8s" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-3 text-center">
                <div className="text-lg font-bold gradient-text">{s.v}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default FeaturedProject;
