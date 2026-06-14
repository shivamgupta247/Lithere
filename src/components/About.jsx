import { useRef, useState, useCallback } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function TiltCard3D({ children, className = '' }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 25 });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 25 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={className}
      >
        {/* Dynamic light glow following mouse */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(249,115,22,0.08) 0%, transparent 60%)`
            ),
          }}
        />
        {children}
      </motion.div>
    </div>
  );
}

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
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-48 h-48 bg-emerald/3 rounded-full blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-gold/50"
            />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">{t('about.subtitle')}</span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-gold/50"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-white">{t('about.title1')}</span>
            <span className="italic gold-text animate-neon-breathe">{t('about.title2')}</span>
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

        {/* 3D Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
            >
              <TiltCard3D className="glass-card glass-card-hover p-10 lg:p-12 text-center group cursor-default h-full">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="text-gold mb-8 flex justify-center"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {feature.icon}
                </motion.div>
                <h3
                  className="font-serif text-xl font-semibold text-white mb-5 group-hover:text-gold-light transition-colors duration-300"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray text-sm leading-relaxed"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {feature.desc}
                </p>

                {/* Bottom glow line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:w-3/4 transition-all duration-700"
                />
              </TiltCard3D>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar with 3D depth */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 lg:mt-28 glass-card-3d p-10 lg:p-12 grid grid-cols-2 md:grid-cols-4 gap-10"
          style={{ perspective: '800px' }}
        >
          {[
            { value: t('about.stats.s1.value'), label: t('about.stats.s1.label') },
            { value: t('about.stats.s2.value'), label: t('about.stats.s2.label') },
            { value: t('about.stats.s3.value'), label: t('about.stats.s3.label') },
            { value: t('about.stats.s4.value'), label: t('about.stats.s4.label') },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                initial={{ scale: 0, rotateY: -90 }}
                animate={isInView ? { scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 1 + i * 0.15, type: 'spring', stiffness: 200 }}
                className="text-3xl lg:text-5xl font-serif font-bold gold-text mb-3"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray text-xs tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
