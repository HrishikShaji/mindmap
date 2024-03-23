import { FormEvent, useEffect, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { Node, NodeOption } from "../lib/types";

export const useConnectNodes = () => {
	const { setEdges, nodes, edges } = useNodeEdgeContext();
	const [targets, setTargets] = useState<string[]>([]);
	const [reset, setReset] = useState(false);
	const [newNodes, setNewNodes] = useState<Node[]>(nodes as Node[]);
	const options = nodes.map((item) => {
		return { label: item.data.label, id: item.id };
	});
	const [option, setOption] = useState<NodeOption>({ label: "", id: "" });

	useEffect(() => {
		const edgesToRemove = edges.filter(
			(edge) =>
				edge.source === option.id ||
				(edge.sourceNode && edge.sourceNode.id === option.id),
		);
		const nodesToRemove = edgesToRemove.map((edge) => edge.target);

		const remainingNodes = nodes.filter(
			(node) => !nodesToRemove.includes(node.id),
		);
		const remainingEdges = edges.filter(
			(edge) => !edgesToRemove.includes(edge),
		);

		setNewNodes(remainingNodes);
		setEdges(remainingEdges);
	}, [option.id, option.label, nodes, edges]);
	useEffect(() => {
		const currentNodes = nodes.filter((node) => node.id !== option.id);
		const edgesWithoutSelectedSourceAsSource = edges.filter(
			(edge) => edge.source !== option.id && edge.sourceNode?.id !== option.id,
		);
		setNewNodes(currentNodes);
	}, [option.id, option.label, nodes]);

	function connectNodes(e: FormEvent) {
		e.preventDefault();
		try {
			const newEdges = targets.map((target) => {
				return {
					id: `e${option.id}-${target}`,
					source: option.id,
					target: target,
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
