import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import floatingLeavesImg from '../assets/floating_leaves.png';

export default function Benefits() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const audienceRef = useRef(null);
  const audienceInView = useInView(audienceRef, { once: true, margin: '-50px' });

  const benefits = [
    {
      title: t('benefits.grid.b1.title'),
      description: t('benefits.grid.b1.desc'),
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M16 24 L22 18 L26 22 L32 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 16 L32 16 L32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
      gradient: 'from-gold/10 to-transparent',
    },
    {
      title: t('benefits.grid.b2.title'),
      description: t('benefits.grid.b2.desc'),
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M24 12 C24 12 16 20 16 28 C16 32 20 36 24 36 C28 36 32 32 32 28 C32 20 24 12 24 12Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <path d="M21 26 L24 29 L28 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      gradient: 'from-emerald/10 to-transparent',
    },
    {
      title: t('benefits.grid.b3.title'),
      description: t('benefits.grid.b3.desc'),
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M18 30 Q24 14 30 30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
          <path d="M14 30 Q24 10 34 30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="16" y1="34" x2="32" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
      gradient: 'from-gold/10 to-transparent',
    },
    {
      title: t('benefits.grid.b4.title'),
      description: t('benefits.grid.b4.desc'),
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M24 14 L24 34 M14 24 L34 24" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.3" />
        </svg>
      ),
      gradient: 'from-emerald/10 to-transparent',
    },
    {
      title: t('benefits.grid.b5.title'),
      description: t('benefits.grid.b5.desc'),
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M14 32 L20 20 L26 28 L32 16 L38 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      gradient: 'from-gold/10 to-transparent',
    },
    {
      title: t('benefits.grid.b6.title'),
      description: t('benefits.grid.b6.desc'),
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M20 16 Q24 12 28 16 Q32 20 28 24 Q24 28 20 24 Q16 20 20 16Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <path d="M22 20 L24 24 L26 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ),
      gradient: 'from-emerald/10 to-transparent',
    },
  ];

  const targetAudience = t('benefits.audience.list', { returnObjects: true });

  return (
    <section id="benefits" className="relative py-40 lg:py-48 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-[200px]" />

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
            <span className="text-gold text-xs tracking-[0.3em] uppercase">{t('benefits.subtitle')}</span>
            <div className="w-8 h-[1px] bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-white">{t('benefits.title1')}</span>
            <br />
            <span className="italic gold-text">{t('benefits.title2')}</span>
          </motion.h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-10 lg:p-12 group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  className="text-gold mb-8"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  {benefit.icon}
                </motion.div>

                <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-gold-light transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Who It's For Section */}
        <div ref={audienceRef} className="mt-40 lg:mt-48 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={audienceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-8 h-[2px] bg-gold/50 mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-8">
              <span className="italic gold-text">{t('benefits.audience.title1')}</span>
              <br />
              <span className="text-white">{t('benefits.audience.title2')}</span>
            </h2>

            <p className="text-gray-light text-lg leading-relaxed mb-10">
              {t('benefits.audience.desc')}
            </p>

            <ul className="space-y-5">
              {targetAudience.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={audienceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-light"
                >
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Decorative Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={audienceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Concentric rings */}
              {[0, 1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + ring * 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-gold/5"
                  style={{ margin: `${ring * 30}px` }}
                >
                  {ring < 3 && (
                    <div
                      className="absolute w-2 h-2 rounded-full bg-gold/30"
                      style={{
                        top: ring % 2 === 0 ? '0' : '50%',
                        left: ring % 2 === 0 ? '50%' : '0',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  )}
                </motion.div>
              ))}

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center justify-center pointer-events-auto"
                >
                  <motion.div
                     animate={{ rotate: [0, 5, -5, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img
                      src={floatingLeavesImg}
                      alt="Floating Leaves"
                      className="w-48 h-48 object-contain mix-blend-multiply drop-shadow-xl"
                    />
                  </motion.div>
                  <div className="mt-[-20px] flex flex-col items-center relative z-10">
                    <p className="text-gold font-serif text-3xl font-bold drop-shadow-sm">Lithera</p>
                    <p className="text-navy font-bold text-xs tracking-widest bg-[#ffffff]/60 px-3 py-1 rounded-full mt-2 backdrop-blur-md border border-gold/20 shadow-sm">{t('benefits.audience.badge')}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
