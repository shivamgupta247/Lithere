import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Science() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: t('science.steps.s1.title'),
      subtitle: t('science.steps.s1.subtitle'),
      description: t('science.steps.s1.desc'),
      icon: '⚡',
    },
    {
      number: '02',
      title: t('science.steps.s2.title'),
      subtitle: t('science.steps.s2.subtitle'),
      description: t('science.steps.s2.desc'),
      icon: '💧',
    },
    {
      number: '03',
      title: t('science.steps.s3.title'),
      subtitle: t('science.steps.s3.subtitle'),
      description: t('science.steps.s3.desc'),
      icon: '🛡️',
    },
    {
      number: '04',
      title: t('science.steps.s4.title'),
      subtitle: t('science.steps.s4.subtitle'),
      description: t('science.steps.s4.desc'),
      icon: '✨',
    },
  ];

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="science" className="relative py-40 lg:py-48 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-28 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">{t('science.subtitle')}</span>
            <div className="w-8 h-[1px] bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-white">{t('science.title1')}</span>
            <br />
            <span className="italic gold-text">{t('science.title2')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-light text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t('science.description')}
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Track */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px]">
            {/* Background line */}
            <div className="absolute inset-0 bg-gold/10 rounded-full" />
            {/* Animated progress line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gold rounded-full timeline-line-glow"
            />
          </div>

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} isEven={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index, isEven }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(201,152,46,0.5)]"
        >
          {isInView && (
            <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
          isEven ? 'md:pr-0' : 'md:pl-0'
        } ${isEven ? '' : 'md:ml-auto'}`}
      >
        <div className="glass-card glass-card-hover p-10 lg:p-12 group">
          {/* Step number + Icon */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-gold/30 font-serif text-4xl font-bold">
              {step.number}
            </span>
            <motion.span
              className="text-3xl"
              animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {step.icon}
            </motion.span>
          </div>

          {/* Subtitle */}
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
            {step.subtitle}
          </p>

          {/* Title */}
          <h3 className="font-serif text-2xl font-bold text-white mb-5 group-hover:text-gold-light transition-colors duration-300">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-gray text-sm leading-relaxed">
            {step.description}
          </p>

          {/* Bottom accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '3rem' } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-[2px] bg-gold/40 mt-8"
          />
        </div>
      </motion.div>
    </div>
  );
}
