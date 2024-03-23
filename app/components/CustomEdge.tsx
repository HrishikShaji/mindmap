import { BaseEdge, EdgeProps, getSimpleBezierPath } from "reactflow";
import { useTheme } from "../context/ThemeContext";

export default function CustomEdge({
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
}: EdgeProps) {
	const { getTheme } = useTheme();
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
		</>
	);
}
