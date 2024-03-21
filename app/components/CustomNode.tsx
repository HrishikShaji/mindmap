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
			className="w-[250px]  bg-white  flex h-12 px-1  relative shadow-md rounded-3xl  "
		>
			<div
				className="flex   items-center w-full "
				style={{ justifyContent: isEdit ? "space-between" : "center" }}
			>
				{isEdit && (
					<h1 className="w-10 h-10 flex items-center justify-center text-sm rounded-full bg-neutral-300 ">
						{data.id}
					</h1>
				)}
				<h1 className=" font-semibold text-sm ">{data.label}</h1>
				{isEdit && (
					<div className="flex gap-1  p-1 rounded-3xl bg-gray-500 text-white ">
						<button
							className="p-1 rounded-full bg-neutral-300"
							onClick={() => deleteNode()}
						>
							<MdDelete />
						</button>
						<button
							className="p-1 rounded-full bg-neutral-300 "
							onClick={toggleEdit}
						>
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
