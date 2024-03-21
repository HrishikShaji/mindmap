import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { MdDelete, MdEdit } from "react-icons/md";
import { useCustomNode } from "../hooks/useCustomNode";
import { useTheme } from "../context/ThemeContext";
import { NodeData } from "../lib/types";

interface NodeProps {
	data: NodeData;
}

function CustomNode({ data }: NodeProps) {
	const { toggleModal, deleteNode, toggleEdit, isEdit } = useCustomNode();
	const { getTextColor, getBG } = useTheme();

	return (
		<div
			onClick={toggleModal}
			style={{
				cursor: isEdit ? "" : "pointer",
				backgroundColor: getBG({ defaultColor: data.color }).primary,
				color: getTextColor(),
			}}
			className="w-[260px]    flex h-10 px-1  relative shadow-md rounded-3xl  "
		>
			<div
				className="flex   items-center w-full "
				style={{ justifyContent: isEdit ? "space-between" : "center" }}
			>
				{isEdit && (
					<h1 className="w-8 h-8 flex items-center justify-center text-sm text-teal-500 rounded-full bg-neutral-800 ">
						{data.id}
					</h1>
				)}
				<h1 className=" font-semibold text-sm ">{data.label}</h1>
				{isEdit && (
					<div className="flex gap-1  p-1 rounded-3xl bg-neutral-800 text-teal-500 ">
						<button
							className="p-1 rounded-full bg-black"
							onClick={() => deleteNode()}
						>
							<MdDelete />
						</button>
						<button className="p-1 rounded-full bg-black " onClick={toggleEdit}>
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
