import React, { memo } from "react";
import { Handle, Position } from "reactflow";

interface NodeProps {
  data: Record<string, any>;
}

function CustomNode({ data }: NodeProps) {
  return (
    <div className="w-[100px] flex justify-center py-1 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="">
          <div className="text-lg font-bold">{data.label}</div>
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
  );
}

export default memo(CustomNode);
