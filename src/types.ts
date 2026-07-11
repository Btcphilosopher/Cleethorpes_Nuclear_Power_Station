export interface DashboardState {
  activeReactors: number; // 0, 1, or 2
  selectedTimelineYear: number | null;
  selectedSafetyFeature: string | null;
  selectedComparisonSource: string;
}

export interface EnergySource {
  name: string;
  output: string;
  outputValue: number; // in TWh
  co2: string;
  co2Value: number; // in g/kWh
  reliability: number; // star rating out of 5
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'future';
}

export interface SafetySystem {
  id: string;
  name: string;
  category: string;
  description: string;
  howItWorks: string;
}
