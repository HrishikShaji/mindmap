"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

import "reactflow/dist/style.css";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

export const AddNode = () => {
  const { setNodes } = useNodeEdgeContext();
  const [data, setData] = useState({
    label: "",
    positive: 0,
    negative: 0,
    total: 0,
    comments: 0,
  });

  function addNode(e: FormEvent) {
    e.preventDefault();

    try {
      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: (prevNodes.length + 1).toString(),
          position: { x: 0, y: 0 },
          data: {
            label: data.label,
            id: (prevNodes.length + 1).toString(),
            graphData: {
              positive: data.positive,
              negative: data.negative,
              total: data.total,
              comments: data.comments,
            },
          },
          type: "custom",
        },
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setData({
        label: "",
        positive: 0,
        negative: 0,
        total: 0,
        comments: 0,
      });
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form onSubmit={addNode} className="flex gap-4">
      <input
        name="label"
        value={data.label}
        onChange={handleChange}
        placeholder="label..."
        className="p-1 rounded-md"
      />
      <input
        name="positive"
        value={data.positive}
        onChange={handleChange}
        placeholder="label..."
        className="p-1 rounded-md"
      />
      <input
        name="negative"
        value={data.negative}
        onChange={handleChange}
        placeholder="Negative..."
        className="p-1 rounded-md"
      />
      <input
        name="total"
        value={data.total}
        onChange={handleChange}
        placeholder="Total..."
        className="p-1 rounded-md"
      />
      <input
        name="comments"
        value={data.comments}
        onChange={handleChange}
        placeholder="Comments..."
        className="p-1 rounded-md"
      />
      <button
        className="bg-white text-black py-1 px-3 rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
