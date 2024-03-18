"use client";
import React, { SyntheticEvent, useCallback, useRef } from "react";
import ReactFlow, {
  Connection,
  Edge,
  NodeTypes,
  ReactFlowProvider,
  addEdge,
  updateEdge,
  useReactFlow,
} from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { useEdit } from "../context/EditContext";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
  start: StartNode,
  end: EndNode,
};

let id = 25;
const getId = () => `${id++}`;

function Flow() {
  const { onNodesChange, setNodes, onEdgesChange, nodes, setEdges, edges } =
    useNodeEdgeContext();
  const { isEdit } = useEdit();
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef<string | null>(null);
  const { screenToFlowPosition } = useReactFlow();
  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    [setEdges],
  );
  const onConnect = useCallback(
    (params: Edge | Connection) => {
      if (isEdit) {
        setEdges((els) => addEdge(params, els));
      }
    },
    [isEdit, setEdges],
  );

  const onConnectStart = useCallback(
    (_event: SyntheticEvent, { nodeId }: { nodeId: string }) => {
      connectingNodeId.current = nodeId;
    },
    [],
  );
  const onConnectEnd = useCallback(
    (event: MouseEvent) => {
      if (!isEdit) return;
      if (!connectingNodeId.current) return;

      const targetIsPane = (event.target as HTMLElement).classList.contains(
        "react-flow__pane",
      );

      if (targetIsPane) {
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
          type: "custom",
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectingNodeId.current,
            target: id,
          } as Edge),
        );
      }
    },
    [screenToFlowPosition, isEdit, setEdges, setNodes],
  );

  return (
    <div
      ref={reactFlowWrapper}
      className="bg-neutral-700 rounded-3xl"
      style={{ width: "96vw", height: "90vh" }}
    >
      <ReactFlow
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
