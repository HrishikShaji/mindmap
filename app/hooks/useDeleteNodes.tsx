import { FormEvent, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

export const useDeleteNodes = () => {
  const { setNodes, nodes } = useNodeEdgeContext();
  const [reset, setReset] = useState(false);
  const [targets, setTargets] = useState<string[]>([]);

  function deleteNode(e: FormEvent) {
    e.preventDefault();
    try {
      const newNodes = nodes.filter(
        (node) => !targets.some((item) => item === node.id),
      );
      setNodes(newNodes);
    } catch (error) {
      console.log(error);
    } finally {
      setReset(!reset);
    }
  }

  return { reset, deleteNode, setTargets, nodes };
};
