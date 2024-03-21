"use client";
import React from "react";
import "reactflow/dist/style.css";
import NodeCheckbox from "./NodeCheckBox";
import { useDeleteNodes } from "../hooks/useDeleteNodes";

export const DeleteNode = () => {
	const { deleteNode, reset, setTargets, nodes } = useDeleteNodes();

	return (
		<form onSubmit={deleteNode} className="flex flex-col gap-4">
			<div className="grid grid-cols-5 gap-5">
				{nodes.map((node, i) => (
					<div
						key={i}
						className="flex justify-between items-center p-1 rounded-3xl bg-teal-500"
					>
						<h1 className="w-10 flex justify-center items-center h-10 rounded-full bg-white">
							{node.id}
						</h1>
						<h1 className="text-sm mx-2">{node.data.label}</h1>
						<NodeCheckbox id={node.id} reset={reset} onChange={setTargets} />
					</div>
				))}
			</div>
			<button className="bg-white text-black py-3  rounded-3xl" type="submit">
				Delete
			</button>
		</form>
	);
};
