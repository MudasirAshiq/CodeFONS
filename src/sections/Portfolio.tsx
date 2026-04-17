import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  // Show only first prominent projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-section px-6 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] -mr-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/[0.04] rounded-full blur-[120px] -ml-48" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 px-4">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5 block"
            >
              Featured Ecosystems
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section font-display text-slate-900 tracking-tight leading-[1] mb-6"
            >
              Designing the <span className="gradient-text-warm">Future</span>
            </motion.h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              A curated selection of the digital products we've engineered for industry leaders and visionary startups.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/projects"
              className="group flex items-center gap-3 text-white font-bold bg-slate-900 hover:bg-slate-800 px-8 py-4 rounded-full shadow-xl transition-all"
            >
              View Full Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Project Vertical List */}
        <div className="flex flex-col gap-12 md:gap-32">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-4 text-slate-400 hover:text-slate-900 transition-all text-sm font-bold uppercase tracking-[0.2em] group"
          >
            Explore all {projects.length} case studies
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
