"use client";
import React from "react";
import ReactFlow, { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { useFlow } from "../hooks/useFlow";
import { useTheme } from "../context/ThemeContext";

function Flow() {
	const {
		reactFlowWrapper,
		onEdgeUpdate,
		onConnectStart,
		onConnectEnd,
		onConnect,
		onEdgesChange,
		onNodesChange,
		edges,
		nodes,
		nodeTypes,
	} = useFlow();

	const { getBG } = useTheme();

	return (
		<div
			ref={reactFlowWrapper}
			className=" rounded-3xl"
			style={{
				width: "96vw",
				height: "90vh",
				backgroundColor: getBG({ defaultColor: "white" }).ternary,
			}}
		>
			<ReactFlow
				fitView
				onConnectStart={onConnectStart as any}
				onConnectEnd={onConnectEnd as any}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				nodeTypes={nodeTypes}
				nodes={nodes}
				edges={edges}
				onEdgeUpdate={onEdgeUpdate}
				onConnect={onConnect}
			/>
		</div>
	);
}

function FlowWithProvider() {
	return (
		<ReactFlowProvider>
			<Flow />
		</ReactFlowProvider>
	);
}

export default FlowWithProvider;
