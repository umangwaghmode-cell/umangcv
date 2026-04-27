/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Trophy, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Network, 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Mail,
  Zap,
  Target,
  ShieldCheck,
  Cpu,
  Brain,
  MessageCircle,
  HeartHandshake
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const skills = [
    {
      title: "Elite Athletics",
      icon: "🏑",
      description: "Hockey-bred discipline. Applying the grit and teamwork of a competitive athlete to corporate high-pressure environments.",
    },
    {
      title: "Business Strategy",
      icon: "💼",
      description: "Identifying leverage points. Architecting scalable systems and leading cross-functional teams toward measurable ROI.",
    },
    {
      title: "Counseling & EQ",
      icon: "🧠",
      description: "Strategic empathy. Building deep trust and solving complex human problems through active listening and psychological safety.",
    },
    {
      title: "Financial Literacy",
      icon: "💰",
      description: "Advanced wealth mindset. Strategic asset allocation and long-term planning for sustainable personal and venture growth.",
    },
    {
      title: "Social Networking",
      icon: "🌐",
      description: "Connecting high-value individuals. Mastering the art of influence, communication, and long-term relationship engineering.",
      fullWidth: true
    }
  ];

  const strengths = ["Leadership", "Discipline", "Strategy", "EQ"];

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden selection:bg-sky-500/30">
      {/* Background Glows */}
      <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-glow-sky opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-glow-violet opacity-40 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-12 py-12 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            UW<span className="text-sky-400">.</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold"
          >
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-white">Contact</a>
          </motion.div>
        </nav>

        {/* Main Content */}
        <main className="grid lg:grid-cols-12 gap-16 flex-grow">
          {/* Left Column: Hero */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 w-fit"
            >
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 blur-md opacity-60 scale-110"></div>
                <img
                  src="/profile.jpg"
                  alt="Umang Waghmode"
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-sky-500/40 shadow-[0_0_24px_rgba(56,189,248,0.3)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 inline-block py-1.5 px-4 glass border-sky-500/20 text-[10px] uppercase tracking-[0.2em] font-black text-sky-400 w-fit"
            >
              Personal Brand v3.0
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
            >
              Umang<br />
              <span className="text-white/40">Waghmode</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sky-400 uppercase tracking-[0.2em] text-[10px] font-black mb-8"
            >
              Multi-Talented Leader | Strategist | Athlete
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 leading-relaxed text-sm mb-10 max-w-sm font-medium"
            >
              Pioneering at the intersection of strategic business growth and disciplined competitive excellence. Building high-impact solutions through empathy, intelligence, and a winner’s mindset.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 mb-16"
            >
              <button className="btn-primary flex items-center gap-2 group">
                Explore Skills
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline">Connect</button>
            </motion.div>

            {/* Core Strengths */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-8 border-t border-white/10"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black mb-6">Core Strengths</div>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {strengths.map((strength) => (
                  <div key={strength} className="flex items-center gap-3 text-xs font-bold tracking-wide">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"></div>
                    {strength}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills Grid */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass p-8 flex flex-col group hover:bg-white/[0.05] transition-all duration-300 ${skill.fullWidth ? 'md:col-span-2 md:flex-row md:items-center md:gap-8' : ''}`}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <div>
                  <h3 className="font-bold text-xs mb-3 uppercase tracking-[0.1em] text-white/90">{skill.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end pt-12 border-t border-white/5 mt-16 text-center md:text-left gap-6">
          <div className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            &copy; {new Date().getFullYear()} UMANG WAGHMODE — STRATEGIC LEADERSHIP
          </div>
          <div className="flex gap-8">
            {['LinkedIn', 'Instagram', 'Email'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
