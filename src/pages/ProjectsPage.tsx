import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, type ProjectCategory } from '../data/content';
import { ProjectCard } from '../components/ProjectCard';

const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI Solutions' },
];

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 sm:pt-32 pb-20 px-4 sm:px-10 lg:px-16 min-h-screen bg-white"
    >
      <div className="fixed inset-0 grid-bg opacity-30 -z-10" />

      <div className="container mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors mb-6 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-section font-display text-slate-900 tracking-tight mb-4"
            >
              Our <span className="gradient-text">Work</span>
            </motion.h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed">
              Explore our complete portfolio of high-performance digital products and technology ecosystems.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 px-12 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex overflow-x-auto pb-6 mb-12 gap-2 sm:gap-3 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative flex-shrink-0 px-6 sm:px-8 py-3 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all whitespace-nowrap overflow-hidden ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'text-slate-500 hover:text-slate-900 bg-slate-50 border border-slate-200'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-slate-900"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 bg-slate-50 rounded-[40px] border border-dashed border-slate-200"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Filter className="text-slate-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No projects found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
