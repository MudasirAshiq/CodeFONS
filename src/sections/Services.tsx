import { motion } from 'framer-motion';
import { Smartphone, AppWindow, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { services } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  AppWindow,
  Globe,
  Cpu,
};

const serviceColors = [
  'bg-slate-900 border-slate-800',
  'bg-primary border-primary',
  'bg-slate-900 border-slate-800',
  'bg-primary border-primary',
];

export const Services = () => {
  return (
    <section id="services" className="py-section px-6 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block">Capabilities</span>
          <h2 className="text-section font-display text-slate-900 tracking-tight mb-6">Expertise & <span className="gradient-text">Impact</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide high-science engineering for high-growth businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -8 }}
                className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className={`w-14 h-14 rounded-2xl ${index % 2 === 0 ? 'bg-slate-900' : 'bg-primary'} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.description}</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                  Explore <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
