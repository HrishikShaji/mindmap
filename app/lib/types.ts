export type GraphData = {
  [key: string]: number;
};

export type NodeData = {
  label: string;
  id: string;
  graphData: GraphData;
};

export type EdgeOption = {
  source: string;
  target: string;
};
