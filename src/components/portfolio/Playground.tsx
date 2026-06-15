import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, FileText, Sparkles, Brain } from "lucide-react";
import Modal from "./Modal";

const BMIWidget = () => {
  const [h, setH] = useState(170);
  const [w, setW] = useState(65);
  const bmi = +(w / ((h / 100) ** 2)).toFixed(1);
  const cat =
    bmi < 18.5 ? { label: "Underweight", color: "text-blue-400" } :
    bmi < 25 ? { label: "Healthy", color: "text-green-400" } :
    bmi < 30 ? { label: "Overweight", color: "text-yellow-400" } :
    { label: "Obese", color: "text-red-400" };

  return (
    <div className="space-y-5">
      <div>
        <label className="flex justify-between text-sm mb-2">
          <span>Height</span><span className="font-mono">{h} cm</span>
        </label>
        <input type="range" min="120" max="220" value={h} onChange={(e) => setH(+e.target.value)} className="w-full accent-primary" />
      </div>
      <div>
        <label className="flex justify-between text-sm mb-2">
          <span>Weight</span><span className="font-mono">{w} kg</span>
        </label>
        <input type="range" min="30" max="180" value={w} onChange={(e) => setW(+e.target.value)} className="w-full accent-primary" />
      </div>
      <div className="text-center py-6 rounded-xl bg-gradient-primary/10 border border-primary/20">
        <div className="text-5xl font-extrabold gradient-text mb-1">{bmi}</div>
        <div className={`text-sm font-bold uppercase tracking-wider ${cat.color}`}>{cat.label}</div>
      </div>
    </div>
  );
};

const NotesWidget = () => {
  const [text, setText] = useState("");
  const [out, setOut] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const summarize = () => {
    setLoading(true);
    setOut(null);
    setTimeout(() => {
      const s = text.trim().split(/\s+/).filter(Boolean);
      const summary = s.length === 0
        ? "Add some text to summarize."
        : `Summary: discusses ${s.slice(0, 5).join(", ")}${s.length > 5 ? "..." : ""}. Key topic identified with ${s.length} words analyzed.`;
      setOut(summary);
      setLoading(false);
    }, 900);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your notes here and let AI summarize..."
        rows={5}
        className="w-full rounded-xl glass border border-border p-3 text-sm focus:border-primary focus:outline-none resize-none"
      />
      <button
        onClick={summarize}
        disabled={loading}
        className="ripple-btn w-full rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground inline-flex items-center justify-center gap-2 hover:shadow-glow disabled:opacity-50"
      >
        <Brain className="h-4 w-4" /> {loading ? "Analyzing..." : "Generate Summary"}
      </button>
      {out && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-gradient-primary/10 border border-primary/20 p-4"
        >
          <div className="flex items-center gap-1.5 text-primary text-xs font-bold mb-2">
            <Sparkles className="h-3 w-3" /> AI OUTPUT
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{out}</p>
        </motion.div>
      )}
    </div>
  );
};

const tools = [
  { icon: Calculator, title: "BMI Calculator", desc: "Interactive health metric tool", color: "from-emerald-400 to-teal-500", widget: <BMIWidget /> },
  { icon: FileText, title: "AI Notes Summarizer", desc: "Mock AI summary in real time", color: "from-violet-500 to-fuchsia-500", widget: <NotesWidget /> },
];

const Playground = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="playground" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-3">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Try it yourself
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Interactive <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Mini-tools that demo what I build — click to try.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {tools.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setOpen(i)}
                className="group relative text-left"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${t.color} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity`} />
                <div className="relative glass-strong rounded-2xl p-6 border border-border/50 group-hover:border-primary/40 transition-colors">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-4 shadow-glow`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                  <div className="mt-4 text-xs font-mono text-primary group-hover:translate-x-1 transition-transform">→ Launch tool</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <Modal open={open !== null} onClose={() => setOpen(null)} title={open !== null ? tools[open].title : ""}>
        {open !== null && tools[open].widget}
      </Modal>
    </section>
  );
};

export default Playground;
