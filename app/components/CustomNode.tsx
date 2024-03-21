import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { MdDelete, MdEdit } from "react-icons/md";
import { useCustomNode } from "../hooks/useCustomNode";

interface NodeProps {
  data: Record<string, any>;
}

function CustomNode({ data }: NodeProps) {
  const { toggleModal, deleteNode, toggleEdit, isEdit } = useCustomNode();

  return (
    <div
      onClick={toggleModal}
      style={{ cursor: isEdit ? "" : "pointer" }}
      className="w-[200px]  bg-white  flex p-1  relative shadow-md rounded-md  "
    >
      <div className="flex   items-center w-full  justify-center">
        <h1 className=" left-2">{data.id}</h1>
        <h1 className=" font-semibold text-sm ">{data.label}</h1>
        {isEdit && (
          <div className="flex gap-2 absolute -top-6 p-1 rounded-t-md bg-gray-500 text-white right-2">
            <button onClick={() => deleteNode()}>
              <MdDelete />
            </button>
            <button onClick={toggleEdit}>
              <MdEdit />
            </button>
          </div>
        )}
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 !bg-teal-500 "
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 !bg-teal-500"
      />
    </div>
  );
}

export default memo(CustomNode);
