import { Edge, Node } from "reactflow";
import { NodeData, NodeType } from "./types";

export const nodePositions = [
  { x: 20, y: 350 },
  { x: 200, y: 150 },
  { x: 200, y: 250 },
  { x: 200, y: 350 },
  { x: 200, y: 450 },
  { x: 200, y: 550 },
  { x: 500, y: 120 },
  { x: 500, y: 170 },
  { x: 500, y: 220 },
  { x: 500, y: 270 },
  { x: 500, y: 320 },
  { x: 500, y: 370 },
  { x: 500, y: 420 },
  { x: 500, y: 470 },
  { x: 500, y: 520 },
  { x: 500, y: 570 },
  { x: 800, y: 90 },
  { x: 800, y: 140 },
  { x: 1100, y: 25 },
  { x: 1100, y: 75 },
  { x: 1100, y: 125 },
  { x: 1100, y: 175 },
  { x: 1400, y: 100 },
];

type EdgeInitialData = {
  id: string;
  source: string;
  target: string;
  type: string;
  animated: boolean;
};

export const edges: EdgeInitialData[] = [
  {
    id: "e0-1",
    source: "0",
    target: "1",
    type: "custom",
    animated: true,
  },
  {
    id: "e0-2",
    source: "0",
    target: "2",
    type: "custom",
    animated: true,
  },
  { id: "e0-3", source: "0", target: "3", type: "custom", animated: true },
  { id: "e0-4", source: "0", target: "4", type: "custom", animated: true },
  { id: "e0-5", source: "0", target: "5", type: "custom", animated: true },
  { id: "e1-6", source: "1", target: "6", type: "custom", animated: true },
  { id: "e1-7", source: "1", target: "7", type: "custom", animated: true },
  { id: "e2-8", source: "2", target: "8", type: "custom", animated: true },
  { id: "e2-9", source: "2", target: "9", type: "custom", animated: true },
  { id: "e3-10", source: "3", target: "10", type: "custom", animated: true },
  { id: "e3-11", source: "3", target: "11", type: "custom", animated: true },
  { id: "e4-12", source: "4", target: "12", type: "custom", animated: true },
  { id: "e4-13", source: "4", target: "13", type: "custom", animated: true },
  { id: "e5-14", source: "5", target: "14", type: "custom", animated: true },
  { id: "e5-15", source: "5", target: "15", type: "custom", animated: true },
  { id: "e6-16", source: "6", target: "16", type: "custom", animated: true },
  { id: "e6-17", source: "6", target: "17", type: "custom", animated: true },
  { id: "e16-18", source: "16", target: "18", type: "custom", animated: true },
  { id: "e16-19", source: "16", target: "19", type: "custom", animated: true },
  { id: "e16-20", source: "16", target: "20", type: "custom", animated: true },
  { id: "e16-21", source: "16", target: "21", type: "custom", animated: true },
  { id: "e18-22", source: "18", target: "22", type: "custom", animated: true },
  { id: "e19-23", source: "19", target: "22", type: "custom", animated: true },
  { id: "e20-23", source: "20", target: "22", type: "custom", animated: true },
  { id: "e21-23", source: "21", target: "22", type: "custom", animated: true },
];

type NodeInitialData = {
  id: string;
  label: string;
  type: string;
  color: string;
};

export const data = [
  {
    id: "0",
    label: "start",
    type: "start",
    color: "#14b8a6",
  },
  {
    id: "1",
    label: "Research",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "2",
    label: "Planning",
    type: "custom",
    color: "#6366f1",
  },
  {
    id: "3",
    label: "Designing",
    type: "custom",
    color: "#f97316",
  },
  {
    id: "4",
    label: "Manufacturing",
    type: "custom",
    color: "#ec4899",
  },
  {
    id: "5",
    label: "Sales/Manufacturing",
    type: "custom",
    color: "#a855f7",
  },
  {
    id: "6",
    label: "External",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "7",
    label: "Internal",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "8",
    label: "PRD",
    type: "custom",
    color: "#6366f1",
  },
  {
    id: "9",
    label: "Specs",
    type: "custom",
    color: "#6366f1",
  },
  {
    id: "10",
    label: "Hardware",
    type: "custom",
    color: "#f97316",
  },
  {
    id: "11",
    label: "Software",
    type: "custom",
    color: "#f97316",
  },
  {
    id: "12",
    label: "Material",
    type: "custom",
    color: "#ec4899",
  },
  {
    id: "13",
    label: "Production",
    type: "custom",
    color: "#ec4899",
  },
  {
    id: "14",
    label: "Online",
    type: "custom",
    color: "#a855f7",
  },
  {
    id: "15",
    label: "Dealership",
    type: "custom",
    color: "#a855f7",
  },
  {
    id: "16",
    label: "B2C",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "17",
    label: "B2C",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "18",
    label: "Online",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "19",
    label: "Interview",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "20",
    label: "Public Data",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "21",
    label: "Health",
    type: "custom",
    color: "#0ea5e9",
  },
  {
    id: "22",
    label: "end",
    type: "end",
    color: "#14b8a6",
  },
];

export function coordinates({ id }: { id: string }) {
  const newId = parseInt(id);
  return { x: nodePositions[newId].x, y: nodePositions[newId].y };
}

export function getRandomGraphData() {
  function randomInteger({ min, max }: { min: number; max: number }) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const total = randomInteger({ min: 0, max: 1000 });
  const positive = randomInteger({ min: 0, max: total });
  const negative = total - positive;
  const comments = randomInteger({ min: 0, max: 1000 });

  return {
    positive: positive,
    negative: negative,
    comments: comments,
    total: total,
  };
}

export function getNodes(nodes: NodeInitialData[]) {
  return nodes.map((node) => {
    return {
      id: node.id,
      type: node.type,
      position: coordinates({ id: node.id }),
      data: {
        color: node.color,
        label: node.label,
        id: node.id,
        graphData: getRandomGraphData(),
      },
    } as Node<NodeData, NodeType>;
  });
}

export const initialNodes: Node[] = getNodes(data);

function getNode({ id, nodes }: { id: string; nodes: Node[] }) {
  const newNodes = nodes.filter((node) => node.id === id);
  return newNodes[0];
}

export function getEdges(edges: EdgeInitialData[]) {
  return edges.map((edge) => {
    return {
      id: edge.id,
      sourceNode: getNode({ id: edge.source, nodes: initialNodes }),
      source: edge.source,
      target: edge.target,
      animated: edge.animated,
      type: "custom",
    } as Edge;
  });
}

export const initialEdges: Edge[] = getEdges(edges);
