// import { motion } from 'motion/react';
// import { TESTIMONIALS } from '../constants';
// import { Quote } from 'lucide-react';

// export default function Testimonials() {
//   return (
//     <section className="py-24 bg-bg-dark relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-20">
//           <motion.h3 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
//           >
//             CLIENT <span className="text-brand-accent text-glow-purple">Feedback</span>
//           </motion.h3>
//           <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black mt-4">ACADEMIC & PROJECT FEEDBACK</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {TESTIMONIALS.map((t, i) => (
//             <motion.div
//               key={t.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="glass p-10 relative overflow-hidden group"
//             >
//               <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-brand-accent/20 transition-colors">
//                 <Quote size={80} />
//               </div>
              
//               <p className="text-lg text-slate-300 leading-relaxed mb-10 relative z-10 font-medium">
//                 "{t.text}"
//               </p>
              
//               <div className="flex items-center gap-4 relative z-10">
//                 <div className="w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all ring-2 ring-white/10">
//                   <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="text-md font-black uppercase tracking-widest text-white">{t.name}</h4>
//                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
