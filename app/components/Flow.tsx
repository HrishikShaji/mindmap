"use client";
import React from "react";
import ReactFlow, { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import { useFlow } from "../hooks/useFlow";

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

  return (
    <div
      ref={reactFlowWrapper}
      className="bg-neutral-800 rounded-3xl"
      style={{ width: "96vw", height: "90vh" }}
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
