import React from "react";
import ReactFlow, { Edge, Node, NodeTypes, Position } from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import { data } from "./data";

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
	const newId = parseInt(id);
	return { x: nodePositions[newId].x, y: nodePositions[newId].y };
}

function getNodes({ nodes }: { nodes: any[] }) {
	return nodes.map((node) => {
		return {
			id: node.id,
			type: node.type,
			position: coordinates({ id: node.id }),
			data: { label: node.label, id: node.id },
		};
	});
}

const initialEdges: Edge[] = [
	{ id: "e0-1", source: "0", target: "1" },
	{ id: "e0-2", source: "0", target: "2" },
	{ id: "e0-3", source: "0", target: "3" },
	{ id: "e0-4", source: "0", target: "4" },
	{ id: "e0-5", source: "0", target: "5" },
	{ id: "e1-6", source: "1", target: "6" },
	{ id: "e1-7", source: "1", target: "7" },
	{ id: "e2-8", source: "2", target: "8" },
	{ id: "e2-9", source: "2", target: "9" },
	{ id: "e3-10", source: "3", target: "10" },
	{ id: "e3-11", source: "3", target: "11" },
	{ id: "e4-12", source: "4", target: "12" },
	{ id: "e4-13", source: "4", target: "13" },
	{ id: "e5-14", source: "5", target: "14" },
	{ id: "e5-15", source: "5", target: "15" },
	{ id: "e7-16", source: "7", target: "16" },
	{ id: "e7-17", source: "7", target: "17" },
	{ id: "e17-18", source: "17", target: "18" },
	{ id: "e17-19", source: "17", target: "19" },
	{ id: "e17-20", source: "17", target: "20" },
	{ id: "e17-21", source: "17", target: "21" },
	{ id: "e18-22", source: "18", target: "22" },
	{ id: "e19-23", source: "19", target: "22" },
	{ id: "e20-23", source: "20", target: "22" },
	{ id: "e21-23", source: "21", target: "22" },
];

export const MindMap = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodeTypes={nodeTypes}
				nodes={getNodes({ nodes: data })}
				edges={initialEdges}
			/>
		</div>
	);
};
