import React from "react";
import { Handle, Position } from "reactflow";
import { useEdit } from "../context/EditContext";

function EndNode() {
  const { isEdit } = useEdit();
  return (
    <div className="p-1 ">
      <Handle
        isConnectable={isEdit}
        type="target"
        position={Position.Left}
        className=" rounded-full w-4 h-4 !bg-teal-500"
      />
    </div>
  );
}

export default EndNode;
