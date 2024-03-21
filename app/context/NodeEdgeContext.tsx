import React, { createContext, useContext, ReactNode } from "react";
import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  useEdgesState,
  useNodesState,
} from "reactflow";

interface NodeEdgeContextType {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: (changes: NodeChange[]) => void;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: (changes: EdgeChange[]) => void;
}

const NodeEdgeContext = createContext<NodeEdgeContextType | undefined>(
  undefined,
);

export const useNodeEdgeContext = (): NodeEdgeContextType => {
  const context = useContext(NodeEdgeContext);
  if (!context) {
    throw new Error(
      "useNodeEdgeContext must be used within a NodeEdgeProvider",
    );
  }
  return context;
};

interface NodeEdgeProviderProps {
  children: ReactNode;
  initialNodes: Node[];
  initialEdges: Edge[];
}

export const NodeEdgeProvider = ({
  children,
  initialNodes,
  initialEdges,
}: NodeEdgeProviderProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <NodeEdgeContext.Provider
      value={{ nodes, setNodes, onEdgesChange, onNodesChange, edges, setEdges }}
    >
      {children}
    </NodeEdgeContext.Provider>
  );
};
