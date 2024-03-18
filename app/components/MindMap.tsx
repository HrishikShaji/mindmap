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

export const MindMap = () => {
	const { setNodes, setEdges, onNodesChange, onEdgesChange, nodes, edges } =
		useNodeEdgeContext();
	const [label, setLabel] = useState("");
	const [id, setId] = useState("");
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

	function connectNodes(e: FormEvent) {
		e.preventDefault();
		try {
			setEdges((prev) => [
				...prev,
				{
					id: `e${source}-${target}`,
					source: source,
					target: target,
				},
			]);
		} catch (err) {
			console.log(err);
		} finally {
			setSource("");
			setTarget("");
		}
	}

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
						Delete
					</button>
				</form>
				<form className="flex gap-2" onSubmit={connectNodes}>
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
						Connect
					</button>
				</form>
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
