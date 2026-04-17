import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email us', value: 'mail@codefons.com', color: 'text-primary bg-primary/5', href: 'mailto:mail@codefons.com' },
  { icon: Phone, label: 'Call us', value: '+91 8803362705', color: 'text-secondary bg-secondary/5', href: 'tel:+918803362705' },
  { icon: MapPin, label: 'Visit us', value: 'Rajbagh, Srinagar, India', color: 'text-accent-cyan bg-accent-cyan/5', href: 'https://www.google.com/maps/search/?api=1&query=Rajbagh+Srinagar+India' },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-section px-6 relative overflow-hidden bg-slate-50">
      {/* Beautiful Abstract Map Background */}
      <div className="absolute inset-0 z-0 opacity-[0.2] overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="mapGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {/* Abstract World/India Dots Pattern */}
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
          
          {/* Glowing Beacon for Srinagar */}
          <motion.g
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <circle cx="650" cy="300" r="100" fill="url(#mapGradient)" />
            <circle cx="650" cy="300" r="10" fill="var(--primary)" />
            <motion.circle
              cx="650" cy="300"
              initial={{ r: 10, opacity: 1 }}
              animate={{ r: 50, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
            />
          </motion.g>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5 block">Connect</span>
            <h2 className="text-section font-display text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Let's Engineer Your <span className="gradient-text-warm">Next Success</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed">
              Have a complex problem? We have the engineering brainpower to solve it. Contact us to start your journey.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Visit us' ? "_blank" : undefined}
                  rel={item.label === 'Visit us' ? "noopener noreferrer" : undefined}
                  className={`group relative flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 hover:border-primary/20 transition-all duration-300 shadow-sm overflow-hidden block ${
                    item.label === 'Visit us' ? 'sm:col-span-2' : ''
                  }`}
                >
                  {item.label === 'Visit us' && (
                    <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                        <pattern id="cardDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="0.5" fill="#94a3b8" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#cardDots)" />
                        <motion.g
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <circle cx="300" cy="100" r="40" fill="var(--primary)" fillOpacity="0.1" />
                          <circle cx="300" cy="100" r="4" fill="var(--primary)" />
                          <motion.circle
                            cx="300" cy="100"
                            initial={{ r: 4, opacity: 1 }}
                            animate={{ r: 30, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity }}
                            fill="none"
                            stroke="var(--primary)"
                            strokeWidth="1"
                          />
                        </motion.g>
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    </div>
                  )}

                  <div className={`relative z-10 w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                    <item.icon size={24} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative group/form">
            {/* Modern Animated Border Effect */}
            <div className="absolute -inset-[2px] rounded-[34px] sm:rounded-[42px] lg:rounded-[46px] bg-gradient-to-r from-primary via-accent-cyan to-secondary opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-1000 animate-pulse-slow" />
            
            <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-2xl shadow-slate-200 relative border border-slate-100 overflow-hidden">
               {/* Animated Edge Light (Infinite Trail) */}
               <motion.div
                  animate={{ 
                    rotate: 360 
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -inset-[200%] bg-gradient-conic from-primary/40 via-transparent to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none"
               />

               <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-primary/10 animate-pulse">
                <Sparkles size={24} className="sm:hidden" />
                <Sparkles size={32} className="hidden sm:block" />
              </div>

              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                    <input type="text" placeholder="Your Name" className="premium-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                    <input type="email" placeholder="email@address.com" className="premium-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Project Type</label>
                  <select className="premium-input appearance-none bg-slate-50">
                    <option>SaaS Web App</option>
                    <option>Mobile Application</option>
                    <option>AI / ML Implementation</option>
                    <option>Cloud Infrastructure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Message</label>
                  <textarea rows={4} placeholder="Tell us about your project challenges..." className="premium-input resize-none" />
                </div>

                <button type="submit" className="w-full py-5 rounded-full font-bold bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3">
                  Send Your Inquiry
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
