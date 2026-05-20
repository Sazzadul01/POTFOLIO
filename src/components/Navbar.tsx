// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
// import { Menu, X, Terminal } from 'lucide-react';
// import { USER_NAME, SOCIAL_LINKS } from '../constants';

// const NAV_ITEMS = [
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Research', href: '#research' },
//   { name: 'Experience', href: '#experience' },
//   { name: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
//         isScrolled ? 'py-4 glass m-4 mx-auto max-w-7xl px-8' : 'py-8 bg-transparent px-8'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <motion.a 
//           href="#"
//           className="flex items-center gap-3 group"
//         >
//           <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-all duration-500">
//             <Terminal size={20} />
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-lg font-black tracking-tighter text-glow-cyan uppercase">
//               {USER_NAME}
//             </h1>
//             <span className="text-[9px] font-black text-slate-500 tracking-[0.3em] uppercase transition-colors group-hover:text-brand-primary">AI & DATA ANALYTICS</span>
//           </div>
//         </motion.a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-10">
//           {NAV_ITEMS.map((item, i) => (
//             <motion.a
//               key={item.name}
//               href={item.href}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ scale: 1.1, color: '#00f2ff' }}
//               className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 transition-all"
//             >
//               {item.name}
//             </motion.a>
//           ))}
//           <div className="h-5 w-[1px] bg-white/10 mx-2" />
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 255, 0.4)" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-brand-primary text-slate-950 text-[11px] font-black px-6 py-3 rounded-full uppercase tracking-widest transition-all"
//           >
//             Contact Agent
//           </motion.a>
//         </div>

//         {/* Mobile Toggle */}
//         <button 
//           className="md:hidden text-slate-200"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden glass px-8 py-10 flex flex-col gap-8 mt-4 absolute top-full left-0 right-0 border-white/10"
//           >
//             {NAV_ITEMS.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-xl font-black text-slate-200 hover:text-brand-primary uppercase tracking-widest"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Scroll Progress */}
//       <motion.div
//         className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent transform origin-left"
//         style={{ scaleX }}
//       />
//     </nav>
//   );
// }
