import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/content';
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 1 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  // Mouse tracking for 3D tilt (Desktop only)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTablet) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
    
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
      style={{
        rotateX: !isTablet ? rotateX : 0,
        rotateY: !isTablet ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="group relative h-[460px] sm:h-[600px] lg:h-[650px] w-full rounded-[40px] overflow-hidden transition-all duration-700 p-[1px]"
    >
      {/* High-End Neon Border Trail - Active only on Mobile & Tablet */}
      {(isMobile || isTablet) && (
        <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, var(--primary) 50%, transparent 60%, transparent 100%)',
            }}
          />
        </div>
      )}

      {/* Main Card Body */}
      <div className={`relative z-10 w-full h-full rounded-[39px] overflow-hidden bg-slate-50 border shadow-2xl flex flex-col ${isMobile ? 'border-white/20 ring-4 ring-black/5' : 'border-slate-100'}`}>
      {/* Background Preview Image - Optimized for Mobile visibility */}
      <div className="absolute inset-0 z-0 bg-slate-100 overflow-hidden">
        <motion.div
           animate={{ 
             scale: (isHovered && !isMobile) ? 1.05 : 1,
             x: isHovered && !isTablet ? x.get() * -10 : 0,
             y: isHovered && !isTablet ? y.get() * -10 : 0
           }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative w-full h-full"
        >
          {/* Mock UI Header: Switches between Browser (Desktop) and Phone (Mobile) */}
          <div className={`absolute top-0 left-0 right-0 z-10 flex items-center border-b border-white/5 backdrop-blur-md transition-all duration-500 ${isMobile ? 'h-8 px-6 justify-between bg-black/40' : 'h-6 px-4 gap-1.5 bg-white/10'}`}>
            {isMobile ? (
              <>
                <span className="text-[10px] font-bold text-white/70">9:41</span>
                <div className="w-20 h-4 bg-black/60 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-500/50 mr-2" />
                  <div className="w-8 h-1 rounded-full bg-white/10" />
                </div>
                <div className="flex gap-1.5 items-center">
                  <div className="flex gap-0.5">
                    {[1,2,3,4].map(i => <div key={i} className="w-0.5 h-2 bg-white/40 rounded-full" />)}
                  </div>
                  <div className="w-4 h-2 rounded-sm border border-white/30 flex items-center px-0.5">
                    <div className="w-full h-full bg-white/60 rounded-xs" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
              </>
            )}
          </div>

          <img
            src={(isMobile && project.mobileImage) ? project.mobileImage : project.image}
            alt={project.name}
            className={`w-full h-full transition-all duration-1000 ${isMobile ? 'object-cover' : 'object-contain object-top p-4 sm:p-8'}`}
            loading="lazy"
          />
          {/* Multi-layer gradient - bottom heavy for text readability, clearer on top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div 
        className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-10 lg:p-16"
        style={{ transform: 'translateZ(50px)' }}
      >
        <motion.div
          animate={{ 
            y: isHovered ? 0 : 60,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="glass-card-vivid rounded-[24px] sm:rounded-[40px] p-5 sm:p-10 border border-white/20 shadow-2xl overflow-hidden relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-3 sm:mb-6">
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="px-2 py-0.5 rounded-full text-[7px] sm:text-[9px] font-black uppercase tracking-[0.2em] bg-slate-900 text-white shadow-lg">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[7px] sm:text-[9px] font-black uppercase tracking-widest text-emerald-600">Live</span>
                  </div>
                  <div className="h-[1px] w-6 sm:w-8 bg-slate-900/10 hidden sm:block" />
                </div>
                <h3 className="text-xl sm:text-3xl lg:text-5xl font-black text-slate-900 font-display tracking-tight leading-none group-hover:text-primary transition-colors duration-500">
                  {project.name}
                </h3>
              </div>
            </div>

            <p className="text-[11px] sm:text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-5 sm:mb-10 max-w-2xl line-clamp-2 md:line-clamp-none">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-slate-900 text-white text-[10px] sm:text-sm font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl hover:-translate-y-1 active:scale-95 group/btn"
              >
                Live Preview
                <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      </div>

      {/* Decorative Effects */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            exit={{ x: '200%' }}
            transition={{ duration: 1.8, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[35deg] pointer-events-none z-30 opacity-40"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
