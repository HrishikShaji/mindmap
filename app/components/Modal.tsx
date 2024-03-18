import { FormEvent, useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

export const Modal = () => {
	const [label, setIsLabel] = useState("");
	const { isOpen, closeModal, id } = useModal();
	const { setNodes, nodes } = useNodeEdgeContext();

	useEffect(() => {
		const currentNode = nodes.filter((item) => item.id === id);
		if (currentNode.length !== 0) {
			setIsLabel(currentNode[0].data.label);
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
		<div className="h-screen w-full flex items-center z-10 bg-black/50 justify-center fixed top-0 left-0 rounded-md ">
			<div className="h-[500px] relative w-[500px] rounded-md bg-teal-500">
				<button onClick={() => closeModal()} className="absolute top-2 right-2">
					close
				</button>
				<h1>{id}</h1>

				<form onSubmit={editNode} className="flex flex-col gap-2">
					<input
						className="rounded-md p-1"
						value={label}
						onChange={(e) => setIsLabel(e.target.value)}
					/>
					<button type="submit">Update</button>
				</form>
			</div>
		</div>
	);
};
