import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function FAQItem({ faq, isOpen, onToggle, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="border-b border-gold/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4">
          <span className="text-gold/30 font-serif text-lg font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-serif text-lg sm:text-xl transition-colors duration-300 ${
            isOpen ? 'text-gold-light' : 'text-white group-hover:text-gold-light'
          }`}>
            {faq.q}
          </span>
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? 'border-gold bg-gold/10 text-gold'
              : 'border-gold/20 text-gold/40 group-hover:border-gold/40'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 pr-14">
              <p className="text-gray text-sm sm:text-base leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = t('faq.items', { returnObjects: true }) || [];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-40 lg:py-48 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gold/3 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">{t('faq.subtitle')}</span>
            <div className="w-8 h-[1px] bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-white">{t('faq.title1')}</span>
            <br />
            <span className="italic gold-text">{t('faq.title2')}</span>
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="glass-card p-8 sm:p-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
