"use client";
import React from "react";
import "reactflow/dist/style.css";
import Checkbox from "./Checkbox";
import { useDisconnectNodes } from "../hooks/useDisconnectNodes";

export const DisconnectNodes = () => {
  const { edges, disconnectNodes, setSelectedItems } = useDisconnectNodes();
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
