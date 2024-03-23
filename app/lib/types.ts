import { Position } from "reactflow";
import { CoordinateExtent, XYPosition } from "reactflow";
import { Edge } from "reactflow";

export type GraphData = {
  [key: string]: number;
};

export type NodeOption = {
  label: string;
  id: string;
};
export type NodeData = {
  label: string;
  id: string;
  color: string;
  graphData: GraphData;
};

export type NodeType = "custom" | "start" | "end";

export type EdgeOption = {
  source: string;
  target: string;
};
