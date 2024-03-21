"use client";
import React from "react";

import "reactflow/dist/style.css";
import { useAddNode } from "../hooks/useAddNode";

export const AddNode = () => {
  const { addNode, data, handleChange } = useAddNode();
  const inputs = [
    {
      label: "Label",
      name: "label",
      value: data.label,
      placeholder: "label...",
    },
    {
      label: "Positive",
      name: "positive",
      value: data.positive,
      placeholder: "label...",
    },
    {
      label: "Negative",
      name: "negative",
      value: data.negative,
      placeholder: "Negative...",
    },
    {
      label: "Total",
      name: "total",
      value: data.total,
      placeholder: "Total...",
    },
    {
      label: "Comment",
      name: "comments",
      value: data.comments,
      placeholder: "Comments...",
    },
  ];

  return (
    <form onSubmit={addNode} className="flex flex-col gap-10 sm:gap-4">
      <div className="flex flex-col gap-2">
        {inputs.map((input, i) => (
          <div
            className="sm:grid  sm:grid-cols-2 flex flex-col items-center  sm:gap-10"
            key={i}
          >
            <label className=" ">{input.label}</label>
            <input
              {...input}
              onChange={handleChange}
              className="py-1 px-3 w-full rounded-3xl bg-black text-teal-700 focus:outline-none text-sm"
            />
          </div>
        ))}
      </div>
      <button
        className="bg-black text-teal-500 py-1 px-3 rounded-3xl"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
