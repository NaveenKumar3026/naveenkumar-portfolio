import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Github, Linkedin, FileText } from "lucide-react";

const phrases = ["AI-Powered Products", "Full Stack Apps", "Cyber-Safety Tools", "Space-Tech Experiences"];

const Typewriter = () => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % phrases.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="gradient-text font-bold">
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
    </span>
  );
};

const CodeCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="relative"
  >
    <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-3xl animate-glow-pulse" />
    <div className="relative glass-strong rounded-2xl shadow-elegant overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-destructive/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs font-mono text-muted-foreground">developer.tsx</span>
      </div>
      <div className="p-6 font-mono text-[13px] sm:text-sm leading-7">
        <div><span className="text-secondary">const</span> <span className="text-accent">developer</span> <span className="text-muted-foreground">=</span> {"{"}</div>
        <div className="pl-5"><span className="text-primary-glow">name</span><span className="text-muted-foreground">:</span> <span className="text-green-400">'Naveen Kumar'</span>,</div>
        <div className="pl-5"><span className="text-primary-glow">role</span><span className="text-muted-foreground">:</span> <span className="text-green-400">'AI &amp; Full Stack Developer'</span>,</div>
        <div className="pl-5"><span className="text-primary-glow">focus</span><span className="text-muted-foreground">:</span> [<span className="text-green-400">'AI'</span>, <span className="text-green-400">'Cyber Safety'</span>, <span className="text-green-400">'Space Tech'</span>],</div>
        <div className="pl-5"><span className="text-primary-glow">mission</span><span className="text-muted-foreground">:</span> <span className="text-green-400">'Solve real-world problems'</span>,</div>
        <div className="pl-5"><span className="text-primary-glow">available</span><span className="text-muted-foreground">:</span> <span className="text-yellow-400">true</span>,</div>
        <div>{"};"}</div>
        <div className="h-3" />
        <div><span className="text-secondary">await</span> <span className="text-accent">developer</span>.<span className="text-primary-glow">build</span>(<span className="text-green-400">'the future'</span>);</div>
        <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Deployed successfully
        </div>
      </div>
    </div>
  </motion.div>
);

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">Available for new projects</span>
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Building <span className="gradient-text">AI-Powered</span> <br />
            Solutions for Real-World Problems
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground font-medium">
            Naveen Kumar · AI Developer · Full Stack Developer · Problem Solver · Future Startup Founder
          </p>

          <div className="text-xl sm:text-2xl font-semibold min-h-[2.5rem]">
            I build <Typewriter />
          </div>

          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            Passionate about Artificial Intelligence, Full Stack Development, Cyber Safety, and Space Technology — transforming ambitious ideas into impactful products.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/NaveenKumar3026"
              target="_blank"
              rel="noreferrer"
              className="ripple-btn group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-glow hover:shadow-glow-purple hover:scale-105 transition-all"
            >
              <FileText className="h-4 w-4" /> View Resume
            </a>
            <a
              href="https://github.com/NaveenKumar3026"
              target="_blank"
              rel="noreferrer"
              className="ripple-btn inline-flex items-center gap-2 rounded-xl glass border border-primary/30 px-5 py-2.5 font-semibold hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-kumar-1a1b73337"
              target="_blank"
              rel="noreferrer"
              className="ripple-btn inline-flex items-center gap-2 rounded-xl glass border border-primary/30 px-5 py-2.5 font-semibold hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="ripple-btn inline-flex items-center gap-2 rounded-xl glass border border-primary/30 px-5 py-2.5 font-semibold hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Mail className="h-4 w-4" /> Contact Me
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </motion.div>

        <CodeCard />
      </div>
    </section>
  );
};

export default Hero;
