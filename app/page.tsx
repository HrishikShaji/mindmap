"use client";
import { Edge, Node } from "reactflow";
import { MindMap } from "./components/MindMap";
import { NodeEdgeProvider } from "./context/NodeEdgeContext";
import { data, edges, nodePositions } from "./components/data";

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
export default function Home() {
	const initialNodes: Node[] = getNodes({ nodes: data });
	const initialEdges: Edge[] = edges;
	return (
		<main>
			<NodeEdgeProvider initialEdges={initialEdges} initialNodes={initialNodes}>
				<MindMap />
			</NodeEdgeProvider>
		</main>
	);
}
