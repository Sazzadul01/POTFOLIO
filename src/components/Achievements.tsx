import { motion } from 'motion/react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../constants';
import { Award, Zap } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="experience" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Achievements */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Key Achievements</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Performance Milestones</p>
              </div>
            </div>

            <div className="space-y-6">
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 group hover:bg-white/[0.05] transition-all border-white/5 hover:border-brand-accent/30"
                >
                  <div className="flex gap-6">
                    <div className="p-4 rounded-2xl bg-white/5 text-slate-400 group-hover:text-brand-accent transition-colors h-fit">
                      <ach.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tight mb-2 group-hover:text-brand-accent transition-colors">{ach.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Certifications</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Verified Expertise</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 border-white/5 hover:border-brand-primary/20 group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[9px] font-black text-brand-primary uppercase tracking-[0.2em] mb-4">Credential {String(i + 1).padStart(2, '0')}</div>
                    <h4 className="text-lg font-black uppercase tracking-tight mb-2 leading-tight">{cert.name}</h4>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-500">{cert.issuer}</span>
                    <span className="text-brand-primary">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
