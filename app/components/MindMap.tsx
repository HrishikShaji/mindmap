"use client";
import React from "react";
import "reactflow/dist/style.css";
import { EditSection } from "./EditSection";
import FlowWithProvider from "./Flow";

export const MindMap = () => {
  return (
    <div className=" relative flex flex-col">
      <EditSection />
      <FlowWithProvider />
    </div>
  );
};
