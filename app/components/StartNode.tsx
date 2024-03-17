import React from "react";
import { Handle, Position } from "reactflow";

function StartNode() {
  return (
    <div className="p-1 ">
      <Handle
        type="source"
        position={Position.Right}
        className=" rounded-full w-4 h-4 !bg-teal-500"
      />
    </div>
  );
}

export default StartNode;
