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
	const { getTheme } = useTheme();

	return (
		<div
			onClick={toggleModal}
			style={{
				cursor: isEdit ? "" : "pointer",
				backgroundColor: getTheme(data.color).primary.backgroundColor,
				color: getTheme().primary.textColor,
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
							backgroundColor: getTheme().ternary.backgroundColor,
							color: getTheme().ternary.textColor,
						}}
					>
						{data.id}
					</h1>
				)}
				<h1 className=" font-semibold text-sm ">{data.label}</h1>
				{isEdit && (
					<div
						style={{
							backgroundColor: getTheme().ternary.backgroundColor,
							color: getTheme().ternary.textColor,
						}}
						className="flex gap-1  p-1 rounded-3xl  "
					>
						<button
							className="p-1 rounded-full "
							onClick={() => deleteNode()}
							style={{
								backgroundColor: getTheme(data.color).primary.backgroundColor,
								color: getTheme().primary.textColor,
							}}
						>
							<MdDelete />
						</button>
						<button
							className="p-1 rounded-full  "
							onClick={toggleEdit}
							style={{
								backgroundColor: getTheme(data.color).primary.backgroundColor,
								color: getTheme().primary.textColor,
							}}
						>
							<MdEdit />
						</button>
					</div>
				)}
			</div>
			<Handle
				type="target"
				className="relative! "
				style={{
					height: isEdit ? "8px" : "0px",
					width: isEdit ? "8px" : "0px",
					borderWidth: isEdit ? "1px" : "0px",
				}}
				position={Position.Left}
				onConnect={(params) => console.log("handle onConnect", params)}
				isConnectable={isEdit}
			>
				<span
					style={{ backgroundColor: isEdit ? "teal" : "transparent" }}
					className="animate-ping absolute pointer-events-none inline-flex h-full w-full rounded-full  opacity-75"
				></span>
			</Handle>
			<Handle
				style={{
					height: isEdit ? "8px" : "0px",
					width: isEdit ? "8px" : "0px",
					borderWidth: isEdit ? "1px" : "0px",
				}}
				type="source"
				position={Position.Right}
				className="relative! h-2 w-2"
				isConnectable={isEdit}
				onConnect={(params) => console.log("handle onConnect", params)}
			>
				<span
					style={{ backgroundColor: isEdit ? "teal" : "transparent" }}
					className="animate-ping absolute pointer-events-none inline-flex h-full w-full rounded-full  opacity-75"
				></span>
			</Handle>
		</div>
	);
}

export default memo(CustomNode);
