import { ChangeEvent, FormEvent, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

const initialData = {
	label: "",
	positive: 0,
	negative: 0,
	total: 0,
	comments: 0,
	color: "",
};

export const useAddNode = () => {
	const { setNodes } = useNodeEdgeContext();
	const [data, setData] = useState(initialData);

	function addNode(e: FormEvent) {
		e.preventDefault();

		try {
			setNodes((prevNodes) => [
				...prevNodes,
				{
					id: (prevNodes.length + 1).toString(),
					position: { x: 20, y: 100 },
					data: {
						label: data.label,
						color: data.color,
						id: (prevNodes.length + 1).toString(),
						graphData: {
							positive: data.positive,
							negative: data.negative,
							total: data.total,
							comments: data.comments,
						},
					},
					type: "custom",
				},
			]);
		} catch (err) {
			console.log(err);
		} finally {
			setData(initialData);
		}
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	return { handleChange, data, addNode };
};
