"use client";
import React, { FormEvent, useState } from "react";
import ReactFlow, {
	Edge,
	Node,
	NodeTypes,
	useEdgesState,
	useNodesState,
} from "reactflow";
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

const initialNodes: Node[] = getNodes({ nodes: data });
const initialEdges: Edge[] = edges;
export const MindMap = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [label, setLabel] = useState("");
	const [id, setId] = useState("");

	function deleteNode(e: FormEvent) {
		e.preventDefault();
		try {
			setNodes((prev) => prev.filter((item) => item.id !== id));
		} catch (error) {
			console.log(error);
		} finally {
			setId("");
		}
	}

	function addNode(e: FormEvent) {
		e.preventDefault();

		try {
			setNodes((prevNodes) => [
				...prevNodes,
				{
					id: "25",
					position: { x: 0, y: 0 },
					data: { label: label, id: "25" },
					type: "custom",
				},
			]);
		} catch (err) {
			console.log(err);
		} finally {
			setLabel("");
		}
	}
	return (
		<div className="h-screen w-screen flex flex-col">
			<div className=" bg-neutral-900 p-1 w-full top-0 flex">
				<form onSubmit={addNode} className="flex gap-4">
					<input
						value={label}
						onChange={(e) => setLabel(e.target.value)}
						placeholder="label..."
						className="p-1 rounded-md"
					/>
					<button
						className="bg-white text-black py-1 px-3 rounded-md"
						type="submit"
					>
						Add
					</button>
				</form>
				<form onSubmit={deleteNode} className="flex gap-4">
					<input
						value={id}
						onChange={(e) => setId(e.target.value)}
						placeholder="id..."
						className="p-1 rounded-md"
					/>
					<button
						className="bg-white text-black py-1 px-3 rounded-md"
						type="submit"
					>
						Add
					</button>
				</form>
			</div>
			<div style={{ width: "100vw", height: "90vh" }}>
				<ReactFlow
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					nodeTypes={nodeTypes}
					nodes={nodes}
					edges={edges}
				/>
			</div>
		</div>
	);
};
