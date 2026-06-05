import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Stars background
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-48 lg:py-56 overflow-hidden"
    >
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-navy to-midnight" />

        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Mountain silhouette hint */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-48 opacity-10"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 L200 80 L400 140 L600 40 L800 120 L1000 60 L1200 100 L1440 20 L1440 200 Z"
            fill="url(#mountainGrad)"
          />
          <defs>
            <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2744" />
              <stop offset="100%" stopColor="#0a0e1a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-emerald/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-8 h-[2px] bg-gold/50 mx-auto, mb-12"
        />

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8"
        >
          <span className="text-white">{t('cta.title1')}</span>
          <br />
          <span className="italic gold-text">{t('cta.title2')}</span>
          <br />
          <span className="text-white">{t('cta.title3')}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-light text-xl mb-12 max-w-xl mx-auto"
        >
          {t('cta.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 60px rgba(201,152,46,0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-gold to-gold-light text-midnight font-bold text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(201,152,46,0.2)] transition-all duration-300"
          >
            {t('cta.orderNow')}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border border-gold/30 text-gold-light font-medium text-sm tracking-[0.2em] uppercase rounded-full hover:bg-gold/5 transition-all duration-300"
          >
            {t('cta.consult')}
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-10 text-gray"
        >
          {[
            { icon: '🌿', label: t('cta.badges.b1') },
            { icon: '✅', label: t('cta.badges.b2') },
            { icon: '🔬', label: t('cta.badges.b3') },
            { icon: '🛡️', label: t('cta.badges.b4') },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-xs tracking-wider uppercase">
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
