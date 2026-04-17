import { Github, Twitter, Linkedin, Instagram, Sparkles, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Github, href: '#', label: 'Github' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

const footerLinks = {
  Capabilities: ['Web Application', 'Mobile Ecosystems', 'AI / ML Engines', 'Cloud Systems'],
  Studio: ['Our Philosophy', 'Project Archive', 'Engineering Blog', 'Join CodeFONS'],
  Legal: ['Privacy Protocol', 'Terms of Service'],
};

export const Footer = () => {
  return (
    <footer className="bg-white px-6 py-20 overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold font-display text-slate-900 tracking-tight">CodeFONS</span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">subsidiary of QuantaFONS</p>
              </div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              Designing and building the infrastructure of the next digital era. Premium engineering for visionary leaders.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 md:col-span-1">
              <h4 className="font-bold text-slate-900 mb-8 text-xs uppercase tracking-[0.2em]">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-15 border-t border-slate-100 flex flex-col items-center justify-center gap-10 text-center">
          <a 
            href="https://www.codefons.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-3 rounded-full border border-slate-200 text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all duration-500 bg-white shadow-sm hover:shadow-xl flex items-center gap-3"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-slate-300">Designed by</span>
              <div className="flex items-center gap-2">
                <span className="text-primary group-hover:text-primary-dark transition-colors">CodeFONS</span>
                {/* Custom CF Sign Monogram */}
                <div className="flex items-center justify-center w-5 h-5 rounded-lg bg-slate-900 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 100 100" className="w-3 h-3 fill-current">
                    <path d="M40 30h30v10H50v10h20v10H50v10h-20V30zm-20 0h10v40H20V30z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <p className="text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} QuantaFONS Pvt Ltd.
          </p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
    </footer>
  );
};
