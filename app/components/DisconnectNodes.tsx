"use client";
import React from "react";
import "reactflow/dist/style.css";
import Checkbox from "./Checkbox";
import { useDisconnectNodes } from "../hooks/useDisconnectNodes";
import { useTheme } from "../context/ThemeContext";
import { FormHeading } from "./FormHeading";
import { SecondaryHeading } from "./SecondaryHeading";
import { FormButton } from "./FormButton";

export const DisconnectNodes = () => {
  const { currentEdges, disconnectNodes, setSelectedItems } =
    useDisconnectNodes();
  const { getTheme } = useTheme();
  console.log(currentEdges);

  return (
    <form onSubmit={disconnectNodes} className="flex flex-col gap-4">
      <FormHeading>DISCONNECT NODES</FormHeading>
      <SecondaryHeading>Select Connections</SecondaryHeading>
      <div className="custom-scrollbar grid grid-cols-1  h-[200px] overflow-y-scroll pr-2   gap-2 ">
        {currentEdges.map((edge, i) => (
          <div
            key={i}
            className="flex justify-between items-center  px-5 py-2 sm:p-1 gap-5 rounded-3xl"
            style={{
              backgroundColor: getTheme().primary.backgroundColor,
            }}
          >
            <div className="flex sm:items-center flex-col sm:flex-row w-full justify-center sm:justify-start sm:gap-4 text-sm">
              <div className="flex  gap-4">
                <div
                  className="h-6 w-6 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: getTheme().secondary.backgroundColor,
                  }}
                >
                  {edge.source}
                </div>
                <h1>{edge.sourceNode?.data.label}</h1>
              </div>
              <h1 className="hidden sm:block">---</h1>
              <h1 className="sm:hidden pl-[9px]">|</h1>
              <div className="flex gap-4">
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
            </div>
            <Checkbox
              source={edge.source}
              target={edge.target}
              onChange={setSelectedItems}
            />
          </div>
        ))}
      </div>
      <FormButton>DISCONNECT</FormButton>
    </form>
  );
};
