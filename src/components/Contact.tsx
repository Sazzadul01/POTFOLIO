/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[11px] font-black tracking-[0.5em] text-brand-accent uppercase mb-6"
            >
              CONTACT PORTAL
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12"
            >
              CONTACT <span className="text-brand-primary text-glow-cyan">link</span>
            </motion.h3>

            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="p-4 h-fit rounded-2xl bg-white/5 text-slate-400 group-hover:bg-brand-primary group-hover:text-slate-900 transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2">CONTACT EMAIL</h4>
                  <p className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-brand-primary transition-colors">islam15-5960@diu.edu.bd</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="p-4 h-fit rounded-2xl bg-white/5 text-slate-400 group-hover:bg-brand-primary group-hover:text-slate-900 transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2">LOCATION</h4>
                  <p className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-brand-primary transition-colors">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-20">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ y: -5, color: '#00f2ff' }}
                  href={link.url}
                  className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-400 hover:border-brand-primary/50 transition-all border-white/5"
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-premium p-10 lg:p-14 border-white/10"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all font-mono"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="sazzad@gmail.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all font-mono"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all resize-none font-mono"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 242, 255, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-primary text-slate-950 font-black uppercase tracking-[0.3em] text-[11px] rounded-xl flex items-center justify-center gap-4 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-4">
                  SEND MESSAGE <Send size={18} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
