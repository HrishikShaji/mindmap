"use client";
import React, { FormEvent, useState } from "react";
import "reactflow/dist/style.css";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import NodeCheckbox from "./NodeCheckBox";

export const DeleteNode = () => {
  const { setNodes, nodes } = useNodeEdgeContext();
  const [reset, setReset] = useState(false);
  const [targets, setTargets] = useState<string[]>([]);

  function deleteNode(e: FormEvent) {
    e.preventDefault();
    try {
      const newNodes = nodes.filter(
        (node) => !targets.some((item) => item === node.id),
      );
      setNodes(newNodes);
    } catch (error) {
      console.log(error);
    } finally {
      setReset(!reset);
    }
  }

  return (
    <form onSubmit={deleteNode} className="flex gap-4">
      <div className="grid grid-cols-4 gap-10">
        {nodes.map((node, i) => (
          <div key={i} className="flex justify-between p-1">
            <h1>{node.data.label}</h1>
            <h1>{node.id}</h1>
            <NodeCheckbox id={node.id} reset={reset} onChange={setTargets} />
          </div>
        ))}
      </div>
      <button
        className="bg-white text-black py-1 px-3 rounded-md"
        type="submit"
      >
        Delete
      </button>
    </form>
  );
};
