import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Search, Mail, Rocket } from "lucide-react";
import Modal from "./Modal";

const projects = [
  {
    icon: Shield,
    title: "ShieldAI",
    tag: "AI · Digital Safety",
    color: "from-blue-500 to-cyan-400",
    short: "AI-powered digital protection platform that detects scams, hidden fees, and fraud.",
    problem: "Everyday users are flooded with scams, shady contracts, fake job offers, and suspicious websites — they need a single tool that gives them a clear verdict.",
    features: ["Scam Detection", "Website Verification", "Contract Analysis", "Job Offer Validation", "Fraud Detection", "Hidden Fee Detection", "AI-Powered Explanations"],
    stack: ["React", "Node.js", "TruthLens AI", "Generative AI", "MongoDB"],
  },
  {
    icon: Search,
    title: "TruthLens",
    tag: "AI Engine",
    color: "from-violet-500 to-fuchsia-500",
    short: "The intelligence engine behind digital trust — an AI investigator for any content.",
    problem: "Emails, PDFs, contracts, screenshots and websites hide risks the average reader can't see. TruthLens turns any input into a transparent trust report.",
    features: ["Risk Analysis", "Content Investigation", "Trust Scoring", "Document Understanding", "Security Insights"],
    stack: ["Node.js", "Generative AI", "Prompt Engineering", "OCR", "Express"],
  },
  {
    icon: Mail,
    title: "AI MailForge",
    tag: "Productivity · AI",
    color: "from-emerald-400 to-teal-500",
    short: "AI-powered email generation for business, support, and formal communication.",
    problem: "Professionals waste hours writing the same kinds of emails — MailForge generates tone-perfect drafts in seconds.",
    features: ["Smart Email Generation", "Tone Customization", "Professional Templates", "Productivity Workflows"],
    stack: ["React", "Node.js", "OpenAI API", "Tailwind"],
  },
  {
    icon: Rocket,
    title: "CosmicMind",
    tag: "Space · Dream Project",
    color: "from-amber-500 to-orange-500",
    short: "An interactive universe explorer — discover celestial objects and astronomical wonders.",
    problem: "A personal dream project inspired by my fascination with the universe. CosmicMind makes space curiosity-driven, interactive, and beautiful.",
    features: ["Celestial Object Explorer", "Astronomical Data", "Interactive Visuals", "Curiosity-Driven UX"],
    stack: ["React", "NASA APIs", "Three.js", "Tailwind"],
  },
];

const Projects = () => {
  const [active, setActive] = useState<number | null>(null);
  const p = active !== null ? projects[active] : null;

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Startup-level products solving real-world problems with AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((proj, i) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${proj.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />
                <div className="relative glass-strong rounded-2xl p-6 h-full flex flex-col border border-border/50 group-hover:border-primary/40 transition-colors">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${proj.color} flex items-center justify-center mb-4 shadow-glow`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{proj.tag}</div>
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 flex-1">{proj.short}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.stack.slice(0, 4).map((s) => (
                      <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActive(i)}
                      className="ripple-btn flex-1 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:shadow-glow transition-shadow"
                    >
                      View Details
                    </button>
                    <a
                      href="https://github.com/NaveenKumar3026"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg glass border border-border h-9 w-9 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Modal open={active !== null} onClose={() => setActive(null)} title={p?.title}>
        {p && (
          <div className="space-y-5">
            <div className={`h-32 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <p.icon className="h-14 w-14 text-white drop-shadow-lg" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">Problem solved</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Features</h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Tech stack</h4>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-lg glass border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <button className="ripple-btn flex-1 rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground inline-flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </button>
              <a
                href="https://github.com/NaveenKumar3026"
                target="_blank"
                rel="noreferrer"
                className="ripple-btn rounded-xl glass border border-border px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 hover:border-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
