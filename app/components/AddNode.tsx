"use client";
import React, { FormEvent, useState } from "react";

import "reactflow/dist/style.css";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

export const AddNode = () => {
	const { setNodes } = useNodeEdgeContext();
	const [label, setLabel] = useState("");

	function addNode(e: FormEvent) {
		e.preventDefault();

		try {
			setNodes((prevNodes) => [
				...prevNodes,
				{
					id: "25",
					position: { x: 0, y: 0 },
					data: { label: label, id: "25" },
					type: "custom",
				},
			]);
		} catch (err) {
			console.log(err);
		} finally {
			setLabel("");
		}
	}
	return (
		<form onSubmit={addNode} className="flex gap-4">
			<input
				value={label}
				onChange={(e) => setLabel(e.target.value)}
				placeholder="label..."
				className="p-1 rounded-md"
			/>
			<button
				className="bg-white text-black py-1 px-3 rounded-md"
				type="submit"
			>
				Add
			</button>
		</form>
	);
};
