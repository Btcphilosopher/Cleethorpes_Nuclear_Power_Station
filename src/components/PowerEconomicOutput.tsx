import { Home, Flame, Shield, Briefcase, Landmark, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { DashboardState } from '../types';

interface PowerEconomicOutputProps {
  state: DashboardState;
}

export default function PowerEconomicOutput({ state }: PowerEconomicOutputProps) {
  // Calculations based on reactor state
  const capacity = state.activeReactors * 1600; // in MW
  const twhOutput = state.activeReactors * 14; // in TWh
  const percentDemand = state.activeReactors * 9; // in %
  const currentGVA = state.activeReactors * 200; // in £M

  // SVG Donut calculations
  // Circumference of radius 50 is 2 * pi * 50 = 314.16
  const r = 50;
  const circ = 2 * Math.PI * r;
  const activePercent = state.activeReactors * 50; // 0%, 50%, 100%
  const strokeDashoffset = circ - (activePercent / 100) * circ;

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Powering Britain's Future */}
      <div className="flex flex-col justify-between rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm relative overflow-hidden">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="relative">
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Powering Britain's Future
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Reliable baseload power for a net zero future.
          </p>
        </div>

        {/* Three core bullet layouts */}
        <div className="my-8 flex flex-col gap-5 relative z-10">
          
          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light border border-brand-blue-accent text-brand-gold">
              <Home className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold text-slate-900 leading-tight">Energy Independence</h4>
              <p className="mt-1 text-xs text-slate-500">
                Supports home-grown energy security and drastically reduces national reliance on volatile fossil fuel imports.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light border border-brand-blue-accent text-brand-gold">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold text-slate-900 leading-tight">Industry Decarbonisation</h4>
              <p className="mt-1 text-xs text-slate-500">
                Enables clean, reliable decarbonisation of British heavy industries, domestic heating, and electric transport.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light border border-brand-blue-accent text-brand-gold">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold text-slate-900 leading-tight">National Security</h4>
              <p className="mt-1 text-xs text-slate-500">
                Strengthens national security, power grid resilience, and critical infrastructure against external energy shocks.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-brand-blue-accent pt-4">
          <span className="font-mono text-[10px] text-brand-gold/80 tracking-widest uppercase">
            BASELOAD POWER COMPLIANCE
          </span>
        </div>
      </div>

      {/* Economic Impact */}
      <div className="flex flex-col justify-between rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Economic Impact
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Investment and employment metrics.
          </p>
        </div>

        {/* Dynamic statistics block */}
        <div className="my-6 grid grid-cols-2 gap-4">
          
          <div className="rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent p-4">
            <div className="flex items-center gap-2 text-brand-gold">
              <Landmark className="h-4 w-4" />
              <span className="font-mono text-xs text-slate-500">Investment</span>
            </div>
            <p className="mt-1 font-display text-2xl font-black text-slate-900 tracking-tight">£6-8B</p>
            <p className="text-[10px] text-slate-500 font-sans mt-0.5 uppercase tracking-wide">Billion CAPEX</p>
          </div>

          <div className="rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent p-4">
            <div className="flex items-center gap-2 text-brand-gold">
              <Briefcase className="h-4 w-4" />
              <span className="font-mono text-xs text-slate-500">Construction</span>
            </div>
            <p className="mt-1 font-display text-2xl font-black text-slate-900 tracking-tight">10,000+</p>
            <p className="text-[10px] text-slate-500 font-sans mt-0.5 uppercase tracking-wide">Direct Jobs Created</p>
          </div>

          <div className="rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent p-4">
            <div className="flex items-center gap-2 text-brand-gold">
              <Shield className="h-4 w-4" />
              <span className="font-mono text-xs text-slate-500">Operations</span>
            </div>
            <p className="mt-1 font-display text-2xl font-black text-slate-900 tracking-tight">1,000+</p>
            <p className="text-[10px] text-slate-500 font-sans mt-0.5 uppercase tracking-wide">Skilled Long-term Jobs</p>
          </div>

          <div className="rounded-lg bg-brand-blue-light/50 border border-brand-blue-accent p-4">
            <div className="flex items-center gap-2 text-brand-gold">
              <TrendingUp className="h-4 w-4" />
              <span className="font-mono text-xs text-slate-500">GVA Output</span>
            </div>
            <p className="mt-1 font-display text-2xl font-black text-slate-900 tracking-tight">
              {currentGVA > 0 ? `£${currentGVA}M+` : '£0'}
            </p>
            <p className="text-[10px] text-slate-500 font-sans mt-0.5 uppercase tracking-wide">GVA per Year to UK</p>
          </div>

        </div>

        {/* Footer of the economic card */}
        <div className="border-t border-brand-blue-accent pt-4 flex items-center gap-2 bg-brand-blue-light/50 p-2 rounded">
          <TrendingUp className="h-4 w-4 text-brand-gold shrink-0" />
          <span className="text-xs text-slate-600">
            Contributing <strong className="text-slate-900 font-semibold">£400M+ GVA annually</strong> at maximum 3.2GW operational capacity.
          </span>
        </div>
      </div>

      {/* Clean Energy Output */}
      <div className="flex flex-col justify-between rounded-xl border border-brand-blue-accent bg-brand-blue p-6 shadow-sm relative">
        <div>
          <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-gold uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Clean Energy Output
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Proportion of national demand satisfied.
          </p>
        </div>

        {/* SVG Interactive Donut Chart */}
        <div className="my-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="relative h-32 w-32 shrink-0">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="10"
              />
              {/* Active Capacity Circle */}
              <motion.circle
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="10"
                strokeDasharray={circ}
                initial={{ strokeDashoffset: circ }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                strokeLinecap="round"
                style={{ filter: state.activeReactors > 0 ? 'drop-shadow(0 0 4px rgba(79,70,229,0.2))' : 'none' }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-xl font-black text-slate-900 leading-none">
                {capacity.toLocaleString()}
              </span>
              <span className="font-mono text-[9px] font-bold text-brand-gold uppercase tracking-wider mt-0.5">
                MW POWER
              </span>
              <span className="text-[8px] text-slate-500 font-mono mt-0.5">
                {state.activeReactors === 2 ? 'MAX CLEAN' : state.activeReactors === 1 ? '50% LOAD' : 'OFFLINE'}
              </span>
            </div>
          </div>

          {/* Dynamic statistics labels */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-black text-slate-900 tracking-tight">
                  ~{twhOutput > 0 ? twhOutput : '0'} TWh
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wide">
                OF ELECTRICITY PER YEAR
              </p>
            </div>

            <div className="border-t border-brand-blue-accent pt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-black text-slate-900 tracking-tight">
                  ~{percentDemand > 0 ? percentDemand : '0'}%
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wide">
                OF THE UK'S CURRENT ELECTRICITY DEMAND
              </p>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="border-t border-brand-blue-accent pt-4 text-[10px] text-slate-500 font-mono flex justify-between uppercase">
          <span>CO2 OPERATIONAL: ~0g/kWh</span>
          <span className="text-emerald-600 font-bold">100% Zero-Carbon</span>
        </div>
      </div>

    </section>
  );
}
