import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M15 20 Q20 10 25 20 Q20 15 15 20Z" fill="currentColor" opacity="0.6" />
          <path d="M20 12 L20 28 M14 20 L26 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: t('about.features.f1.title'),
      desc: t('about.features.f1.desc'),
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M12 28 L16 18 L20 24 L24 14 L28 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: t('about.features.f2.title'),
      desc: t('about.features.f2.desc'),
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M20 12 C20 12 12 18 12 24 C12 28 16 30 20 28 C24 30 28 28 28 24 C28 18 20 12 20 12Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
        </svg>
      ),
      title: t('about.features.f3.title'),
      desc: t('about.features.f3.desc'),
    },
  ];

  return (
    <section id="about" className="relative py-40 lg:py-48 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gold/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">{t('about.subtitle')}</span>
            <div className="w-8 h-[1px] bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-white">{t('about.title1')}</span>
            <span className="italic gold-text">{t('about.title2')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-light text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              className="glass-card glass-card-hover p-10 lg:p-12 text-center group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-gold mb-8 flex justify-center"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-serif text-xl font-semibold text-white mb-5 group-hover:text-gold-light transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 lg:mt-28 glass-card p-10 lg:p-12 grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {[
            { value: t('about.stats.s1.value'), label: t('about.stats.s1.label') },
            { value: t('about.stats.s2.value'), label: t('about.stats.s2.label') },
            { value: t('about.stats.s3.value'), label: t('about.stats.s3.label') },
            { value: t('about.stats.s4.value'), label: t('about.stats.s4.label') },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.15, type: 'spring', stiffness: 200 }}
                className="text-3xl lg:text-5xl font-serif font-bold gold-text mb-3"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray text-xs tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
