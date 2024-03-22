"use client";
import React from "react";
import "reactflow/dist/style.css";
import NodeCheckbox from "./NodeCheckBox";
import { useDeleteNodes } from "../hooks/useDeleteNodes";
import { useTheme } from "../context/ThemeContext";

export const DeleteNode = () => {
	const { deleteNode, reset, setTargets, nodes } = useDeleteNodes();
	const { getBG, getTextColor } = useTheme();

	return (
		<form onSubmit={deleteNode} className="flex flex-col h-full gap-4">
			<div className="grid custom-scrollbar grid-cols-1 h-[300px] overflow-y-scroll pr-2   gap-2 ">
				{nodes.map((node, i) => (
					<div
						key={i}
						className="flex justify-between items-center p-1  rounded-3xl"
						style={{
							backgroundColor: getBG({ defaultColor: "white" }).primary,
						}}
					>
						<h1
							className=" w-6 text-xs flex justify-center items-center h-6 rounded-full "
							style={{
								backgroundColor: getBG({ defaultColor: "gray" }).secondary,
							}}
						>
							{node.id}
						</h1>
						<h1 className="text-sm mx-2">{node.data.label}</h1>
						<NodeCheckbox id={node.id} reset={reset} onChange={setTargets} />
					</div>
				))}
			</div>
			<button
				className=" py-3  rounded-3xl"
				type="submit"
				style={{
					backgroundColor: getBG({ defaultColor: "white" }).primary,
					color: getTextColor(),
				}}
			>
				Delete
			</button>
		</form>
	);
};
