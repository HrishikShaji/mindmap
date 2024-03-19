import { FormEvent, useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { Node } from "reactflow";

export const EditNode = () => {
	const [label, setIsLabel] = useState("");
	const { isOpen, id } = useModal();
	const [currentNode, setCurrentNode] = useState<Node | null>(null);
	const { setNodes, nodes } = useNodeEdgeContext();
	useEffect(() => {
		const currentNode = nodes.filter((item) => item.id === id);
		if (currentNode.length !== 0) {
			setIsLabel(currentNode[0].data.label);
			setCurrentNode(currentNode[0]);
		}
	}, [id, nodes]);

	function editNode(e: FormEvent) {
		e.preventDefault();
		try {
			setNodes((prev) =>
				prev.filter((item) => {
					if (item.id === id) {
						item.data = {
							...item.data,
							label: label,
						};
					}
					return item;
				}),
			);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLabel("");
		}
	}
	if (!isOpen) return null;
	return (
		<div>
			<h1>{currentNode?.data.label}</h1>
			<form onSubmit={editNode} className="flex flex-col gap-2">
				<input
					className="rounded-md p-1"
					value={label}
					onChange={(e) => setIsLabel(e.target.value)}
				/>
				<button type="submit">Update</button>
			</form>
		</div>
	);
};
