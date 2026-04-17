import { motion } from 'framer-motion';
import { testimonials } from '../data/content';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-section px-6 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block">Social Proof</span>
          <h2 className="text-section font-display text-slate-900 tracking-tight">Trusted by <span className="gradient-text-warm">Visionaries</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200"
            >
              <Quote size={40} className="text-primary/10 mb-8" />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent-orange text-accent-orange" />
                ))}
              </div>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 italic font-medium">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-400 font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
