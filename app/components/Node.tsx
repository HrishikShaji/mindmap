import React, { memo } from "react";
import { Handle, Position, useNodeId, useNodes } from "reactflow";

interface NodeProps {
	data: Record<string, any>;
}

function CustomNode({ data }: NodeProps) {
	const node = useNodeId();
	return (
		<div className="w-[200px] bg-white flex p-1 shadow-md rounded-md  border-2 border-stone-400">
			<div className="flex gap-4">
				<h1>{data.id}</h1>
				<div className="">
					<div className=" font-semibold">{data.label}</div>
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
