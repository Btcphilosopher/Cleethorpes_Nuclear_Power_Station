import { Leaf, Shield, TrendingUp, Compass, Zap, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { DashboardState } from '../types';

import heroImg from '../assets/images/cleethorpes_hero_station_1783793703544.jpg';

interface HeaderProps {
  state: DashboardState;
  onChangeState: (updater: (prev: DashboardState) => DashboardState) => void;
}

export default function Header({ state, onChangeState }: HeaderProps) {
  const handleReactorToggle = (count: number) => {
    onChangeState((prev) => ({
      ...prev,
      activeReactors: count,
    }));
  };

  const getStatusText = () => {
    if (state.activeReactors === 2) return { text: 'FULLY OPERATIONAL', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    if (state.activeReactors === 1) return { text: 'PARTIAL CAPACITY', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    return { text: 'OFFLINE / MAINTENANCE', color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' };
  };

  const status = getStatusText();

  return (
    <header className="relative w-full overflow-hidden border-b border-brand-blue-accent/30 bg-brand-blue-dark">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={heroImg}
          alt="Cleethorpes Nuclear Power Station at Sunset"
          className="h-full w-full object-cover object-center opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-transparent to-brand-blue-dark/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Top Branding Row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs tracking-[0.25em] text-brand-gold font-semibold uppercase">
              Powering the North. Powering Britain.
            </span>
          </div>
          
          {/* Logo */}
          <div className="flex items-center gap-3 bg-brand-blue-dark/60 backdrop-blur-md px-4 py-2 rounded-lg border border-brand-blue-accent/20">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-blue-dark shadow-lg shadow-brand-gold/10">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
                <rect x="8" y="10" width="8" height="6" rx="1" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-wider text-white">SHEFFIELD FUTURIST</span>
              <span className="font-mono text-[10px] tracking-widest text-brand-gold">INFRASTRUCTURE</span>
            </div>
          </div>
        </div>

        {/* Huge Titles */}
        <div className="mt-8 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            CLEETHORPES
            <span className="block mt-1 text-2xl font-semibold tracking-wide text-gray-300 sm:text-3xl md:text-4xl lg:text-5xl font-sans">
              NUCLEAR POWER STATION
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 font-display text-base font-medium uppercase tracking-wider text-brand-gold-light sm:text-lg"
          >
            A new generation of clean energy for a stronger, greener future.
          </motion.p>
        </div>

        {/* Live Simulation Badge */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-brand-blue-accent/30 bg-brand-blue/80 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="font-mono uppercase tracking-wider text-brand-gold-light">LIVE INTERACTIVE DASHBOARD</span>
          </div>
          
          <div className={`rounded-full border px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider ${status.color}`}>
            STATUS: {status.text}
          </div>
        </div>
      </div>

      {/* Clean. Secure. Sovereign Banner + Controls */}
      <div className="relative border-t border-brand-blue-accent bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            
            {/* Left Brand Badge */}
            <div className="flex items-center gap-4 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-brand-blue-accent pb-4 lg:pb-0 lg:pr-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                <Zap className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-wide text-slate-900 uppercase">CLEAN. SECURE. SOVEREIGN.</h3>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Building a world-class nuclear power station on the Lincolnshire coast to deliver energy security, economic growth and a cleaner future.
                </p>
              </div>
            </div>

            {/* Middle Live Station Controls */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-brand-blue-accent pb-4 lg:pb-0 lg:px-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                  <Cpu className="h-3.5 w-3.5 text-brand-gold" />
                  Live Station Control:
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Reactors Active: {state.activeReactors}/2</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 rounded-lg bg-brand-blue-light p-1 border border-brand-blue-accent">
                {[0, 1, 2].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleReactorToggle(num)}
                    className={`relative rounded px-2.5 py-1.5 text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                      state.activeReactors === num
                        ? 'bg-brand-gold text-white shadow-sm'
                        : 'text-slate-500 hover:bg-white hover:text-slate-800'
                    }`}
                  >
                    {num === 0 ? 'OFFLINE' : num === 1 ? '1 REACTOR' : '2 REACTORS'}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Status Badges (Clean Energy, Energy Security, Economic Growth, Net Zero Future) */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-4">
              <div className="flex flex-col items-center text-center p-1 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-light text-brand-teal border border-brand-blue-accent group-hover:bg-brand-teal/10 transition-colors duration-200">
                  <Leaf className="h-4 w-4" />
                </div>
                <span className="mt-2 font-display text-[10px] font-bold tracking-widest text-slate-600 uppercase">CLEAN ENERGY</span>
              </div>

              <div className="flex flex-col items-center text-center p-1 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-light text-brand-teal-light border border-brand-blue-accent group-hover:bg-brand-teal-light/10 transition-colors duration-200">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="mt-2 font-display text-[10px] font-bold tracking-widest text-slate-600 uppercase">ENERGY SECURITY</span>
              </div>

              <div className="flex flex-col items-center text-center p-1 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-light text-brand-gold border border-brand-blue-accent group-hover:bg-brand-gold/10 transition-colors duration-200">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="mt-2 font-display text-[10px] font-bold tracking-widest text-slate-600 uppercase">ECONOMIC GROWTH</span>
              </div>

              <div className="flex flex-col items-center text-center p-1 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-light text-emerald-500 border border-brand-blue-accent group-hover:bg-emerald-500/10 transition-colors duration-200">
                  <Compass className="h-4 w-4" />
                </div>
                <span className="mt-2 font-display text-[10px] font-bold tracking-widest text-slate-600 uppercase">NET ZERO FUTURE</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
