import { BaseEdge, EdgeProps, Node, getSimpleBezierPath } from "reactflow";
import { useTheme } from "../context/ThemeContext";
import { useEdit } from "../context/EditContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { useEffect, useState } from "react";

export default function CustomEdge({
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	source,
}: EdgeProps) {
	const { getTheme } = useTheme();
	const { nodes } = useNodeEdgeContext();
	const { isEdit } = useEdit();
	const [color, setColor] = useState("");
	const [edgePath] = getSimpleBezierPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition,
	});

	function getColorFromSource({
		nodes,
		source,
	}: {
		nodes: Node[];
		source: string;
	}) {
		const currentNode = nodes.filter((node) => node.id === source);
		const color = currentNode[0] ? currentNode[0].data.color : "#14b8a6";
		return color;
	}

	useEffect(() => {
		const color = getColorFromSource({ nodes: nodes, source: source });
		setColor(color);
	}, [nodes, source]);

	return (
		<>
			<BaseEdge
				path={edgePath}
				style={{
					stroke: getTheme(color).primary.textColor,
					strokeWidth: 2,
				}}
			/>

			{!isEdit && (
				<circle
					style={{
						filter: `drop-shadow(3px 3px 5px ${"10px"}`,
					}}
					r="4"
					fill={
						getTheme(getColorFromSource({ nodes: nodes, source: source }))
							.primary.textColor
					}
					className="circle"
				>
					<animateMotion dur="3s" repeatCount="indefinite" path={edgePath} />
				</circle>
			)}
		</>
	);
}
