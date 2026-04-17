import { motion } from 'framer-motion';

const tech = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Python', color: '#3776AB' },
  { name: 'OpenAI', color: '#00A67E' },
  { name: 'MongoDB', color: '#47A248' },
];

export const TechStack = () => {
  const doubled = [...tech, ...tech];

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4 block">Ecosystem</span>
          <h2 className="text-section font-display text-slate-900 tracking-tight">Our <span className="gradient-text">Frontier Stack</span></h2>
        </div>

        {/* Marquee Row */}
        <div className="relative overflow-hidden py-10">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-marquee flex gap-6 px-6">
            {doubled.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 flex items-center gap-4 transition-all hover:border-primary/20 hover:scale-105 cursor-default"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full shadow-lg"
                  style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}60` }}
                />
                <span className="text-lg font-bold font-display text-slate-800 tracking-tight">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden py-2 mt-2">
          <div className="animate-marquee flex gap-6 px-6" style={{ animationDirection: 'reverse' }}>
            {doubled.map((t, i) => (
              <div
                key={`rev-${i}`}
                className="flex-shrink-0 px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 flex items-center gap-4 transition-all hover:border-primary/20 hover:scale-105 cursor-default"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full shadow-lg"
                  style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}60` }}
                />
                <span className="text-lg font-bold font-display text-slate-800 tracking-tight">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
