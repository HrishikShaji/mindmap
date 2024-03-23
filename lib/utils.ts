import {
  EdgeInitialData,
  NodeData,
  NodeInitialData,
  NodeType,
} from "@/types/types";
import { edgeInitialedges, nodeInitialdata, nodePositions } from "./data";
import { Edge, Node } from "reactflow";

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

export const initialNodes: Node[] = getNodes(nodeInitialdata);

export function getNode({ id, nodes }: { id: string; nodes: Node[] }) {
  const newNodes = nodes.filter((node) => node.id === id);
  return newNodes[0];
}

export function getEdges(edges: EdgeInitialData[]) {
  return edges.map((edge) => {
    return {
      id: edge.id,
      sourceNode: getNode({ id: edge.source, nodes: initialNodes }),
      targetNode: getNode({ id: edge.target, nodes: initialNodes }),
      source: edge.source,
      target: edge.target,
      animated: edge.animated,
      type: "custom",
    } as Edge;
  });
}

export const initialEdges: Edge[] = getEdges(edgeInitialedges);

export function filterNodesWithoutSelectedOption({
  edges,
  nodes,
  id,
}: {
  edges: Edge[];
  id: string;
  nodes: Node[];
}) {
  const connectedEdges = edges.filter((edge) => edge.source === id);
  const connectedNodeIds = connectedEdges.map((edge) => edge.target);
  const filteredNodes = nodes.filter(
    (node) => !connectedNodeIds.includes(node.id),
  );
  return filteredNodes.filter((node) => node.id !== id);
}
