// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { ExternalLink, Github } from 'lucide-react';
// import { PROJECTS } from '../constants';

// const CATEGORIES = ['All', 'AI Engineering', 'Data Systems', 'Automation'];

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredProjects = PROJECTS.filter(p => {
//     if (activeCategory === 'All') return true;
//     if (activeCategory === 'AI Engineering') return p.title.toLowerCase().includes('chatbot') || p.title.toLowerCase().includes('agent');
//     if (activeCategory === 'Data Systems') return p.title.toLowerCase().includes('dashboard') || p.title.toLowerCase().includes('analysis');
//     if (activeCategory === 'Automation') return p.title.toLowerCase().includes('automation') || p.title.toLowerCase().includes('workflow');
//     return true;
//   });

//   return (
//     <section id="projects" className="py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
//           <div>
//             <p className="text-[10px] text-brand-primary uppercase tracking-[0.4em] font-bold mb-4">Core Systems</p>
//             <h3 className="text-4xl font-bold uppercase tracking-tighter">PROJECT <span className="text-brand-secondary">ARCHIVE</span></h3>
//           </div>
          
//           <div className="flex bg-slate-900/80 p-1 rounded border border-white/5 self-start">
//             {CATEGORIES.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-6 py-2 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
//                   activeCategory === cat 
//                     ? 'bg-brand-primary text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]' 
//                     : 'text-slate-500 hover:text-white'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div 
//           layout
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((project, i) => (
//               <motion.div
//                 key={project.title}
//                 layout
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className="group relative glass-premium overflow-hidden border-white/10"
//               >
//                 <div className="relative h-80 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
                  
//                   <div className="absolute top-6 left-6">
//                     <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border-brand-primary/20 backdrop-blur-3xl">
//                       <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Sytem Module {String(i + 1).padStart(2, '0')}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-10">
//                   <div className="flex flex-wrap gap-3 mb-8">
//                     {project.tech.map(t => (
//                       <span key={t} className="px-3 py-1 bg-white/5 text-[10px] uppercase font-black tracking-widest text-slate-500 rounded-lg border border-white/5 transition-colors group-hover:text-brand-primary group-hover:border-brand-primary/30">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                   <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter group-hover:text-brand-primary transition-colors">{project.title}</h4>
//                   <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-lg">
//                     {project.description}
//                   </p>

//                   <div className="flex items-center gap-6">
//                     <motion.a
//                       whileHover={{ x: 5, color: '#00f2ff' }}
//                       href={project.github}
//                       className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 transition-all font-mono"
//                     >
//                       Source Code
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ x: 5, color: '#00f2ff' }}
//                       href={project.demo}
//                       className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 transition-all border-l border-white/10 pl-6 font-mono"
//                     >
//                       Live Deployment
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
