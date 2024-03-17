import React from "react";
import ReactFlow, { Edge, Node, NodeTypes, Position } from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
  start: StartNode,
  end: EndNode,
};

const nodePositions = [
  { x: 20, y: 350 },
  { x: 200, y: 150 },
  { x: 200, y: 250 },
  { x: 200, y: 350 },
  { x: 200, y: 450 },
  { x: 200, y: 550 },
  { x: 500, y: 170 },
  { x: 500, y: 120 },
  { x: 500, y: 270 },
  { x: 500, y: 220 },
  { x: 500, y: 370 },
  { x: 500, y: 320 },
  { x: 500, y: 470 },
  { x: 500, y: 420 },
  { x: 500, y: 570 },
  { x: 500, y: 520 },
  { x: 800, y: 140 },
  { x: 800, y: 90 },
  { x: 1100, y: 25 },
  { x: 1100, y: 75 },
  { x: 1100, y: 125 },
  { x: 1100, y: 175 },
  { x: 1400, y: 100 },
];

function coordinates({ id }: { id: string }) {
  const newId = parseInt(id) - 1;
  return { x: nodePositions[newId].x, y: nodePositions[newId].y };
}

const initialNodes: Node[] = [
  {
    id: "1",
    type: "start",
    position: coordinates({ id: "1" }),
    data: { label: "1" },
    sourcePosition: Position.Right,
  },
  {
    id: "2",
    type: "custom",
    position: coordinates({ id: "2" }),
    data: { label: "2" },
  },
  {
    id: "3",
    position: coordinates({ id: "3" }),
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "4",
    type: "custom",
    position: coordinates({ id: "4" }),
    data: { label: "2" },
  },
  {
    id: "5",
    position: coordinates({ id: "5" }),
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "6",
    position: coordinates({ id: "6" }),
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "7",
    position: coordinates({ id: "7" }),
    data: { label: "susu" },
    type: "custom",
  },
  {
    id: "8",
    position: { x: 500, y: 120 },
    data: { label: "tutu" },
    type: "custom",
  },
  {
    id: "9",
    position: { x: 500, y: 270 },
    data: { label: "huhu" },
    type: "custom",
  },
  {
    id: "10",
    position: { x: 500, y: 220 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "11",
    position: { x: 500, y: 370 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "12",
    position: { x: 500, y: 320 },
    data: { label: "lolo" },
    type: "custom",
  },
  {
    id: "13",
    position: { x: 500, y: 470 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "14",
    position: { x: 500, y: 420 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "15",
    position: { x: 500, y: 570 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "16",
    position: { x: 500, y: 520 },
    data: { label: "koko" },
    type: "custom",
  },
  {
    id: "17",
    position: { x: 800, y: 140 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "18",
    position: { x: 800, y: 90 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "19",
    position: { x: 1100, y: 25 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "20",
    position: { x: 1100, y: 75 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "21",
    position: { x: 1100, y: 125 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "22",
    position: { x: 1100, y: 175 },
    data: { label: "3" },
    type: "custom",
  },
  {
    id: "23",
    position: { x: 1400, y: 100 },
    data: { label: "3" },
    type: "end",
  },
];
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e2-7", source: "2", target: "7" },
  { id: "e2-8", source: "2", target: "8" },
  { id: "e3-9", source: "3", target: "9" },
  { id: "e3-10", source: "3", target: "10" },
  { id: "e4-11", source: "4", target: "11" },
  { id: "e4-12", source: "4", target: "12" },
  { id: "e5-13", source: "5", target: "13" },
  { id: "e5-14", source: "5", target: "14" },
  { id: "e6-15", source: "6", target: "15" },
  { id: "e7-16", source: "6", target: "16" },
  { id: "e8-17", source: "8", target: "17" },
  { id: "e8-18", source: "8", target: "18" },
  { id: "e18-19", source: "18", target: "19" },
  { id: "e18-20", source: "18", target: "20" },
  { id: "e18-21", source: "18", target: "21" },
  { id: "e18-22", source: "18", target: "22" },
  { id: "e19-23", source: "19", target: "23" },
  { id: "e20-23", source: "20", target: "23" },
  { id: "e21-23", source: "21", target: "23" },
  { id: "e22-23", source: "22", target: "23" },
];

export const MindMap = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={initialNodes}
        edges={initialEdges}
      />
    </div>
  );
};
