"use client";
import React from "react";
import "reactflow/dist/style.css";
import NodeCheckbox from "./NodeCheckBox";
import { useDeleteNodes } from "../hooks/useDeleteNodes";

export const DeleteNode = () => {
	const { deleteNode, reset, setTargets, nodes } = useDeleteNodes();

	return (
		<form onSubmit={deleteNode} className="flex gap-4">
			<div className="grid grid-cols-4 gap-10">
				{nodes.map((node, i) => (
					<div key={i} className="flex justify-between p-1">
						<h1>{node.data.label}</h1>
						<h1>{node.id}</h1>
						<NodeCheckbox id={node.id} reset={reset} onChange={setTargets} />
					</div>
				))}
			</div>
			<button
				className="bg-white text-black py-1 px-3 rounded-md"
				type="submit"
			>
				Delete
			</button>
		</form>
	);
};
