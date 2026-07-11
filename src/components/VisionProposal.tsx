import { Droplet, Users, Zap, MapPin, Layers, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { DashboardState } from '../types';

import siteProposalImg from '../assets/images/cleethorpes_site_proposal_1783793719065.jpg';

interface VisionProposalProps {
  state: DashboardState;
}

export default function VisionProposal({ state }: VisionProposalProps) {
  // Dynamically calculate proposal values based on active reactor state
  const currentOutput = state.activeReactors * 1600;
  const currentHomes = state.activeReactors * 3;

  const whyCleethorpesItems = [
    {
      icon: Droplet,
      title: "Cooling Water Access",
      desc: "Direct access to the deep, cold cooling waters of the North Sea for optimal thermal efficiency.",
      highlight: "Direct access to North Sea cooling waters"
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      desc: "Leveraging North East Lincolnshire's strong industrial heritage and skilled maritime/engineering workforce.",
      highlight: "Strong industrial heritage & skilled workforce"
    },
    {
      icon: Zap,
      title: "Grid Infrastructure",
      desc: "Close proximity to high-voltage national grid connection points, minimizing transmission loss.",
      highlight: "Proximity to existing grid infrastructure"
    },
    {
      icon: MapPin,
      title: "Regional Investment",
      desc: "A cornerstone project driving multi-billion pound growth in North East Lincolnshire and the Humber region.",
      highlight: "Regional investment opportunity"
    }
  ];

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      
      {/* Left Column: Vision & Why Cleethorpes (5 cols) */}
      <div className="flex flex-col gap-6 lg:col-span-5">
        
        {/* The Vision */}
        <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold" />
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            The Vision
          </h2>
          <p className="mt-4 font-display text-xl font-bold leading-relaxed text-slate-900 group-hover:text-brand-gold transition-colors duration-200">
            To develop a state-of-the-art nuclear power station in Cleethorpes, featuring the latest Generation III+ reactor technology.
          </p>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            Delivering reliable, low-carbon electricity for millions of homes and businesses across the UK, securing Britain's energy independence for generations.
          </p>
        </div>

        {/* Why Cleethorpes? */}
        <div className="flex-1 rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm">
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Why Cleethorpes?
          </h2>
          
          <div className="grid grid-cols-1 gap-5">
            {whyCleethorpesItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light border border-brand-blue-accent text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-slate-900 group-hover:text-brand-gold transition-colors duration-200">
                    {item.highlight}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right Column: The Proposal & Aerial Rendering (7 cols) */}
      <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm lg:col-span-7 flex flex-col gap-6">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            The Proposal
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Technological specification and community output targets.
          </p>
        </div>

        {/* Info Grid - 5 Bullet parameters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Item 1: Reactors */}
          <div className="flex gap-3 items-start p-3 rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent hover:border-brand-gold/30 transition-all duration-200">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-brand-gold border border-brand-blue-accent">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-lg font-bold text-slate-900 block leading-none">2 x 1,600MW</span>
              <span className="text-xs text-slate-500">Generation III+ Reactors</span>
            </div>
          </div>

          {/* Item 2: Output */}
          <div className="flex gap-3 items-start p-3 rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent hover:border-brand-gold/30 transition-all duration-200">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-brand-gold border border-brand-blue-accent">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-lg font-bold text-slate-900 block leading-none flex items-center gap-1.5">
                Up to {currentOutput.toLocaleString()}MW
                {state.activeReactors < 2 && (
                  <span className="text-[10px] text-amber-600 font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    Slowing ({state.activeReactors} active)
                  </span>
                )}
              </span>
              <span className="text-xs text-slate-500">total electrical output</span>
            </div>
          </div>

          {/* Item 3: Homes Powered */}
          <div className="flex gap-3 items-start p-3 rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent hover:border-brand-gold/30 transition-all duration-200">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-brand-gold border border-brand-blue-accent">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <span className="font-mono text-lg font-bold text-slate-900 block leading-none">
                {currentHomes > 0 ? `~${currentHomes} million` : '0'} homes
              </span>
              <span className="text-xs text-slate-500">powered with clean electricity</span>
            </div>
          </div>

          {/* Item 4: Operational Life */}
          <div className="flex gap-3 items-start p-3 rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent hover:border-brand-gold/30 transition-all duration-200">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-brand-gold border border-brand-blue-accent">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-lg font-bold text-slate-900 block leading-none">60+ year</span>
              <span className="text-xs text-slate-500">planned operational life</span>
            </div>
          </div>

          {/* Item 5: Standards */}
          <div className="flex gap-3 items-start p-3 rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent hover:border-brand-gold/30 transition-all duration-200 md:col-span-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-brand-gold border border-brand-blue-accent">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-sm font-bold text-slate-900 block">Highest Safety & Environmental Standards</span>
              <span className="text-xs text-slate-500">Triple-redundant emergency cooling systems & structural defenses</span>
            </div>
          </div>

        </div>

        {/* Proposed Site Image Card */}
        <div className="relative mt-auto overflow-hidden rounded-xl border border-brand-blue-accent">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={siteProposalImg}
              alt="Cleethorpes Proposed Nuclear Site rendering"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Label Banner overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm px-4 py-3 border-t border-brand-blue-accent flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-wider text-brand-gold uppercase font-bold">
              PROPOSED SITE: CLEETHORPES, NORTH EAST LINCOLNSHIRE
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <MapPin className="h-3.5 w-3.5 text-brand-gold animate-bounce" />
              <span>Humber Estuary</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
