/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Microscope, FlaskConical, Beaker } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

export default function Research() {
  return (
    <section id="research" className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[11px] text-brand-secondary uppercase tracking-[0.6em] font-black mb-6"
            >
              RESEARCH & DEVELOPMENT
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
            >
              AI & DATA <span className="text-brand-primary text-glow-cyan">RESEARCH</span>
            </motion.h3>
          </div>
          
          <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <div className="flex flex-col gap-2">
              <span className="text-brand-primary">Papers Published</span>
              <span className="text-3xl text-white">03 Research Papers</span>
              <span className="text-3xl text-white">02 Published Datasets</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-brand-primary">Citations</span>
              <span className="text-3xl text-white">12+</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass p-10 group relative border-white/5 hover:border-brand-primary/20 transition-all bg-white/[0.01]"
            >
              <div className="relative z-10">
                <div className="mb-10 flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-all duration-500">
                    <FlaskConical size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{pub.year}</span>
                </div>

                <h4 className="text-xl font-black mb-6 uppercase tracking-tight leading-tight min-h-[4rem] group-hover:text-brand-primary transition-colors">
                  {pub.title}
                </h4>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-10 line-clamp-3 font-medium">
                  {pub.description}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 group-hover:text-brand-primary transition-colors">
                    {pub.journal}
                  </span>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    href={pub.link}
                    className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-brand-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <Microscope size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
