"use client";
import React, { FormEvent, useEffect, useState } from "react";
import "reactflow/dist/style.css";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import Checkbox from "./Checkbox";

export type EdgeOption = {
  source: string;
  target: string;
};

export const DisconnectNodes = () => {
  const { setEdges, edges } = useNodeEdgeContext();
  const [selectedItems, setSelectedItems] = useState<EdgeOption[]>([]);

  function disconnectNodes() {
    const newEdges = edges.filter(
      (edge) =>
        !selectedItems.some(
          (item) => item.source === edge.source && item.target === edge.target,
        ),
    );

    setEdges(newEdges);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-5 gap-5">
        {edges.map((edge, i) => (
          <div
            key={i}
            className="flex justify-between px-3 py-1 rounded-3xl bg-teal-500"
          >
            <h1>{` ${edge.source}-${edge.target} `}</h1>
            <Checkbox
              source={edge.source}
              target={edge.target}
              onChange={setSelectedItems}
            />
          </div>
        ))}
      </div>
      <button className="p-2 rounded-3xl bg-white" onClick={disconnectNodes}>
        Disconnect
      </button>
    </div>
  );
};
