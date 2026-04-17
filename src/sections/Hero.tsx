import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Zap, Layers, Sparkles } from 'lucide-react';

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -25, 0],
      x: [0, 12, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{ duration: 10, delay, repeat: Infinity, ease: 'easeInOut' }}
    className={className}
  />
);

const FloatingIcon = ({ icon: Icon, className, delay = 0 }: { icon: React.ElementType; className: string; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
    className={`absolute bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-xl hidden lg:flex ${className}`}
  >
    <Icon size={24} />
  </motion.div>
);

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorations */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        <FloatingOrb
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px]"
          delay={0}
        />
        <FloatingOrb
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]"
          delay={3}
        />
        <FloatingOrb
          className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-accent-cyan/10 blur-[80px]"
          delay={6}
        />
      </motion.div>

      {/* Floating Icons with shadow and border */}
      <FloatingIcon icon={Code2} className="top-[22%] left-[10%] text-primary" delay={0} />
      <FloatingIcon icon={Zap} className="top-[18%] right-[12%] text-accent-orange" delay={1.5} />
      <FloatingIcon icon={Layers} className="bottom-[28%] left-[8%] text-accent-green" delay={3} />
      <FloatingIcon icon={Sparkles} className="bottom-[22%] right-[10%] text-secondary" delay={4.5} />

      <motion.div style={{ opacity }} className="container mx-auto px-6 text-center z-10 max-w-5xl">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Frontier Digital Architecture
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero font-display mb-8 leading-[1.05]"
        >
          <span className="text-shine-travel">We Design</span>{' '}
          <span className="gradient-text">Intelligent</span>{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text-warm">Software Ecosystems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-medium"
        >
          CodeFONS is a premium product lab specializing in high-performance Web, Mobile, and Generative AI solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            onClick={handleStartProject}
            className="w-full sm:w-auto group px-10 py-4.5 rounded-full font-bold bg-slate-900 text-white shadow-2xl shadow-slate-200 hover:bg-slate-800 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center gap-3"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto group px-10 py-4.5 rounded-full font-bold bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with dark border */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-slate-200 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-slate-400"
          />
        </div>
      </div>
    </section>
  );
};
