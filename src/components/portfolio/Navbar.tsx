import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "playground", label: "Playground" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + window.innerHeight / 3;
      for (const s of sections) {
        if (!s) continue;
        if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 transition-all duration-300`}>
        <div className={`glass-strong flex items-center justify-between rounded-2xl px-5 py-3 ${scrolled ? "shadow-elegant" : ""}`}>
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Naveen<span className="gradient-text">.dev</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-gradient-primary/20 border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex ripple-btn items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            Hire Me
          </button>

          <button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 rounded-2xl p-3 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  active === l.id ? "bg-primary/20 text-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
