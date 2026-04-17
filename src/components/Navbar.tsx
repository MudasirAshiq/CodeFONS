import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/useMediaQuery';

const navLinks = [
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Services', href: '/#services', id: 'services' },
  { name: 'Projects', href: '/projects', id: 'projects' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const location = useLocation();
  const isMobile = useIsMobile();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile && isOpen) setIsOpen(false);
  }, [isMobile, isOpen]);

  const detectActiveSection = useCallback(() => {
    if (location.pathname !== '/') {
      setActiveSection('projects');
      return;
    }

    const sections = ['about', 'services', 'contact'];
    const active = sections.reverse().find(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 200;
      }
      return false;
    });
    setActiveSection(active || '');
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', detectActiveSection, { passive: true });
    detectActiveSection();
    return () => window.removeEventListener('scroll', detectActiveSection);
  }, [detectActiveSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 ${
        scrolled || isOpen
          ? 'py-3 bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold font-display tracking-tight whitespace-nowrap">
            <span className="text-slate-900">Code</span>
            <span className="text-primary">FONS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (location.pathname === link.href && link.id === 'projects');
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="ml-6 px-7 py-2.5 rounded-full text-[13px] font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            Work with Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2">
          {!isOpen && (
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="md:hidden px-4 py-2 rounded-full text-[11px] font-bold bg-slate-900 text-white shadow-sm"
            >
              Start
            </Link>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-100 overflow-hidden shadow-2xl h-[calc(100vh-60px)]"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-5 px-6 rounded-2xl text-xl font-bold text-slate-900 hover:text-primary hover:bg-primary/5 transition-all active:scale-95"
                  >
                    {link.name}
                    <Sparkles size={16} className="text-primary/20" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="block py-5 rounded-[24px] text-center text-lg font-black bg-slate-900 text-white shadow-xl shadow-slate-200"
                >
                  Start a Project
                </Link>
              </motion.div>
              
              <div className="mt-auto pb-10 text-center">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">CodeFONS Studio</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] mt-1">subsidiary of QuantaFONS</p>
                <p className="text-[10px] text-slate-300 mt-3 font-medium">v2.0.4 Frontier</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
