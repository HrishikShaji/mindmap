import React, { memo, useState } from "react";
import { Handle, Position, useNodeId, useNodes } from "reactflow";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { Modal } from "./Modal";
import { useModal } from "../context/ModalContext";

interface NodeProps {
  data: Record<string, any>;
}

function CustomNode({ data }: NodeProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [label, setIsLabel] = useState("");
  const node = useNodeId();
  const { setNodes } = useNodeEdgeContext();
  const { openModal } = useModal();

  if (!node) return null;
  function deleteNode() {
    setNodes((prev) => prev.filter((item) => item.id !== node));
  }

  function editNode() {
    try {
      setNodes((prev) =>
        prev.filter((item) => {
          if (item.id === node) {
            item.data = {
              ...item.data,
              label: label,
            };
          }
          return item;
        }),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLabel("");
      setIsEdit(false);
    }
  }

  return (
    <>
      {isEdit ? (
        <div className="flex absolute flex-col gap-4 bg-neutral-500 p-2 rounded-md">
          <form onSubmit={editNode} className="flex flex-col gap-2">
            <input
              className="rounded-md p-1"
              value={label}
              onChange={(e) => setIsLabel(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <div className="w-[200px] bg-white relative flex p-1 shadow-md rounded-md  border-2 border-stone-400">
          <div className="flex   items-center w-full justify-center">
            <h1 className="absolute left-2">{data.id}</h1>
            <h1 className=" font-semibold text-sm ">{data.label}</h1>
            <div className="flex gap-2 absolute -top-6 p-1 rounded-t-md bg-gray-500 text-white right-2">
              <button onClick={() => deleteNode()}>
                <MdDelete />
              </button>
              <button onClick={() => openModal(node)}>
                <MdEdit />
              </button>
            </div>
          </div>
          <Handle
            type="target"
            position={Position.Left}
            className="w-2 h-2 !bg-teal-500"
          />
          <Handle
            type="source"
            position={Position.Right}
            className="w-2 h-2 !bg-teal-500"
          />
        </div>
      )}
    </>
  );
}

export default memo(CustomNode);
