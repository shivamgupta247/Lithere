import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import varunChhalImg from '../assets/ingredients/varun_chhal.png';
import gokhruImg from '../assets/ingredients/gokhru.png';
import punarnavaImg from '../assets/ingredients/punarnava.png';
import kulthiImg from '../assets/ingredients/kulthi.png';
import pashanbhedImg from '../assets/ingredients/pashanbhed.png';
import palashPushpImg from '../assets/ingredients/palash_pushp.png';
import sarjikaksharaImg from '../assets/ingredients/sarjikakshara.png';
import apamargaImg from '../assets/ingredients/apamarga.png';
import shilajitImg from '../assets/ingredients/shilajit.png';

function IngredientCard({ ingredient, index, isInView }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="cursor-pointer h-[300px]"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 overflow-hidden group border border-gold/10 hover:border-gold/30 transition-colors duration-500 rounded-[24px]"
          style={{
            backfaceVisibility: 'hidden',
            background: 'rgba(248, 250, 252, 0.55)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <img
            src={ingredient.icon}
            alt={ingredient.name}
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 z-0"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/90 via-[#ffffff]/40 to-transparent z-[1] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated shimmer on hover */}
          <div className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 animate-shimmer" />
          </div>

          <div className="relative z-10 h-full p-6 flex flex-col items-center justify-start text-center pt-8">
            {/* Decorative line with glow */}
            <motion.div
              className="w-8 h-[2px] bg-gold/60 mb-4"
              animate={isInView ? { width: [0, 32] } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            />

            {/* Name */}
            <h3 className="font-serif text-2xl font-bold text-white mb-2 drop-shadow-md">
              {ingredient.name}
            </h3>

            {/* Dose */}
            <p className="text-gold font-bold text-sm tracking-wider uppercase drop-shadow-sm bg-[#ffffff]/50 px-3 py-1 rounded-full backdrop-blur-md border border-gold/20">
              {ingredient.dose}
            </p>

            {/* Expand hint with 3D depth */}
            <motion.div
              className="mt-auto text-navy/40 text-3xl group-hover:text-gold transition-colors pb-2"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              +
            </motion.div>
          </div>
        </div>

        {/* Back Face with 3D depth layers */}
        <div
          className="absolute inset-0 rounded-[24px] p-6 flex flex-col justify-center border border-gold/20 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, var(--color-deep-navy) 0%, ${ingredient.color}15 50%, var(--color-deep-navy) 100%)`,
          }}
        >
          {/* Depth glow orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[60px] opacity-30"
            style={{ background: ingredient.color }}
          />

          {/* Content */}
          <div className="relative z-10">
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
            <div className="w-12 h-[1px] bg-gradient-to-r from-gold/50 to-transparent mt-5" />
          </div>
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
      icon: varunChhalImg,
      color: '#2d8a5e',
      description: t('ingredients.items.i1.desc'),
    },
    {
      name: t('ingredients.items.i2.name'),
      latin: 'Tribulus terrestris',
      dose: '100 mg',
      icon: gokhruImg,
      color: '#3ba876',
      description: t('ingredients.items.i2.desc'),
    },
    {
      name: t('ingredients.items.i3.name'),
      latin: 'Boerhaavia diffusa',
      dose: '75 mg',
      icon: punarnavaImg,
      color: '#27ae60',
      description: t('ingredients.items.i3.desc'),
    },
    {
      name: t('ingredients.items.i4.name'),
      latin: 'Dolichos biflorus',
      dose: '55 mg',
      icon: kulthiImg,
      color: '#8B7355',
      description: t('ingredients.items.i4.desc'),
    },
    {
      name: t('ingredients.items.i5.name'),
      latin: 'Saxifraga ligulata',
      dose: '50 mg',
      icon: pashanbhedImg,
      color: '#708090',
      description: t('ingredients.items.i5.desc'),
    },
    {
      name: t('ingredients.items.i6.name'),
      latin: 'Butea frondosa',
      dose: '45 mg',
      icon: palashPushpImg,
      color: '#e74c3c',
      description: t('ingredients.items.i6.desc'),
    },
    {
      name: t('ingredients.items.i7.name'),
      latin: 'Sodium bicarbonate',
      dose: '40 mg',
      icon: sarjikaksharaImg,
      color: '#c9982e',
      description: t('ingredients.items.i7.desc'),
    },
    {
      name: t('ingredients.items.i8.name'),
      latin: 'Achyranthes aspera',
      dose: '30 mg',
      icon: apamargaImg,
      color: '#8fbc8f',
      description: t('ingredients.items.i8.desc'),
    },
    {
      name: t('ingredients.items.i9.name'),
      latin: 'Asphaltum punjabianum',
      dose: '10 mg',
      icon: shilajitImg,
      color: '#4a3728',
      description: t('ingredients.items.i9.desc'),
    },
  ];

  return (
    <section id="ingredients" className="relative py-40 lg:py-48 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/3 rounded-full blur-[200px]"
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
            <span className="text-gold text-xs tracking-[0.3em] uppercase">{t('ingredients.subtitle')}</span>
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

        {/* Total Formula Bar with 3D glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 lg:mt-24 glass-card-3d p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-3 h-3 rounded-full bg-gold"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(249,115,22,0.3), 0 0 10px rgba(249,115,22,0.1)',
                  '0 0 15px rgba(249,115,22,0.5), 0 0 30px rgba(249,115,22,0.2)',
                  '0 0 5px rgba(249,115,22,0.3), 0 0 10px rgba(249,115,22,0.1)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-gray-light text-sm tracking-wider">{t('ingredients.totalTitle')}</span>
          </div>
          <motion.div
            className="font-serif text-2xl font-bold gold-text text-center sm:text-right"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t('ingredients.totalValue')}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
