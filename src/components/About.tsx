// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { motion } from 'motion/react';
// import { Lightbulb, Code2, Database, Brain } from 'lucide-react';

// const HIGHLIGHTS = [
//   {
//     icon: Brain,
//     title: "AI Specialist",
//     desc: "BUILDING AI CHATBOTS, RAG APPLICATIONS, AND GENERATIVE AI SOLUTIONS."
//   },
//   /*
//   {
//     icon: Code2,
//     title: "Full-stack Focus",
//     desc: "Bridging complex back-end logic with user-centric front-end experiences."
//   },
//   */
//   {
//     icon: Database,
//     title: "Data Analyst",
//     desc: "CREATING INTERACTIVE DASHBOARDS WITH POWER BI AND EXCEL."
//   },
//   {
//     icon: Lightbulb,
//     title: "Problem Solver",
//     desc: "PASSIONATE ABOUT AUTOMATION, MACHINE LEARNING, AND REAL-WORLD SOLUTIONS."
//   }
// ];

// export default function About() {
//   return (
//     <section id="about" className="py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-[10px] text-brand-primary uppercase tracking-[0.4em] font-bold mb-4">WHO I AM</p>
//             <h3 className="text-4xl font-bold mb-8 leading-tight uppercase tracking-tighter">
//               AI ENGINEER & <span className="text-brand-primary glow-text"> DATA ANALYST</span>
//             </h3>
//             <div className="space-y-6 text-slate-400 text-sm leading-relaxed border-l border-white/10 pl-6">
//               <p>
//                 I am a Computer Science student passionate about Artificial Intelligence, Data Analysis, and Automation. I enjoy building smart systems using Generative AI, Machine Learning, Power BI, and modern AI technologies.
//               </p>
//               <p>
//                 My experience includes AI chatbots, RAG applications, code analysis tools, and interactive dashboards that solve real-world problems through intelligent automation.
//               </p>
//               <p>
//                 Currently focused on Generative AI, LLM applications, and data-driven solutions while continuously exploring innovative technologies and research opportunities.
//               </p>
//             </div>

//             <div className="mt-10 grid sm:grid-cols-2 gap-4">
//               <div className="glass p-6 rounded-2xl border-white/5">
//                 <div className="text-3xl font-bold text-white mb-1">B.Sc in</div>
//                 <div className="text-slate-400">Computer Science & Engineering</div>
//                 <div className="text-brand-primary text-sm mt-2">Daffodil International University</div>
//               </div>
//               <div className="glass p-6 rounded-2xl border-white/5">
//                 <div className="text-3xl font-bold text-white mb-1">IEEE QPAIN 2026</div>
//                 <div className="text-slate-400">Research Publication</div>
//                 <div className="text-brand-primary text-sm mt-2">Deep Learning & AI Research</div>
//               </div>
//             </div>
//           </motion.div>

//           <div className="grid grid-cols-2 gap-3 relative">
//             {HIGHLIGHTS.map((h, i) => (
//               <motion.div
//                 key={h.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`p-5 glass border-brand-primary/10 hover:border-brand-primary/30 transition-all ${
//                   i % 2 === 1 ? 'lg:mt-8' : ''
//                 }`}
//               >
//                 <div className="flex items-center gap-2 mb-3">
//                   <h.icon size={14} className="text-brand-primary" />
//                   <h4 className="text-[10px] font-black uppercase tracking-widest">{h.title}</h4>
//                 </div>
//                 <p className="text-slate-500 text-[10px] uppercase font-bold leading-relaxed">{h.desc}</p>
//               </motion.div>
//             ))}
            
//             {/* Background glowing circle */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] z-[-1]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
