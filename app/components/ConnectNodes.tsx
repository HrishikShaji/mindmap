"use client";
import React, { FormEvent, useState } from "react";
import "reactflow/dist/style.css";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { InputSelect } from "./InputSelect";
import NodeCheckbox from "./NodeCheckBox";

export type NodeOption = {
  label: string;
  id: string;
};

export const ConnectNodes = () => {
  const { setEdges, nodes } = useNodeEdgeContext();
  const [targets, setTargets] = useState<string[]>([]);
  const [reset, setReset] = useState(false);

  const options = nodes.map((item) => {
    return { label: item.data.label, id: item.id };
  });
  const [option, setOption] = useState<NodeOption>({ label: "", id: "" });
  function connectNodes(e: FormEvent) {
    e.preventDefault();
    try {
      const newEdges = targets.map((target) => {
        return {
          id: `e${option.id}-${target}`,
          source: option.id,
          target: target,
        };
      });

      setEdges((prev) => [...prev, ...newEdges]);
    } catch (err) {
      console.log(err);
    } finally {
      setTargets([]);
      setReset((prev) => !prev);
      setOption({ label: "", id: "" });
    }
  }

  return (
    <form className="flex gap-2 flex-col" onSubmit={connectNodes}>
      <div className="flex  gap-5">
        <InputSelect item={option} options={options} onChange={setOption} />
        <div className="grid grid-cols-4 gap-10">
          {nodes.map((node, i) => (
            <div key={i} className="flex justify-between p-1">
              <h1>{node.data.label}</h1>
              <h1>{node.id}</h1>
              <NodeCheckbox id={node.id} reset={reset} onChange={setTargets} />
            </div>
          ))}
        </div>
      </div>
      <button className="px-3 py-1 rounded-3xl bg-white">Connect</button>
    </form>
  );
};
