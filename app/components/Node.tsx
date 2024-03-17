import React, { memo, useState } from "react";
import { Handle, Position, useNodeId, useNodes } from "reactflow";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

interface NodeProps {
	data: Record<string, any>;
}

function CustomNode({ data }: NodeProps) {
	const [isEdit, setIsEdit] = useState(false);
	const [label, setIsLabel] = useState("");
	const node = useNodeId();
	const { setNodes } = useNodeEdgeContext();

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
					return item
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
				<div className="w-[200px] bg-white flex p-1 shadow-md rounded-md  border-2 border-stone-400">
					<div className="flex gap-4">
						<h1>{data.id}</h1>
						<div className="">
							<div className=" font-semibold">{data.label}</div>
						</div>
						<button onClick={() => deleteNode()}>DELETE</button>
						<button onClick={() => setIsEdit(true)}>Edit</button>
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
