import { useState } from 'react';
import { Star, School, Award, ArrowUpRight, Zap, Leaf, CheckCircle, Flame, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DashboardState, EnergySource } from '../types';

import academyImg from '../assets/images/cleethorpes_academy_1783793749960.jpg';

interface CommunityAtGlanceComparisonProps {
  state: DashboardState;
}

export default function CommunityAtGlanceComparison({ state }: CommunityAtGlanceComparisonProps) {
  const [selectedSource, setSelectedSource] = useState<string>("Nuclear (Cleethorpes)");

  // Calculations based on active reactors
  const currentOutput = state.activeReactors * 1600;
  const currentHomes = state.activeReactors * 3;

  const communityInvestment = [
    {
      title: "Local Supply Chain",
      desc: "Committing over £1.5B in contracts for regional manufacturers, steel suppliers, and construction firms across Lincolnshire."
    },
    {
      title: "Apprenticeships & Training",
      desc: "Creating 500+ fully-funded modern engineering and operations apprenticeships at the Cleethorpes Energy Academy."
    },
    {
      title: "Community Investment Fund",
      desc: "A £20M local community endowment fund dedicated to upgrading North East Lincolnshire parks, libraries, and civic centers."
    },
    {
      title: "Education & Innovation",
      desc: "Active academic partnerships with regional universities to pioneer cutting-edge carbon-free technologies."
    }
  ];

  const energySources: EnergySource[] = [
    {
      name: "Nuclear (Cleethorpes)",
      output: "~28 TWh",
      outputValue: 28,
      co2: "~0 g/kWh",
      co2Value: 0,
      reliability: 5,
      description: "Steady, 24/7 carbon-free baseload power operating at a 92% capacity factor. Requires minimal physical land footprint compared to weather-dependent sources."
    },
    {
      name: "Offshore Wind",
      output: "~10 TWh",
      outputValue: 10,
      co2: "~10 g/kWh",
      co2Value: 10,
      reliability: 4,
      description: "Clean, sustainable generation with a 40-45% capacity factor in the North Sea. Highly active during winter winds but requires grid storage or backup during periods of calm."
    },
    {
      name: "Gas (CCGT)",
      output: "~20 TWh",
      outputValue: 20,
      co2: "~400 g/kWh",
      co2Value: 400,
      reliability: 3,
      description: "Highly responsive fossil-fuel generators with high dispatchability, but emits substantial carbon dioxide and leaves the UK vulnerable to global fossil gas price spikes."
    },
    {
      name: "Coal",
      output: "~20 TWh",
      outputValue: 20,
      co2: "~820 g/kWh",
      co2Value: 820,
      reliability: 1,
      description: "Traditional carbon-heavy fossil fuel currently being phased out of the UK power grid due to extreme greenhouse gas intensity and air pollution impacts."
    }
  ];

  const activeSourceInfo = energySources.find(s => s.name === selectedSource) || energySources[0];

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      
      {/* Investing in Communities (4 cols) */}
      <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm lg:col-span-4 flex flex-col justify-between">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Investing in Communities
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Delivering lasting benefits for North East Lincolnshire.
          </p>
        </div>

        {/* Energy Academy Image Overlay Card */}
        <div className="relative my-4 overflow-hidden rounded-lg border border-brand-blue-accent aspect-video shrink-0 group">
          <img
            src={academyImg}
            alt="Cleethorpes Energy Academy Building"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
            <div className="flex items-center gap-1.5 text-brand-gold font-mono text-[9px] uppercase tracking-wider font-bold mb-0.5">
              <School className="h-3 w-3 animate-pulse" />
              <span>Skills Hub Launching 2026</span>
            </div>
            <h3 className="font-display text-sm font-bold text-white tracking-wide">
              CLEETHORPES ENERGY ACADEMY
            </h3>
          </div>
        </div>

        {/* Community Bullets */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          {communityInvestment.map((item, idx) => (
            <div key={idx} className="border-l-2 border-brand-gold/30 hover:border-brand-gold pl-3 py-1 transition-all duration-200">
              <h4 className="text-xs font-semibold text-slate-900 leading-tight">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-brand-blue-accent pt-4 text-center mt-2">
          <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest font-bold">
            UK ENGINEERING CAREERS HUB
          </span>
        </div>
      </div>

      {/* At A Glance (4 cols) */}
      <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm lg:col-span-4 flex flex-col justify-between">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            At a Glance
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Core station metrics and social impacts.
          </p>
        </div>

        {/* Big checklist list with glowing radial checks */}
        <div className="my-6 flex-1 flex flex-col gap-4 justify-center">
          
          <div className="flex gap-3 items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-light text-brand-gold shrink-0 border border-brand-blue-accent">
              <Zap className="h-3 w-3" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 font-semibold">Up to {currentOutput > 0 ? `${currentOutput.toLocaleString()}MW` : '0MW'}</strong> clean power output
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-light text-brand-gold shrink-0 border border-brand-blue-accent">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 font-semibold">Enough to power {currentHomes > 0 ? `~${currentHomes} million` : '0'}</strong> homes
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-light text-brand-gold shrink-0 border border-brand-blue-accent">
              <CheckCircle className="h-3 w-3" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 font-semibold">60+ years</strong> of reliable operational lifetime
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-light text-brand-gold shrink-0 border border-brand-blue-accent">
              <Award className="h-3 w-3" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 font-semibold">Thousands of jobs</strong> created during building and operations
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-light text-brand-gold shrink-0 border border-brand-blue-accent">
              <School className="h-3 w-3" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 font-semibold">Billions in economic</strong> benefits to Cleethorpes region
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-light text-brand-gold shrink-0 border border-brand-blue-accent">
              <Sparkles className="h-3 w-3" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 font-semibold">A cleaner, stronger</strong> Britain leading net zero targets
            </div>
          </div>

        </div>

        <div className="border-t border-brand-blue-accent pt-4 text-center">
          <span className="font-mono text-[10px] text-brand-gold/80 uppercase tracking-widest font-bold">
            CLEETHORPES ON THE MAP
          </span>
        </div>
      </div>

      {/* Comparison: Energy Sources (4 cols) */}
      <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm lg:col-span-4 flex flex-col justify-between">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Comparison: Energy Sources (Per Year)
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Click on any source row to view technical profiles.
          </p>
        </div>

        {/* Energy Source Comparison Table */}
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-brand-blue-accent text-slate-500 text-[10px] uppercase">
                <th className="pb-2 font-semibold">Source</th>
                <th className="pb-2 font-semibold text-right">Output</th>
                <th className="pb-2 font-semibold text-right">CO2</th>
                <th className="pb-2 font-semibold text-right">Reliability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-blue-accent/30">
              {energySources.map((source) => {
                const isSelected = selectedSource === source.name;
                const isCleethorpes = source.name.includes("Cleethorpes");
                
                return (
                  <tr
                    key={source.name}
                    onClick={() => setSelectedSource(source.name)}
                    className={`cursor-pointer transition-colors duration-150 ${
                      isSelected
                        ? 'bg-brand-blue-light/80 text-slate-900 font-bold'
                        : isCleethorpes
                        ? 'hover:bg-brand-blue-light/50 text-brand-gold font-semibold'
                        : 'hover:bg-brand-blue-light/30 text-slate-600'
                    }`}
                  >
                    <td className="py-2.5 px-1 flex items-center gap-1.5">
                      {isCleethorpes && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
                      )}
                      <span className={isCleethorpes ? "font-bold text-brand-gold" : ""}>{source.name}</span>
                    </td>
                    <td className="py-2.5 text-right">{source.output}</td>
                    <td className={`py-2.5 text-right ${source.co2Value === 0 ? 'text-emerald-600 font-semibold' : ''}`}>{source.co2}</td>
                    <td className="py-2.5 text-right pr-1">
                      <div className="flex items-center justify-end text-brand-gold gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                              key={i}
                              className={`h-2.5 w-2.5 ${i < source.reliability ? 'fill-current' : 'opacity-20'}`}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Source Mini-Card Info Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSource}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="bg-brand-blue-light p-3 rounded-lg border border-brand-blue-accent text-[11px] leading-relaxed"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-brand-gold uppercase tracking-wider mb-1 font-bold">
              <span>TECHNICAL PROFILE</span>
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <Leaf className="h-3 w-3" />
                {activeSourceInfo.co2Value === 0 ? 'CARBON-FREE' : `${activeSourceInfo.co2Value}g CO2/kWh`}
              </span>
            </div>
            <p className="text-slate-600 leading-normal">
              <strong className="text-slate-900 text-xs block mb-0.5">{activeSourceInfo.name}</strong>
              {activeSourceInfo.description}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}
