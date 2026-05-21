/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    
    const cursor = document.getElementById('custom-cursor');
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="relative bg-bg-dark">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-dark flex items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 border-2 border-brand-primary glow-cyan mb-8"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-brand-primary font-black tracking-[0.5em] text-[10px] uppercase"
              >
                Syncing Sazzad's Portfolio...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        id="custom-cursor" 
        className="fixed w-10 h-10 rounded-full border border-brand-primary/30 pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center transition-transform duration-150 ease-out"
      >
        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_15px_#00f2ff]" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Research />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

