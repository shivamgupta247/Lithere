import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    [t('footer.categories.Product')]: [
      { name: t('footer.links.Ingredients'), href: '#ingredients' },
      { name: t('footer.links.Benefits'), href: '#benefits' },
      { name: t('footer.links.How It Works'), href: '#science' },
      { name: t('footer.links.FAQ'), href: '#faq' },
    ],
    [t('footer.categories.Company')]: [
      { name: t('footer.links.About Us'), href: '#about' },
      { name: t('footer.links.Research'), href: '#science' },
      { name: t('footer.links.Quality Assurance'), href: '#' },
      { name: t('footer.links.Certifications'), href: '#' },
    ],
    [t('footer.categories.Support')]: [
      { name: t('footer.links.Contact Us'), href: '#' },
      { name: t('footer.links.Shipping Info'), href: '#' },
      { name: t('footer.links.Return Policy'), href: '#' },
      { name: t('footer.links.Privacy Policy'), href: '#' },
    ],
  };


  const handleClick = (e, href) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-midnight border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-midnight font-bold text-lg font-serif">L</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-wider text-white">
                LITHERA
              </span>
            </div>

            <p className="text-gray text-sm leading-relaxed mb-6 max-w-sm">
              {t('footer.desc')}
            </p>

            <div className="flex items-center gap-2 text-gold/60">
              <span className="text-xs tracking-wider">{t('footer.madeWith')}</span>
              <span className="text-gold">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M17 8C8 10 5 16 5 16C5 16 7 12 12 10C9 14 8 19 8 19C8 19 13 18 17 12C21 6 22 2 22 2C22 2 19 4 17 8Z" />
                </svg>
              </span>
              <span className="text-xs tracking-wider">{t('footer.inIndia')}</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-gray text-sm hover:text-gold-light transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gold/5">
          <p className="text-gray/80 text-xs leading-relaxed mb-6 max-w-4xl">
            <strong className="text-gray/90">{t('footer.disclaimer')}:</strong> {t('footer.disclaimerText')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-gray/70 text-xs tracking-wider">
            {t('footer.copyright').replace('{{year}}', new Date().getFullYear())}
          </p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-gray/70 hover:text-gold transition-colors duration-300 text-xs tracking-wider"
          >
            <span>{t('footer.backToTop')}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 12V2M3 6L7 2L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
