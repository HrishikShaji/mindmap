import { useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { EdgeOption } from "../lib/types";

export const useDisconnectNodes = () => {
  const { setEdges, edges } = useNodeEdgeContext();
  const [selectedItems, setSelectedItems] = useState<EdgeOption[]>([]);

  function disconnectNodes() {
    const newEdges = edges.filter(
      (edge) =>
        !selectedItems.some(
          (item) => item.source === edge.source && item.target === edge.target,
        ),
    );

    setEdges(newEdges);
  }

  return { disconnectNodes, edges, setSelectedItems };
};
