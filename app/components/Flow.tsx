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
    onConnect,
    onEdgesChange,
    onNodesChange,
    edges,
    nodes,
    nodeTypes,
    edgeTypes,
  } = useFlow();

  const { getTheme } = useTheme();

  return (
    <div
      ref={reactFlowWrapper}
      className=" rounded-3xl"
      style={{
        width: "96vw",
        height: "90vh",
        backgroundColor: getTheme().ternary.backgroundColor,
      }}
    >
      <ReactFlow
        fitView
        onConnectStart={onConnectStart as any}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
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
