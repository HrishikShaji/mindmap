"use client";
import React, { FormEvent, useState } from "react";
import ReactFlow, { NodeTypes } from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

const nodeTypes: NodeTypes = {
	custom: CustomNode,
	start: StartNode,
	end: EndNode,
};

export const DisconnectNodes = () => {
	const { setNodes, setEdges, onNodesChange, onEdgesChange, nodes, edges } =
		useNodeEdgeContext();
	const [source, setSource] = useState("");
	const [target, setTarget] = useState("");

	function disconnectNodes(e: FormEvent) {
		e.preventDefault();
		try {
			setEdges((prev) =>
				prev.filter((item) => item.id !== `e${source}-${target}`),
			);
		} catch (err) {
			console.log(err);
		} finally {
			setSource("");
			setTarget("");
		}
	}

	return (
		<form className="flex gap-2" onSubmit={disconnectNodes}>
			<input
				value={source}
				onChange={(e) => setSource(e.target.value)}
				placeholder="source..."
				className="p-1 rounded-md"
			/>
			<input
				value={target}
				onChange={(e) => setTarget(e.target.value)}
				placeholder="target..."
				className="p-1 rounded-md"
			/>
			<button
				className="bg-white text-black py-1 px-3 rounded-md"
				type="submit"
			>
				Disconnect
			</button>
		</form>
	);
};
