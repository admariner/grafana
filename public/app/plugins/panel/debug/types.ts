export type UpdateConfig = {
  [K in keyof UpdateCounters]: boolean;
};

export type UpdateCounters = {
  render: number;
  dataChanged: number;
  schemaChanged: number;
};

export enum DebugMode {
  Render = 'render',
  Events = 'events',
}

export interface DebugPanelOptions {
  mode: DebugMode;
  counters?: UpdateConfig;
}
