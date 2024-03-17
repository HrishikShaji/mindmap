import React, { useState } from "react";
import ReactFlow, { NodeTypes } from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import { data, edges, nodePositions } from "./data";

const nodeTypes: NodeTypes = {
	custom: CustomNode,
	start: StartNode,
	end: EndNode,
};

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
const initialNodes = getNodes({ nodes: data });
const initialEdges = edges;
export const MindMap = () => {
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} />
		</div>
	);
};
