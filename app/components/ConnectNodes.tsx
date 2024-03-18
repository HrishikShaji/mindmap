"use client";
import React, { FormEvent, useState } from "react";
import "reactflow/dist/style.css";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

export const ConnectNodes = () => {
  const { setEdges } = useNodeEdgeContext();
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  function connectNodes(e: FormEvent) {
    e.preventDefault();
    try {
      setEdges((prev) => [
        ...prev,
        {
          id: `e${source}-${target}`,
          source: source,
          target: target,
        },
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setSource("");
      setTarget("");
    }
  }

  return (
    <form className="flex gap-2" onSubmit={connectNodes}>
      <input
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="source..."
        className="p-1 rounded-md"
      />
      <input
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="target..."
        className="p-1 rounded-md"
      />
      <button
        className="bg-white text-black py-1 px-3 rounded-md"
        type="submit"
      >
        Connect
      </button>
    </form>
  );
};
