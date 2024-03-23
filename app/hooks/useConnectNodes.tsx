import { FormEvent, useEffect, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { Node } from "reactflow";
import { NodeOption } from "@/types/types";
import { filterNodesWithoutSelectedOption, getNode } from "@/lib/utils";

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
		const newNodes = filterNodesWithoutSelectedOption({
			nodes: nodes,
			edges: edges,
			id: option.id,
		});
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
					sourceNode: getNode({ id: option.id, nodes: nodes }),
					targetNode: getNode({ id: target, nodes: nodes }),
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
