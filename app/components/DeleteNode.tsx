"use client";
import React, { FormEvent, useState } from "react";
import "reactflow/dist/style.css";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

export const DeleteNode = () => {
	const { setNodes } = useNodeEdgeContext();
	const [id, setId] = useState("");

	function deleteNode(e: FormEvent) {
		e.preventDefault();
		try {
			setNodes((prev) => prev.filter((item) => item.id !== id));
		} catch (error) {
			console.log(error);
		} finally {
			setId("");
		}
	}

	return (
		<form onSubmit={deleteNode} className="flex gap-4">
			<input
				value={id}
				onChange={(e) => setId(e.target.value)}
				placeholder="id..."
				className="p-1 rounded-md"
			/>
			<button
				className="bg-white text-black py-1 px-3 rounded-md"
				type="submit"
			>
				Delete
			</button>
		</form>
	);
};
