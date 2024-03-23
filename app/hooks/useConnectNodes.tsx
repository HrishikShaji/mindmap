import { FormEvent, useEffect, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { NodeOption } from "../lib/types";
import { Node } from "reactflow";

export const useConnectNodes = () => {
	const { setEdges, nodes, edges } = useNodeEdgeContext();
	const [targets, setTargets] = useState<string[]>([]);
	const [reset, setReset] = useState(false);
	const [newNodes, setNewNodes] = useState<Node[]>(nodes);
	const options = nodes.map((item) => {
		return { label: item.data.label, id: item.id };
	});
	const [option, setOption] = useState<NodeOption>({ label: "", id: "" });

	useEffect(() => {
		const connectedEdges = edges.filter((edge) => edge.source === option.id);
		const connectedNodeIds = connectedEdges.map((edge) => edge.target);
		const filteredNodes = nodes.filter(
			(node) => !connectedNodeIds.includes(node.id),
		);
		const newNodes = filteredNodes.filter((node) => node.id !== option.id);
		setNewNodes(newNodes);
	}, [option.id, option.label]);

	function connectNodes(e: FormEvent) {
		e.preventDefault();
		try {
			const newEdges = targets.map((target) => {
				return {
					id: `e${option.id}-${target}`,
					source: option.id,
					target: target,
					animated: true,
					type: "custom",
				};
			});

			setEdges((prev) => [...prev, ...newEdges]);
		} catch (err) {
			console.log(err);
		} finally {
			setTargets([]);
			setReset((prev) => !prev);
			setOption({ label: "", id: "" });
		}
	}

	return {
		reset,
		connectNodes,
		options,
		option,
		setOption,
		newNodes,
		nodes,
		setTargets,
	};
};
