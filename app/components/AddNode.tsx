"use client";
import React from "react";

import "reactflow/dist/style.css";
import { useAddNode } from "../hooks/useAddNode";

export const AddNode = () => {
  const { addNode, data, handleChange } = useAddNode();
  const inputs = [
    {
      name: "label",
      value: data.label,
      placeholder: "label...",
    },
    {
      name: "positive",
      value: data.positive,
      placeholder: "label...",
    },
    {
      name: "negative",
      value: data.negative,
      placeholder: "Negative...",
    },
    {
      name: "total",
      value: data.total,
      placeholder: "Total...",
    },
    {
      name: "comments",
      value: data.comments,
      placeholder: "Comments...",
    },
  ];

  return (
    <form onSubmit={addNode} className="flex flex-col gap-4">
      {inputs.map((input, i) => (
        <input
          key={i}
          {...input}
          onChange={handleChange}
          className="p-1 rounded-md"
        />
      ))}
      <button
        className="bg-white text-black py-1 px-3 rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
