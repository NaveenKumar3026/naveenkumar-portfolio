import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench, Code, Brain } from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { n: "React", v: 92 },
      { n: "JavaScript", v: 90 },
      { n: "HTML & CSS", v: 95 },
      { n: "Responsive Design", v: 90 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { n: "Node.js", v: 88 },
      { n: "Express.js", v: 85 },
      { n: "REST APIs", v: 88 },
      { n: "Authentication", v: 80 },
    ],
  },
  {
    icon: Code,
    title: "Languages",
    color: "from-pink-500 to-rose-500",
    skills: [
      { n: "Python", v: 88 },
      { n: "Java", v: 82 },
      { n: "C++", v: 80 },
      { n: "C", v: 78 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { n: "MongoDB", v: 88 },
      { n: "SQL", v: 82 },
      { n: "Mongoose", v: 85 },
      { n: "Data Modeling", v: 80 },
    ],
  },
  {
    icon: Brain,
    title: "AI & Emerging Tech",
    color: "from-amber-500 to-orange-500",
    skills: [
      { n: "Generative AI", v: 88 },
      { n: "Prompt Engineering", v: 90 },
      { n: "AI Integration", v: 85 },
      { n: "ML Fundamentals", v: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-sky-500 to-indigo-500",
    skills: [
      { n: "Git & GitHub", v: 92 },
      { n: "VS Code", v: 95 },
      { n: "Postman", v: 85 },
      { n: "Vercel / Render", v: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Skills & <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Technologies I use to ship production-ready apps.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${g.color} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity`} />
                <div className="relative glass-strong rounded-2xl p-6 h-full border border-border/50 group-hover:border-primary/40 transition-colors">
                  <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-4 shadow-glow`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{g.title}</h3>
                  <div className="space-y-3">
                    {g.skills.map((s, j) => (
                      <div key={s.n}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium">{s.n}</span>
                          <span className="font-mono text-muted-foreground">{s.v}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.v}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + j * 0.1, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${g.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
