import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send, Check, Eye } from "lucide-react";

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Got a project in mind? Drop a line — I respond within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              { icon: Mail, label: "Email", value: "naveenhearty77@gmail.com", href: "mailto:naveenhearty77@gmail.com" },
              { icon: Github, label: "GitHub", value: "NaveenKumar3026", href: "https://github.com/NaveenKumar3026" },
              { icon: Linkedin, label: "LinkedIn", value: "naveen-kumar", href: "https://www.linkedin.com/in/naveen-kumar-1a1b73337" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 glass-strong rounded-xl p-4 border border-border/50 hover:border-primary/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-primary/20 flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium truncate">{value}</div>
                </div>
              </a>
            ))}

            <div className="glass-strong rounded-xl p-4 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Phone</div>
                  <AnimatePresence mode="wait">
                    {showPhone ? (
                      <motion.div
                        key="num"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-sm font-mono font-semibold gradient-text"
                      >
                        +91 7305729493
                      </motion.div>
                    ) : (
                      <motion.button
                        key="btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setShowPhone(true)}
                        className="text-xs inline-flex items-center gap-1.5 text-primary hover:text-primary-glow font-semibold"
                      >
                        <Eye className="h-3 w-3" /> Show Phone Number
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-strong rounded-2xl p-6 border border-border/50 space-y-4 relative overflow-hidden"
          >
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl bg-muted/40 border border-border px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl bg-muted/40 border border-border px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-muted/40 border border-border px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="ripple-btn w-full rounded-xl bg-gradient-primary py-3 font-semibold text-primary-foreground inline-flex items-center justify-center gap-2 shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-2xl"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow"
                    >
                      <Check className="h-10 w-10 text-primary-foreground" strokeWidth={3} />
                    </motion.div>
                    <div className="text-xl font-bold gradient-text mb-1">Message Sent!</div>
                    <div className="text-sm text-muted-foreground">I'll get back to you soon.</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>

        <div className="mt-16 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Naveen Kumar — Crafted with React & Framer Motion.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
