import React, { memo } from "react";
import { Handle, Position, useNodeId } from "reactflow";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { useModal } from "../context/ModalContext";
import { useEdit } from "../context/EditContext";

interface NodeProps {
	data: Record<string, any>;
}

function CustomNode({ data }: NodeProps) {
	const node = useNodeId();
	const { isEdit } = useEdit();
	const { setNodes } = useNodeEdgeContext();
	const { openModal } = useModal();

	if (!node) return null;
	function deleteNode() {
		setNodes((prev) => prev.filter((item) => item.id !== node));
	}

	return (
		<div className="w-[200px] bg-white relative flex p-1 shadow-md rounded-md  border-2 border-stone-400">
			<div className="flex   items-center w-full justify-center">
				<h1 className="absolute left-2">{data.id}</h1>
				<h1 className=" font-semibold text-sm ">{data.label}</h1>
				{isEdit ? (
					<div className="flex gap-2 absolute -top-6 p-1 rounded-t-md bg-gray-500 text-white right-2">
						<button onClick={() => deleteNode()}>
							<MdDelete />
						</button>
						<button onClick={() => openModal(node)}>
							<MdEdit />
						</button>
					</div>
				) : null}
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
