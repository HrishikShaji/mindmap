import { FormEvent, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { EdgeOption } from "@/types/types";

export const useDisconnectNodes = () => {
  const { setEdges, edges, nodes } = useNodeEdgeContext();
  const [selectedItems, setSelectedItems] = useState<EdgeOption[]>([]);

  const currentEdges = edges.filter((edge) => {
    const sourceNodeExists = nodes.find((node) => node.id === edge.source);
    const targetNodeExists = nodes.find((node) => node.id === edge.target);
    return sourceNodeExists && targetNodeExists;
  });

  function disconnectNodes(e: FormEvent) {
    e.preventDefault();
    const newEdges = currentEdges.filter(
      (edge) =>
        !selectedItems.some(
          (item) => item.source === edge.source && item.target === edge.target,
        ),
    );

    setEdges(newEdges);
  }

  return { disconnectNodes, edges, setSelectedItems, currentEdges };
};
