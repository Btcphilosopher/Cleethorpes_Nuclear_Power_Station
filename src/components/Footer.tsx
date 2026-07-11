import { MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white border-t border-slate-800 mt-12 py-10 relative overflow-hidden">
      {/* Soft gradient bottom glow */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between border-b border-slate-800 pb-8">
          
          {/* Left Title block */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
              CLEETHORPES NUCLEAR POWER STATION
            </span>
            <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase font-bold">
              CLEAN ENERGY. STRONG ECONOMY. SECURE FUTURE.
            </span>
          </div>

          {/* Right badges */}
          <div className="flex flex-wrap items-center gap-6">
            
            {/* UK Flag Badge */}
            <div className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 shadow-lg backdrop-blur-sm">
              {/* High-quality SVG Union Jack */}
              <div className="relative w-12 h-8 rounded overflow-hidden shadow-md shrink-0 border border-white/10">
                <svg className="w-full h-full" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                  <clipPath id="t">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-mono text-[9px] text-slate-400 tracking-wider font-bold uppercase">DELIVERING FOR</span>
                <span className="font-display text-xs text-white font-bold tracking-wide uppercase">BRITAIN'S FUTURE</span>
              </div>
            </div>

            {/* Futurist Building Logo Badge */}
            <div className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 shadow-lg backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
                  <rect x="8" y="10" width="8" height="6" rx="1" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-mono text-[9px] text-slate-400 tracking-wider font-bold uppercase">BUILDING A</span>
                <span className="font-display text-xs text-indigo-300 font-bold tracking-wide uppercase">GREATER FUTURE FOR ALL</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400 font-mono">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-indigo-400" />
              Lincolnshire Coast, UK
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-indigo-400" />
              sheffieldfuturist.co.uk
            </span>
          </div>
          <div>
            &copy; 2026 Sheffield Futurist Infrastructure. Licensed under the UK Nuclear Energy (Financing) Act.
          </div>
        </div>

      </div>
    </footer>
  );
}
