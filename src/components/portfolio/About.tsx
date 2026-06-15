import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Code2, BookOpen } from "lucide-react";

const stats = [
  { icon: Rocket, label: "Projects Built", value: 10, suffix: "+" },
  { icon: Code2, label: "Technologies Used", value: 18, suffix: "+" },
  { icon: BookOpen, label: "Learning Hours", value: 300, suffix: "+" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const dur = 1500;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(p * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
};

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI Developer · Full Stack Engineer · Problem Solver · Future Startup Founder. I build AI-powered products that solve real-world problems and ship to actual users.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-strong rounded-2xl p-5 text-center border border-border/50 hover:border-primary/40 transition-colors"
              >
                <div className="h-10 w-10 mx-auto rounded-xl bg-gradient-primary/20 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-extrabold gradient-text mb-1">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
