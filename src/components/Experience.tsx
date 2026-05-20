// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { motion } from 'motion/react';
// import { EXPERIENCE_ACTIVITIES } from '../constants';

// export default function Experience() {
//   return (
//     <section id="experience" className="py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-sm font-mono text-brand-primary uppercase tracking-[0.2em] mb-4">Journey</h2>
//           <h3 className="text-4xl md:text-5xl font-display font-bold">Experience & <span className="text-glow">Activities</span></h3>
//         </div>

//         <div className="relative">
//           {/* Vertical Timeline Line */}
//           <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-primary/30 to-transparent hidden md:block" />

//           <div className="space-y-12">
//             {EXPERIENCE_ACTIVITIES.map((act, i) => (
//               <motion.div
//                 key={act.title}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className={`flex flex-col md:flex-row items-center gap-8 ${
//                   i % 2 === 1 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 {/* Content Card */}
//                 <div className="w-full md:w-[45%]">
//                   <div className={`glass p-8 rounded-3xl border-white/5 hover:border-brand-primary/20 transition-all group ${
//                     i % 2 === 0 ? 'md:text-right' : 'md:text-left'
//                   }`}>
//                     <div className={`flex items-center gap-3 mb-4 ${
//                       i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'
//                     }`}>
//                       <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-all duration-500">
//                         <act.icon size={24} />
//                       </div>
//                       <div>
//                         <div className="text-xs font-mono text-brand-primary tracking-widest">{act.period}</div>
//                         <h4 className="text-2xl font-bold">{act.title}</h4>
//                       </div>
//                     </div>
//                     <div className="text-brand-secondary font-semibold mb-3">{act.role}</div>
//                     <p className="text-slate-400 leading-relaxed">{act.description}</p>
//                   </div>
//                 </div>

//                 {/* Timeline Center Point */}
//                 <div className="hidden md:flex relative z-10 w-12 h-12 rounded-full border-4 border-bg-dark bg-brand-primary items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.5)]">
//                   <div className="w-2 h-2 rounded-full bg-slate-900" />
//                 </div>

//                 {/* Spacer for 50/50 layout */}
//                 <div className="hidden md:block w-[45%]" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
