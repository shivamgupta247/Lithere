import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function IngredientCard({ ingredient, index, isInView }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
      className="perspective-1000 cursor-pointer h-[280px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden glass-card p-6 flex flex-col items-center justify-center text-center group border border-gold/10 hover:border-gold/30 transition-colors duration-500">
          {/* Decorative line */}
          <div className="w-8 h-[2px] bg-gold/40 mb-5" />

          {/* Icon */}
          <motion.div
            className="text-4xl mb-4"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {ingredient.icon}
          </motion.div>

          {/* Name */}
          <h3 className="font-serif text-lg font-bold text-white mb-1">
            {ingredient.name}
          </h3>

          {/* Dose */}
          <p className="text-gold text-sm font-medium tracking-wider uppercase">
            {ingredient.dose}
          </p>

          {/* Expand hint */}
          <div className="absolute bottom-4 text-gray/50 text-lg">
            +
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col justify-center border border-gold/20"
          style={{
            background: `linear-gradient(135deg, var(--color-deep-navy) 0%, ${ingredient.color}15 50%, var(--color-deep-navy) 100%)`,
          }}
        >
          {/* Latin Name */}
          <p className="text-gold/70 text-xs tracking-wider uppercase mb-2 italic">
            {ingredient.latin}
          </p>

          {/* Name + Dose */}
          <h3 className="font-serif text-lg font-bold text-white mb-1">
            {ingredient.name}
          </h3>
          <p className="text-gold text-xs font-medium tracking-wider mb-4">
            {ingredient.dose}
          </p>

          {/* Description */}
          <p className="text-gray-light text-sm leading-relaxed">
            {ingredient.description}
          </p>

          {/* Decorative bottom border */}
          <div className="w-12 h-[1px] bg-gold/30 mt-5" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Ingredients() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const ingredients = [
    {
      name: t('ingredients.items.i1.name'),
      latin: 'Crataeva nurvala',
      dose: '120 mg',
      icon: '🌿',
      color: '#2d8a5e',
      description: t('ingredients.items.i1.desc'),
    },
    {
      name: t('ingredients.items.i2.name'),
      latin: 'Tribulus terrestris',
      dose: '100 mg',
      icon: '🍃',
      color: '#3ba876',
      description: t('ingredients.items.i2.desc'),
    },
    {
      name: t('ingredients.items.i3.name'),
      latin: 'Boerhaavia diffusa',
      dose: '75 mg',
      icon: '🌱',
      color: '#27ae60',
      description: t('ingredients.items.i3.desc'),
    },
    {
      name: t('ingredients.items.i4.name'),
      latin: 'Dolichos biflorus',
      dose: '55 mg',
      icon: '🫘',
      color: '#8B7355',
      description: t('ingredients.items.i4.desc'),
    },
    {
      name: t('ingredients.items.i5.name'),
      latin: 'Saxifraga ligulata',
      dose: '50 mg',
      icon: '⛰️',
      color: '#708090',
      description: t('ingredients.items.i5.desc'),
    },
    {
      name: t('ingredients.items.i6.name'),
      latin: 'Butea frondosa',
      dose: '45 mg',
      icon: '🌺',
      color: '#e74c3c',
      description: t('ingredients.items.i6.desc'),
    },
    {
      name: t('ingredients.items.i7.name'),
      latin: 'Sodium bicarbonate',
      dose: '40 mg',
      icon: '💎',
      color: '#c9982e',
      description: t('ingredients.items.i7.desc'),
    },
    {
      name: t('ingredients.items.i8.name'),
      latin: 'Achyranthes aspera',
      dose: '30 mg',
      icon: '🌾',
      color: '#8fbc8f',
      description: t('ingredients.items.i8.desc'),
    },
    {
      name: t('ingredients.items.i9.name'),
      latin: 'Asphaltum punjabianum',
      dose: '10 mg',
      icon: '🪨',
      color: '#4a3728',
      description: t('ingredients.items.i9.desc'),
    },
  ];

  return (
    <section id="ingredients" className="relative py-40 lg:py-48 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/3 rounded-full blur-[200px]" />

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
            <span className="text-gold text-xs tracking-[0.3em] uppercase">{t('ingredients.subtitle')}</span>
            <div className="w-8 h-[1px] bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-8"
          >
            <span className="text-white">{t('ingredients.title1')}</span>
            <br />
            <span className="italic gold-text">{t('ingredients.title2')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-light text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t('ingredients.description')}
          </motion.p>
        </div>

        {/* Ingredients Grid - 3D Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={ingredient.name}
              ingredient={ingredient}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Total Formula Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 lg:mt-24 glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gold animate-pulse-glow" />
            <span className="text-gray-light text-sm tracking-wider">{t('ingredients.totalTitle')}</span>
          </div>
          <div className="font-serif text-2xl font-bold gold-text text-center sm:text-right">
            {t('ingredients.totalValue')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
