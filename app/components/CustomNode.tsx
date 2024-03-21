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
					<h1
						className="w-8 h-8 flex items-center justify-center text-sm  rounded-full "
						style={{
							backgroundColor: getBG({ defaultColor: "white" }).ternary,
							color: getTextColor(),
						}}
					>
						{data.id}
					</h1>
				)}
				<h1 className=" font-semibold text-sm ">{data.label}</h1>
				{isEdit && (
					<div
						style={{
							backgroundColor: getBG({ defaultColor: "black" }).ternary,
							color: getTextColor(),
						}}
						className="flex gap-1  p-1 rounded-3xl  "
					>
						<button
							className="p-1 rounded-full "
							onClick={() => deleteNode()}
							style={{
								backgroundColor: getBG({ defaultColor: "white" }).primary,
								color: getTextColor(),
							}}
						>
							<MdDelete />
						</button>
						<button
							className="p-1 rounded-full  "
							onClick={toggleEdit}
							style={{
								backgroundColor: getBG({ defaultColor: "white" }).primary,
								color: getTextColor(),
							}}
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
