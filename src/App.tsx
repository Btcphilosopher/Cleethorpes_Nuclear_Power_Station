/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { DashboardState } from './types';
import Header from './components/Header';
import VisionProposal from './components/VisionProposal';
import PowerEconomicOutput from './components/PowerEconomicOutput';
import TechSafetyStewardshipTimeline from './components/TechSafetyStewardshipTimeline';
import CommunityAtGlanceComparison from './components/CommunityAtGlanceComparison';
import Footer from './components/Footer';

export default function App() {
  const [state, setState] = useState<DashboardState>({
    activeReactors: 2, // Default to 2 reactors active, representing full capacity (3,200MW) matching the infographic
    selectedTimelineYear: 2025,
    selectedSafetyFeature: null,
    selectedComparisonSource: 'Nuclear (Cleethorpes)',
  });

  const handleStateChange = (updater: (prev: DashboardState) => DashboardState) => {
    setState(updater);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-slate-700 flex flex-col justify-between selection:bg-brand-gold selection:text-white font-sans antialiased">
      {/* Interactive Brand Header & Reactor Controls */}
      <Header state={state} onChangeState={handleStateChange} />

      {/* Main Dashboard Layout Container */}
      <main className="flex-grow mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Module A: The Vision, Why Cleethorpes, & Technical Proposal */}
        <VisionProposal state={state} />

        {/* Module B: Powering Britain, Economic Impact, & Clean Energy Output Metrics */}
        <PowerEconomicOutput state={state} />

        {/* Module C: Technology & Safety, Environmental Stewardship, & Live Interactive Project Timeline */}
        <TechSafetyStewardshipTimeline state={state} />

        {/* Module D: Community Investment, At a Glance, & Interactive Energy Grid Comparisons */}
        <CommunityAtGlanceComparison state={state} />

      </main>

      {/* Corporate Compliance Footer */}
      <Footer />
    </div>
  );
}

