/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Download, Cpu, Brain, Database, Network, Code } from 'lucide-react';
import { USER_NAME, USER_TITLES, STATS, SOCIAL_LINKS } from '../constants';

const FloatingIcon = ({ icon: Icon, delay, x, y }: { icon: any, delay: number, x: string, y: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      y: ["0%", "15%", "0%"],
      x: ["0%", "10%", "0%"]
    }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute text-brand-primary/20 pointer-events-none hidden lg:block"
    style={{ left: x, top: y }}
  >
    <Icon size={48} />
  </motion.div>
);

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const yScroll = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityScroll = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const currentTitle = USER_TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % USER_TITLES.length);
      } else {
        setDisplayText(currentTitle.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-bg-dark" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"]
              }}
              transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_10px_#00f2ff]"
            />
          ))}
        </div>
        <FloatingIcon icon={Brain} delay={0} x="5%" y="20%" />
        <FloatingIcon icon={Cpu} delay={1} x="90%" y="15%" />
        <FloatingIcon icon={Database} delay={2} x="10%" y="75%" />
        <FloatingIcon icon={Network} delay={0.5} x="85%" y="70%" />
      </div>

      <motion.div 
        style={{ y: yScroll, opacity: opacityScroll }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
            </span>
            <span className="text-[11px] text-brand-primary uppercase tracking-[0.4em] font-black">
              Available for AI/ML Projects
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="block text-white">SAZZADUL</span>
            <span className="block bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent text-glow-cyan">
              ISLAM
            </span>
          </h1>
          
          <div className="h-10 flex items-center text-sm font-mono text-slate-500 uppercase tracking-[0.3em] mb-10">
            <span className="text-white font-black bg-brand-primary/10 px-4 py-2 rounded border border-brand-primary/20">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-4 bg-brand-primary ml-2 align-middle shadow-[0_0_10px_#00f2ff]"
              />
            </span>
          </div>

          <p className="text-sm md:text-md text-slate-400 max-w-lg mb-12 leading-relaxed border-l-4 border-brand-primary/40 pl-8 font-medium">
            AI & Data Analyst building intelligent automation systems, interactive dashboards, and AI-powered applications.
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 242, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-10 py-5 bg-brand-primary text-slate-950 rounded-xl uppercase text-[11px] font-black tracking-widest transition-all"
            >
              Initialize Workspace
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-10 py-5 glass rounded-xl uppercase text-[11px] font-black tracking-widest flex items-center gap-3 transition-colors"
            >
              CV.pdf <Download size={18} />
            </motion.a>
          </div>

          <div className="flex items-center gap-10">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ y: -5, color: '#00f2ff', textShadow: "0 0 15px #00f2ff" }}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-600 transition-all flex items-center gap-2 group"
                aria-label={link.name}
              >
                <link.icon size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[550px] mx-auto">
            <div className="absolute inset-[-10px] bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-[32px] blur-[20px] animate-pulse" />
            <div className="relative h-full w-full glass-premium overflow-hidden group">
              <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4628c6bb3?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Visualization" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent z-20 pointer-events-none" />
            </div>
            
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 0 30px rgba(0, 242, 255, 0.4)" }}
                className={`absolute glass p-5 rounded-2xl border-white/20 z-30 group transition-all ${
                  i === 0 ? '-top-5 -left-10' :
                  i === 1 ? 'top-12 -right-12' :
                  i === 2 ? 'bottom-24 -left-12' :
                  '-bottom-5 right-5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-colors">
                    <stat.icon size={22} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{stat.value}+</div>
                    <div className="text-[10px] uppercase tracking-widest font-black text-slate-500">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
