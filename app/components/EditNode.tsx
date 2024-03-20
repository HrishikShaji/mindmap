import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { Node } from "reactflow";

export const EditNode = () => {
  const [data, setData] = useState({
    label: "",
    positive: 0,
    negative: 0,
    total: 0,
    comments: 0,
  });
  const { isOpen, id } = useModal();
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  const { setNodes, nodes } = useNodeEdgeContext();
  useEffect(() => {
    const currentNode = nodes.filter((item) => item.id === id);
    if (currentNode.length !== 0) {
      setCurrentNode(currentNode[0]);
    }
  }, [id, nodes]);

  function editNode(e: FormEvent) {
    e.preventDefault();
    try {
      setNodes((prev) =>
        prev.filter((item) => {
          if (item.id === id) {
            item.data = {
              ...item.data,
              label: data.label,
              graphData: {
                positive: data.positive,
                negative: data.negative,
                total: data.total,
                comments: data.comments,
              },
            };
          }
          return item;
        }),
      );
    } catch (err) {
      console.log(err);
    }
  }
  if (!isOpen) return null;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div>
      <h1>{currentNode?.data.label}</h1>
      <form onSubmit={editNode} className="flex flex-col gap-2">
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
