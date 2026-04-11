import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  q: string;
  a: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

function AccordionRow({ item, index }: { item: AccordionItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
      >
        <span className="flex items-start gap-4">
          <span className="font-label text-accent text-[10px] tracking-[0.2em] uppercase shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-headline text-sm md:text-base font-bold text-white uppercase tracking-tight group-hover:text-accent transition-colors">
            {item.q}
          </span>
        </span>
        <span className={`shrink-0 w-5 h-5 border border-white/20 flex items-center justify-center mt-0.5 transition-colors ${open ? 'border-accent bg-accent/10' : 'group-hover:border-white/40'}`}>
          <svg
            className={`w-2.5 h-2.5 text-accent transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-9 pb-6 text-sm text-on-surface-variant leading-relaxed space-y-3">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => (
        <AccordionRow key={i} item={item} index={i} />
      ))}
    </div>
  );
}
