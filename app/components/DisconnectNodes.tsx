"use client";
import React from "react";
import "reactflow/dist/style.css";
import Checkbox from "./Checkbox";
import { useDisconnectNodes } from "../hooks/useDisconnectNodes";
import { useTheme } from "../context/ThemeContext";

export const DisconnectNodes = () => {
  const { currentEdges, disconnectNodes, setSelectedItems } =
    useDisconnectNodes();
  const { getTheme } = useTheme();

  return (
    <div className="flex flex-col gap-5">
      <h1
        className=" border-b-2  font-semibold pb-3"
        style={{
          color: getTheme().primary.textColor,
          borderColor: getTheme().primary.textColor,
        }}
      >
        DISCONNECT NODES
      </h1>
      <div className="custom-scrollbar grid grid-cols-1 h-[300px] overflow-y-scroll pr-2   gap-2 ">
        {currentEdges.map((edge, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-1 gap-5 rounded-3xl"
            style={{
              backgroundColor: getTheme().primary.backgroundColor,
            }}
          >
            <div className="flex items-center gap-4 text-sm">
              <div
                className="h-6 w-6 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: getTheme().secondary.backgroundColor,
                }}
              >
                {edge.source}
              </div>
              <h1>{edge.sourceNode?.data.label}</h1>
              <h1>---</h1>
              <div
                className="h-6 w-6 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: getTheme().secondary.backgroundColor,
                }}
              >
                {edge.target}
              </div>
              <h1>{edge.targetNode?.data.label}</h1>
            </div>
            <Checkbox
              source={edge.source}
              target={edge.target}
              onChange={setSelectedItems}
            />
          </div>
        ))}
      </div>
      <button
        className="p-2 rounded-3xl "
        onClick={disconnectNodes}
        style={{
          backgroundColor: getTheme().button.backgroundColor,
          color: getTheme().button.textColor,
        }}
      >
        Disconnect
      </button>
    </div>
  );
};
