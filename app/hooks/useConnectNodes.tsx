import { FormEvent, useState } from "react";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { NodeOption } from "../lib/types";

export const useConnectNodes = () => {
	const { setEdges, nodes } = useNodeEdgeContext();
	const [targets, setTargets] = useState<string[]>([]);
	const [reset, setReset] = useState(false);

	const options = nodes.map((item) => {
		return { label: item.data.label, id: item.id };
	});
	const [option, setOption] = useState<NodeOption>({ label: "", id: "" });
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

	return { reset, connectNodes, options, option, setOption, nodes, setTargets };
};
