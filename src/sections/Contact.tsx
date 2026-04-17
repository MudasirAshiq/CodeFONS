import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email us', value: 'mail@codefons.com', color: 'text-primary bg-primary/5', href: 'mailto:mail@codefons.com' },
  { icon: Phone, label: 'Call us', value: '+91 8803362705', color: 'text-secondary bg-secondary/5', href: 'tel:+918803362705' },
  { icon: MapPin, label: 'Visit us', value: 'Rajbagh, Srinagar, India', color: 'text-accent-cyan bg-accent-cyan/5', href: 'https://www.google.com/maps/search/?api=1&query=Rajbagh+Srinagar+India' },
];

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'SaaS Web App',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!formState.name.trim()) return "Please enter your name.";
    if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) return "Please enter a valid email address.";
    if (!formState.message.trim()) return "Please enter a message.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "602b5470-b912-45a5-bdf1-33c00be906b9",
          name: formState.name,
          email: formState.email,
          project_type: formState.projectType,
          message: formState.message,
          from_name: "QuantaFONS Portfolio",
          subject: `New Project Inquiry from ${formState.name}`
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', projectType: 'SaaS Web App', message: '' });
      } else {
        setErrorMessage(result.message || "Failed to send message.");
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again later.");
      setStatus('error');
    }
  };

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
          {/* Abstract World Patterns */}
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

          {/* Right side - Form Container with Perfect Border Trail */}
          <div className="relative group/form p-[1px] rounded-[32px] sm:rounded-[40px] overflow-hidden transition-all duration-700">
            {/* The Rotating Neon Trail (Layer 0) - Always active for a premium ambient glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-150%] opacity-100 transition-opacity duration-500 z-0"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, #0ea5e9 50%, transparent 60%, transparent 100%)',
              }}
            />

            {/* Main Form Body (Layer 1) - Slightly smaller rounded corners to fit inside p-[1px] */}
            <div className="relative z-10 bg-white/95 backdrop-blur-3xl rounded-[31px] sm:rounded-[39px] p-6 sm:p-10 lg:p-14 shadow-2xl flex flex-col justify-center overflow-hidden h-full">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-primary/10 animate-pulse">
                <Sparkles size={32} />
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center text-center space-y-6 relative z-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={48} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                      <p className="text-slate-500 max-w-xs mx-auto">Thank you for reaching out. Our engineering team will get back to you within 24 hours.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="relative z-10 space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          placeholder="Your Name" 
                          className="premium-input" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          placeholder="email@address.com" 
                          className="premium-input" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Project Type</label>
                      <select 
                        value={formState.projectType}
                        onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                        className="premium-input appearance-none bg-slate-50"
                      >
                        <option>SaaS Web App</option>
                        <option>Mobile Application</option>
                        <option>AI / ML Implementation</option>
                        <option>Cloud Infrastructure</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Message</label>
                      <textarea 
                        rows={4} 
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Tell us about your project challenges..." 
                        className="premium-input resize-none" 
                      />
                    </div>

                    {status === 'error' && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs font-bold flex items-center gap-2 px-1"
                      >
                        <AlertCircle size={14} />
                        {errorMessage}
                      </motion.p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full py-5 rounded-full font-bold bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <>
                          Send Your Inquiry
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
