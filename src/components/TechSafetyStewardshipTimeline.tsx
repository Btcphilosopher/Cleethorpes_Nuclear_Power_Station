import { useState } from 'react';
import { Eye, Shield, Leaf, Calendar, Check, Compass, ChevronRight, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DashboardState, SafetySystem, TimelineEvent } from '../types';

import safetyTechImg from '../assets/images/cleethorpes_safety_tech_1783793734377.jpg';

interface TechSafetyStewardshipTimelineProps {
  state: DashboardState;
}

export default function TechSafetyStewardshipTimeline({ state }: TechSafetyStewardshipTimelineProps) {
  const [selectedSafetyId, setSelectedSafetyId] = useState<string | null>(null);
  const [activeTimelineYear, setActiveTimelineYear] = useState<string>("2025");

  const safetyFeatures: SafetySystem[] = [
    {
      id: "gen3",
      name: "Generation III+ Reactor",
      category: "Reactor Class",
      description: "State-of-the-art thermal reactors representing the pinnacle of modern nuclear design.",
      howItWorks: "Uses pressurized water design with evolutionary improvements in fuel efficiency, thermal performance, and integrated digital safeguards."
    },
    {
      id: "passive",
      name: "Passive Safety Systems",
      category: "Fail-safe Mechanisms",
      description: "Safety cooling loops operating fully independently of human operator actions, electricity, or mechanical pumps.",
      howItWorks: "Utilizes gravity, natural convection, and pressurized gas tanks to safely cool the reactor core automatically even in complete station blackout."
    },
    {
      id: "fuel",
      name: "Advanced Fuel Efficiency",
      category: "Fuel Design",
      description: "Optimized uranium oxide fuel cladding and geometry to maximize power yield.",
      howItWorks: "Extracts up to 20% more thermal energy per unit of uranium fuel, significantly reducing high-level radioactive waste volumes."
    },
    {
      id: "contain",
      name: "Robust Containment",
      category: "Structural Barrier",
      description: "Double-walled reinforced concrete containment dome designed to survive extreme impacts.",
      howItWorks: "Featuring a 1.8-meter thick inner steel-lined concrete vessel and a outer concrete shell engineered to withstand direct passenger aircraft impacts."
    },
    {
      id: "digital",
      name: "Digital Monitoring",
      category: "Grid Sync & Telemetry",
      description: "Real-time AI-supported telemetry monitoring millions of sensor data feeds.",
      howItWorks: "Advanced diagnostics systems model and predict thermal anomalies, optimizing maintenance schedules and preventing unexpected system downtime."
    },
    {
      id: "seismic",
      name: "Seismic & Flood Resilient Design",
      category: "Environmental Defense",
      description: "Station is engineered with redundant sea defenses and shock-absorbing foundation pads.",
      howItWorks: "Sited well above historic storm surge levels, surrounded by custom concrete seawalls, and built on seismic dampening isolators."
    },
    {
      id: "ext",
      name: "Designed for a 60+ Year Life",
      category: "Lifespan",
      description: "Long-life materials resistant to neutron embrittlement and stress corrosion.",
      howItWorks: "Structural steel alloys and reactor vessel components are engineered with micro-alloyed elements to prolong lifecycle with option for extension to 80 years."
    }
  ];

  const environmentalItems = [
    {
      title: "Near-Zero Operational Carbon",
      desc: "Delivers massive baseload electricity with ~0g of CO2 emissions per kWh during operations, supporting UK Net Zero goals."
    },
    {
      title: "Marine Ecosystem Protection",
      desc: "Equipped with state-of-the-art acoustic fish deterrents and low-velocity cooling intakes to protect local marine biodiversity."
    },
    {
      title: "Minimised Waste & Recycling",
      desc: "Robust dry-cask storage and future-proof design to facilitate nuclear fuel recycling, reducing long-term geological burden."
    },
    {
      title: "Biodiverse Site Design",
      desc: "Sustains coastal wetlands, wildflower meadows, and sand dunes around the plant footprint to create a local ecological sanctuary."
    },
    {
      title: "Supporting UK Net Zero 2050",
      desc: "Displaces up to 14 million tonnes of carbon dioxide annually, equivalent to removing nearly 4 million combustion cars from the road."
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2025",
      title: "Site Selection & Planning",
      description: "Comprehensive environmental impact surveys, public consultations in Lincolnshire, and initial geological soil boring drills.",
      status: "completed"
    },
    {
      year: "2026 - 2028",
      title: "Planning Approval & Detailed Design",
      description: "Reviewing the Development Consent Order (DCO) and final engineering blueprint lock with the Office for Nuclear Regulation.",
      status: "in-progress"
    },
    {
      year: "2029 - 2031",
      title: "Site Preparation & Enabling Works",
      description: "Ground grading, building deep-water marine offloading jetties, and grid connection line installations.",
      status: "future"
    },
    {
      year: "2032 - 2036",
      title: "Construction Phase",
      description: "Pouring heavy nuclear-grade concrete, assembling the reactor containment vessels, and mounting cooling structures.",
      status: "future"
    },
    {
      year: "2037",
      title: "First Power",
      description: "Loading fuel assemblies, performing low-power critical physics testing, and delivering first megawatts to the national grid.",
      status: "future"
    },
    {
      year: "2037+",
      title: "Full Operational Output",
      description: "Synchronizing both reactors to deliver 3,200MW of steady 24/7 clean baseload electricity to power ~6 million homes.",
      status: "future"
    }
  ];

  const activeEvent = timelineEvents.find(e => e.year === activeTimelineYear) || timelineEvents[0];

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      
      {/* Technology & Safety Card (4 cols) */}
      <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm lg:col-span-4 flex flex-col justify-between">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Technology & Safety
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Click on any feature to inspect technical details.
          </p>
        </div>

        {/* Reactor Image */}
        <div className="relative my-4 overflow-hidden rounded-lg border border-brand-blue-accent aspect-video shrink-0">
          <img
            src={safetyTechImg}
            alt="Nuclear technology and safety pool"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-3">
            <span className="text-[10px] font-mono tracking-widest text-white font-bold uppercase">
              GEN III+ CONTAINMENT CORE
            </span>
          </div>
        </div>

        {/* Bullet Points with Interactive Modal/Inspectors */}
        <div className="flex-1 flex flex-col gap-2 mt-2">
          {safetyFeatures.map((feat) => {
            const isSelected = selectedSafetyId === feat.id;
            return (
              <div key={feat.id} className="relative">
                <button
                  onClick={() => setSelectedSafetyId(isSelected ? null : feat.id)}
                  className={`w-full text-left flex items-center justify-between p-2 rounded text-xs transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-gold text-white font-semibold'
                      : 'hover:bg-brand-blue-light text-slate-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-brand-gold'}`} />
                    {feat.name}
                  </span>
                  <Eye className={`h-3.5 w-3.5 opacity-80 ${isSelected ? 'text-white' : 'text-brand-gold'}`} />
                </button>

                {/* Inspect Details Drawer */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-brand-blue-light p-3 rounded mt-1 border border-brand-blue-accent text-[11px] leading-relaxed text-slate-700 flex flex-col gap-1 shadow-inner"
                    >
                      <span className="font-mono text-[9px] font-bold text-brand-gold uppercase tracking-wider">
                        {feat.category}
                      </span>
                      <p className="text-slate-900 font-medium">{feat.description}</p>
                      <p className="text-slate-500 border-t border-brand-blue-accent pt-1.5 mt-1">
                        <strong className="text-brand-gold">How it works:</strong> {feat.howItWorks}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Environmental Stewardship (4 cols) */}
      <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm lg:col-span-4 flex flex-col justify-between">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Environmental Stewardship
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Delivering clean energy while protecting Lincolnshire's ecosystems.
          </p>
        </div>

        {/* Environmental checklist */}
        <div className="my-6 flex-1 flex flex-col gap-4 justify-center">
          {environmentalItems.map((item, idx) => (
            <div key={idx} className="flex gap-3 group">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold text-slate-900 group-hover:text-brand-teal transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-xs text-slate-500 leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-brand-blue-accent pt-4 text-center">
          <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold">
            🌿 ECOLOGICALLY SAFEGUARDED DESIGN
          </span>
        </div>
      </div>

      {/* Project Timeline (4 cols) */}
      <div className="rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm lg:col-span-4 flex flex-col justify-between relative overflow-hidden">
        {/* Crane background watermark */}
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-[0.04] pointer-events-none">
          <svg className="w-full h-full text-brand-gold" viewBox="0 0 100 100" fill="currentColor">
            <path d="M10,90 L20,90 L20,20 L30,20 L50,10 L90,10 L90,15 L60,15 L25,32 L25,90 L30,90" />
            <line x1="20" y1="20" x2="25" y2="90" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative">
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Timeline
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Click on any timeline step to inspect deliverables.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical Steps Grid */}
        <div className="my-6 flex-1 flex flex-col gap-3 justify-center relative">
          
          {/* Vertical joining line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-brand-blue-accent" />

          {timelineEvents.map((evt) => {
            const isActive = activeTimelineYear === evt.year;
            
            const getMarkerStyle = () => {
              if (evt.status === 'completed') return 'border-brand-gold bg-brand-gold text-white';
              if (evt.status === 'in-progress') return 'border-amber-500 bg-white text-amber-600 animate-pulse';
              return 'border-brand-blue-accent bg-white text-slate-400';
            };

            return (
              <button
                key={evt.year}
                onClick={() => setActiveTimelineYear(evt.year)}
                className={`flex gap-4 items-center text-left w-full p-2 rounded transition-all duration-200 relative z-10 cursor-pointer ${
                  isActive ? 'bg-brand-blue-light border-l-2 border-brand-gold' : 'hover:bg-brand-blue-light/50'
                }`}
              >
                {/* Bullet node marker */}
                <div className={`h-8 w-8 shrink-0 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-bold ${getMarkerStyle()}`}>
                  {evt.status === 'completed' ? (
                    <Check className="h-4 w-4 stroke-[3]" />
                  ) : (
                    <span>•</span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-black text-slate-900">{evt.year}</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold tracking-wider ${
                      evt.status === 'completed'
                        ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                        : evt.status === 'in-progress'
                        ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                        : 'bg-brand-blue-light text-slate-400 border border-brand-blue-accent'
                    }`}>
                      {evt.status === 'completed' ? 'Done' : evt.status === 'in-progress' ? 'Active' : 'Planned'}
                    </span>
                  </div>
                  <h4 className={`text-xs font-semibold ${isActive ? 'text-brand-gold font-bold' : 'text-slate-600'}`}>
                    {evt.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Event Details Panel */}
        <div className="bg-brand-blue-light p-4 rounded-lg border border-brand-blue-accent shadow-inner">
          <div className="flex items-center gap-1.5 text-brand-gold font-mono text-[9px] uppercase tracking-wider font-bold mb-1">
            <Calendar className="h-3 w-3" />
            <span>Scope Deliverables: {activeEvent.year}</span>
          </div>
          <p className="text-xs text-slate-600 leading-normal">
            {activeEvent.description}
          </p>
        </div>

      </div>

    </section>
  );
}
