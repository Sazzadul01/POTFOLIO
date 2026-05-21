/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { USER_NAME, SOCIAL_LINKS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass m-6 mt-12 px-8 py-4 relative bg-bg-card">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase">
        <div className="flex items-center gap-4">
          <span className="text-brand-primary/40">SAZZAD'S PORTFOLIO</span>
          <span className="h-3 w-[1px] bg-white/10" />
          <span className="text-slate-600">STATUS: ACTIVE</span>
        </div>

        <div className="text-brand-primary/60 text-center">
          DESIGNED & DEVELOPED BY {USER_NAME}
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              className="hover:text-brand-primary transition-colors hover:glow-text"
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
          <span className="text-slate-700">&copy; 2026 SAZZAD</span>
        </div>
      </div>
    </footer>
  );
}
