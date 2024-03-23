import { BaseEdge, EdgeProps, getSimpleBezierPath, useEdges } from "reactflow";
import { useTheme } from "../context/ThemeContext";
import { useEdit } from "../context/EditContext";

export default function CustomEdge({
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
}: EdgeProps) {
	const { getTheme } = useTheme();
	const { isEdit } = useEdit();
	const [edgePath] = getSimpleBezierPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition,
	});

	return (
		<>
			<BaseEdge
				path={edgePath}
				style={{ stroke: getTheme().primary.textColor, strokeWidth: 2 }}
			/>

			{!isEdit && (
				<circle
					style={{
						filter: `drop-shadow(3px 3px 5px ${"10px"}`,
					}}
					r="4"
					fill={getTheme().primary.textColor}
					className="circle"
				>
					<animateMotion dur="3s" repeatCount="indefinite" path={edgePath} />
				</circle>
			)}
		</>
	);
}
