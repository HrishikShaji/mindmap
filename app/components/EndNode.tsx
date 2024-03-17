import React from "react";
import { Handle, Position } from "reactflow";

function EndNode() {
  return (
    <div className="p-1 ">
      <Handle
        type="target"
        position={Position.Left}
        className=" rounded-full w-4 h-4 !bg-teal-500"
      />
    </div>
  );
}

export default EndNode;
