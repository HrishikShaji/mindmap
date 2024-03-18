"use client";
import React, { ReactNode, useCallback, useState } from "react";
import ReactFlow, {
  Connection,
  Edge,
  NodeTypes,
  addEdge,
  updateEdge,
} from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { MdEdit } from "react-icons/md";
import { useEdit } from "../context/EditContext";
import { EditSection } from "./EditSection";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
  start: StartNode,
  end: EndNode,
};

export const MindMap = () => {
  const { onNodesChange, onEdgesChange, nodes, setEdges, edges } =
    useNodeEdgeContext();
  const { isEdit, toggleEdit } = useEdit();
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

  return (
    <div className=" relative flex flex-col">
      <div
        onClick={toggleEdit}
        className="absolute cursor-pointer z-20 top-5 left-5 rounded-full p-2 bg-neutral-500 text-white  "
      >
        <MdEdit />
      </div>
      {isEdit ? <EditSection /> : null}
      <div
        className="bg-neutral-700 rounded-3xl"
        style={{ width: "96vw", height: "90vh" }}
      >
        <ReactFlow
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onEdgeUpdate={onEdgeUpdate}
          onConnect={onConnect}
        />
      </div>
    </div>
  );
};
