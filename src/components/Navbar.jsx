import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.science'), href: '#science' },
    { name: t('navbar.ingredients'), href: '#ingredients' },
    { name: t('navbar.benefits'), href: '#benefits' },
    { name: t('navbar.faq'), href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight/90 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-[0_0_20px_rgba(201,152,46,0.3)]">
              <span className="text-midnight font-bold text-lg font-serif">L</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-wider text-white group-hover:text-gold-light transition-colors duration-300">
              LITHERA
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-gold-light'
                    : 'text-gray-light hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Custom Language Toggle */}
            <div className="flex items-center bg-midnight/50 border border-gold/20 rounded-full p-1 backdrop-blur-sm">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
                  i18n.language === 'en' || !i18n.language?.startsWith('ru')
                    ? 'bg-gradient-to-r from-gold to-gold-light text-midnight shadow-[0_0_15px_rgba(201,152,46,0.4)]'
                    : 'text-gray hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage('ru')}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
                  i18n.language?.startsWith('ru')
                    ? 'bg-gradient-to-r from-gold to-gold-light text-midnight shadow-[0_0_15px_rgba(201,152,46,0.4)]'
                    : 'text-gray hover:text-white'
                }`}
              >
                RU
              </button>
            </div>
            <motion.a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-gold to-gold-light text-midnight text-xs font-semibold tracking-widest uppercase rounded-full hover:shadow-[0_0_30px_rgba(201,152,46,0.4)] transition-shadow duration-300"
            >
              {t('navbar.orderNow')}
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-gold-light block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-gold-light block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-gold-light block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight/95 backdrop-blur-xl border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-light hover:text-gold-light text-sm tracking-[0.15em] uppercase transition-colors duration-300 py-2 border-b border-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
              {/* Mobile Lang Switcher & CTA */}
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-center justify-center gap-4 border border-gold/10 p-2 rounded-full mx-auto w-max">
                  <button
                    onClick={() => { i18n.changeLanguage('en'); setMobileOpen(false); }}
                    className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 ${
                      i18n.language === 'en' || !i18n.language?.startsWith('ru')
                        ? 'bg-gold/20 text-gold-light border border-gold/30'
                        : 'text-gray hover:text-white border border-transparent'
                    }`}
                  >
                    ENGLISH
                  </button>
                  <button
                    onClick={() => { i18n.changeLanguage('ru'); setMobileOpen(false); }}
                    className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 ${
                      i18n.language?.startsWith('ru')
                        ? 'bg-gold/20 text-gold-light border border-gold/30'
                        : 'text-gray hover:text-white border border-transparent'
                    }`}
                  >
                    РУССКИЙ
                  </button>
                </div>
                <motion.a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, '#cta')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-midnight text-xs font-semibold tracking-widest uppercase rounded-full text-center"
                >
                  {t('navbar.orderNow')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
