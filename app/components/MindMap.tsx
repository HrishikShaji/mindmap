import React from "react";
import ReactFlow, { Edge, Node, Position } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    position: { x: 0, y: 50 },
    data: { label: "1" },
    sourcePosition: Position.Right,
  },
  {
    id: "2",
    type: "output",
    position: { x: 200, y: 0 },
    data: { label: "2" },
    targetPosition: Position.Left,
  },
  {
    id: "3",
    position: { x: 200, y: 100 },
    data: { label: "3" },
    type: "output",
    targetPosition: Position.Left,
  },
];
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
];

export const MindMap = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
};
