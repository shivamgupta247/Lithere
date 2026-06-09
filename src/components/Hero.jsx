import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div style={{ scale }} className="absolute inset-0 hero-gradient">
        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold/20"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -40, -20, -60, 0],
              x: [0, 15, -10, 20, 0],
              opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Radial glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-midnight)_100%)]" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                {t('hero.ayurvedicPath')}
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: 0.5,
                    }
                  }
                }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 flex flex-wrap"
              >
                {t('hero.naturalKidneyWellness').split(' ').map((word, i) => (
                  <span key={i} className="inline-flex mr-[0.3em]">
                    {word.split('').map((char, j) => (
                      <motion.span
                        key={j}
                        variants={{
                          hidden: { opacity: 0, y: 50, rotateZ: 5 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            rotateZ: 0,
                            transition: { type: "spring", damping: 12, stiffness: 150 }
                          }
                        }}
                        className="italic gold-text inline-block p-2 -m-2"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-light text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#ingredients"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201,152,46,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-midnight font-semibold text-sm tracking-widest uppercase rounded-full transition-all duration-300"
              >
                {t('hero.exploreIngredients')}
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gold/30 text-gold-light font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gold/5 transition-all duration-300"
              >
                {t('hero.learnMore')}
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Product Box Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center relative"
            style={{ perspective: '1200px' }}
          >
            {/* Background glow behind box */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[300px] bg-gold/8 rounded-full blur-[100px]" />
            </div>

            {/* 3D Tilted Product Box */}
            <motion.div
              animate={{
                rotateX: [2, -2, 2],
                rotateY: [-8, -12, -8],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                rotateX: 0,
                rotateY: 0,
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              className="relative cursor-pointer"
            >
              {/* Reflection/shadow beneath */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-gold/10 blur-2xl rounded-full" />

              {/* Product Box Image */}
              <img
                src="/lithera-box.png"
                alt="Lithera Tablet - Ayurvedic Kidney Care Product Box"
                className="w-[420px] max-w-full drop-shadow-[0_20px_60px_rgba(201,152,46,0.25)] rounded-lg"
              />

              {/* Subtle shine overlay */}
              <motion.div
                animate={{
                  opacity: [0, 0.15, 0],
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 rounded-lg overflow-hidden pointer-events-none"
                style={{ mixBlendMode: 'overlay' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray text-xs tracking-[0.2em] uppercase">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-gold/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
