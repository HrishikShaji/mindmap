import { BaseEdge, EdgeProps, Node, getSimpleBezierPath } from "reactflow";
import { useTheme } from "../context/ThemeContext";
import { useEdit } from "../context/EditContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";

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
    return currentNode[0].data.color;
  }

  return (
    <>
      <BaseEdge
        path={edgePath}
        style={{
          stroke: getTheme().primary.textColor,
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
