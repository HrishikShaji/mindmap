import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { useModal } from "../context/ModalContext";

export const useEditNode = () => {
	const [data, setData] = useState({
		label: "",
		positive: 0,
		negative: 0,
		total: 0,
		comments: 0,
		color: "",
	});
	const { id } = useModal();
	const { setNodes, nodes } = useNodeEdgeContext();

	useEffect(() => {
		const currentNode = nodes.filter((node) => node.id === id);
		setData({
			label: currentNode[0].data.label,
			positive: currentNode[0].data.graphData.positive,
			negative: currentNode[0].data.graphData.negative,
			comments: currentNode[0].data.graphData.comments,
			total: currentNode[0].data.graphData.total,
			color: currentNode[0].data.color,
		});
	}, [nodes, id]);

	function editNode(e: FormEvent) {
		e.preventDefault();
		try {
			setNodes((prev) =>
				prev.filter((item) => {
					if (item.id === id) {
						item.data = {
							...item.data,
							label: data.label,
							color: data.color,
							graphData: {
								positive: data.positive,
								negative: data.negative,
								total: data.total,
								comments: data.comments,
							},
						};
					}
					return item;
				}),
			);
		} catch (err) {
			console.log(err);
		}
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	return { handleChange, data, editNode };
};
