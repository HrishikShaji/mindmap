"use client";
import React from "react";
import "reactflow/dist/style.css";
import { MdEdit } from "react-icons/md";
import { useEdit } from "../context/EditContext";
import { EditSection } from "./EditSection";
import FlowWithProvider from "./Flow";

export const MindMap = () => {
  const { isEdit, toggleEdit } = useEdit();
  return (
    <div className=" relative flex flex-col">
      <div
        onClick={toggleEdit}
        className="absolute cursor-pointer z-20 top-5 left-5 rounded-full p-2 bg-neutral-500 text-white  "
      >
        <MdEdit />
      </div>
      {isEdit ? <EditSection /> : null}

      <FlowWithProvider />
    </div>
  );
};
