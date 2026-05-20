/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SKILLS, TECH_STACK } from '../constants';
import { Cpu, Code2, Wrench } from 'lucide-react';

const CATEGORIES = [
  { id: 'ai', name: 'AI & ML Systems', icon: Cpu, data: SKILLS.ai_data },
  { id: 'prog', name: 'Core Engineering', icon: Code2, data: SKILLS.programming },
  { id: 'tools', name: 'Workflow Tools', icon: Wrench, data: SKILLS.tools }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ai');
  const activeCategory = CATEGORIES.find(c => c.id === activeTab)!;

  const radarData = SKILLS.ai_data.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-24 relative bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black tracking-[0.5em] text-brand-primary uppercase mb-4"
          >
            Active INTELLIGENT NETWORK
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Technical <span className="text-brand-primary text-glow-cyan">Architecture</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                whileHover={{ x: 10 }}
                className={`w-full flex items-center justify-between p-6 rounded-3xl border transition-all duration-500 overflow-hidden relative group ${
                  activeTab === cat.id 
                    ? 'bg-brand-primary/10 border-brand-primary/40 glow-cyan shadow-xl' 
                    : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`p-4 rounded-2xl transition-colors ${
                    activeTab === cat.id ? 'bg-brand-primary text-slate-950' : 'bg-white/5 text-slate-400 group-hover:text-brand-primary'
                  }`}>
                    <cat.icon size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-black uppercase tracking-widest">{cat.name}</div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-black">Sub-System Status: Optimal</div>
                  </div>
                </div>
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="tab-highlight"
                    className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-transparent pointer-events-none"
                  />
                )}
              </motion.button>
            ))}

            <div className="pt-12 overflow-hidden relative group">
              <div className="text-[10px] font-black tracking-[0.3em] text-slate-700 uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-slate-800" />
                Environment Stack
              </div>
              <div className="flex gap-4 animate-marquee whitespace-nowrap">
                {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <span key={i} className="px-6 py-2.5 glass border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-brand-primary transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-premium p-10 min-h-[500px] flex flex-col justify-center border-white/10 relative"
          >
             <div className="absolute top-6 left-10 text-[9px] font-black text-slate-600 uppercase tracking-widest">Visualizing: {activeCategory.name}</div>
             <AnimatePresence mode="wait">
              {activeTab === 'ai' ? (
                <motion.div 
                  key="radar"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="h-[400px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="rgba(255,255,255,0.05)" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: '#64748b', fontSize: 9, fontWeight: 900, textTransform: 'uppercase' }} 
                      />
                      <Radar
                        name="Capacity"
                        dataKey="A"
                        stroke="#00f2ff"
                        strokeWidth={4}
                        fill="#00f2ff"
                        fillOpacity={0.1}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </motion.div>
              ) : (
                <motion.div 
                  key="bars"
                  className="space-y-10"
                >
                  {activeCategory.data.map((skill, i) => (
                    <div key={skill.name} className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-4">
                          <span className="text-[12px] font-black uppercase tracking-widest text-slate-300">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono font-black text-brand-primary">{skill.level || 100}%</span>
                      </div>
                      <div className="skill-bar h-2 ring-1 ring-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level || 100}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1 }}
                          className="skill-fill"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
