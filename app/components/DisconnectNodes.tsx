"use client";
import React from "react";
import "reactflow/dist/style.css";
import Checkbox from "./Checkbox";
import { useDisconnectNodes } from "../hooks/useDisconnectNodes";

export const DisconnectNodes = () => {
  const { edges, disconnectNodes, setSelectedItems } = useDisconnectNodes();
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 h-40 sm:h-full overflow-scroll sm:overflow-visible sm:grid-cols-5 bg-white sm:bg-transparent rounded-3xl sm:rounded-none    sm:gap-4">
        {edges.map((edge, i) => (
          <div
            key={i}
            className="flex justify-between items-center sm:p-1 px-3 py-1 sm:gap-4 sm:rounded-3xl bg-black"
          >
            <div className="flex items-center gap-1 text-xs">
              <div className="sm:h-6 sm:w-6 sm:rounded-full sm:bg-neutral-800 flex items-center justify-center">
                {edge.source}
              </div>
              <h1>---</h1>
              <div className="sm:h-6 sm:w-6 sm:rounded-full sm:bg-neutral-800 flex items-center justify-center">
                {edge.target}
              </div>
            </div>
            <Checkbox
              source={edge.source}
              target={edge.target}
              onChange={setSelectedItems}
            />
          </div>
        ))}
      </div>
      <button className="p-2 rounded-3xl bg-black" onClick={disconnectNodes}>
        Disconnect
      </button>
    </div>
  );
};
