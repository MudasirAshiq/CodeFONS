import { motion } from 'framer-motion';
import { Rocket, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Rocket,
    title: 'Our Mission',
    desc: 'To empower businesses with scalable, high-quality digital products that drive growth and innovation.',
    iconBg: 'bg-primary/5 text-primary',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the global leader in Generative AI and cross-platform development solutions.',
    iconBg: 'bg-secondary/5 text-secondary',
  },
  {
    icon: Heart,
    title: 'Our Values',
    desc: 'Integrity, innovation, and client-centricity at every stage of the journey we share together.',
    iconBg: 'bg-accent-pink/5 text-accent-pink',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-section px-6 relative overflow-hidden bg-white">
      {/* Modern Background Design: Animated Mesh Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual with Professional Architectural Animation */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto flex items-center justify-center">
              {/* Professional Background: Deep Architecture Field */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px] border border-slate-100/50">
                {/* Modern Image Background (Prominent on Mobile) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-[0.4] sm:opacity-[0.2]"
                  style={{ backgroundImage: 'url("/architectural_abstract_bg.png")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent" />
                
                {/* Subtle soft glowing core */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" />
                
                {/* Structural Geometric Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="100%" stopColor="var(--accent-cyan)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Rotating Structural Grid */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: 'center' }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={i}
                        x1="200" y1="200"
                        x2={200 + 400 * Math.cos((i * 30 * Math.PI) / 180)}
                        y2={200 + 400 * Math.sin((i * 30 * Math.PI) / 180)}
                        stroke="url(#lineGrad)"
                        strokeWidth="0.5"
                      />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <circle
                        key={i}
                        cx="200" cy="200"
                        r={40 + i * 50}
                        stroke="url(#lineGrad)"
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray="4 8"
                      />
                    ))}
                  </motion.g>
                </svg>

                {/* Slow drifting light accents */}
                <motion.div
                  animate={{ 
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
                />
              </div>

              {/* Minimalist Precision Orbital */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-full h-full rounded-full border border-slate-100/40"
                >
                  <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-900 shadow-xl" />
                </motion.div>
                <div className="absolute w-[85%] h-[85%] rounded-full border border-slate-50/50" />
              </div>

              {/* Main Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-7xl sm:text-8xl lg:text-[10rem] font-black font-display text-slate-900 tracking-tighter mb-2 leading-none">20+</div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-primary font-black px-4">Years of Team Experience</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block">Who We Are</span>
            <h2 className="text-section font-display text-slate-900 mb-8 leading-[1.1]">
              Pioneering <span className="gradient-text">Digital Excellence</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              CodeFONS is a boutique engineering firm. We bridge the gap between high-science concepts and scalable digital products.
            </p>

            <div className="space-y-4">
              {values.map((item) => (
                <div key={item.title} className="group flex gap-6 items-start p-6 rounded-3xl hover:bg-slate-50 transition-all duration-300">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
