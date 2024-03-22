import { SyntheticEvent, useCallback, useRef } from "react";
import { useEdit } from "../context/EditContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import {
	Connection,
	Edge,
	EdgeTypes,
	NodeTypes,
	addEdge,
	updateEdge,
	useReactFlow,
} from "reactflow";
import { getRandomGraphData } from "../lib/data";
import StartNode from "../components/StartNode";
import EndNode from "../components/EndNode";
import CustomNode from "../components/CustomNode";
import CustomEdge from "../components/CustomEdge";

const nodeTypes: NodeTypes = {
	custom: CustomNode,
	start: StartNode,
	end: EndNode,
};

const edgeTypes: EdgeTypes = {
	custom: CustomEdge
}

let id = 25;
const getId = () => `${id++}`;

export const useFlow = () => {
	const { onNodesChange, setNodes, onEdgesChange, nodes, setEdges, edges } =
		useNodeEdgeContext();
	const { isEdit } = useEdit();
	const reactFlowWrapper = useRef(null);
	const connectingNodeId = useRef<string | null>(null);
	const { screenToFlowPosition } = useReactFlow();
	const onEdgeUpdate = useCallback(
		(oldEdge: Edge, newConnection: Connection) =>
			setEdges((els) => updateEdge(oldEdge, newConnection, els)),
		[setEdges],
	);
	const onConnect = useCallback(
		(params: Edge | Connection) => {
			if (isEdit) {
				setEdges((els) => addEdge(params, els));
			}
		},
		[isEdit, setEdges],
	);

	const onConnectStart = useCallback(
		(_event: SyntheticEvent, { nodeId }: { nodeId: string }) => {
			connectingNodeId.current = nodeId;
		},
		[],
	);
	const onConnectEnd = useCallback(
		(event: MouseEvent) => {
			if (!isEdit) return;
			if (!connectingNodeId.current) return;

			const targetIsPane = (event.target as HTMLElement).classList.contains(
				"react-flow__pane",
			);

			if (targetIsPane) {
				const id = getId();
				const newNode = {
					id,
					position: screenToFlowPosition({
						x: event.clientX,
						y: event.clientY,
					}),
					data: {
						label: `Node ${id}`,
						id: id,
						graphData: getRandomGraphData(),
					},
					origin: [0.5, 0.0],
					type: "custom",
				};

				setNodes((nds) => nds.concat(newNode));
				setEdges((eds) =>
					eds.concat({
						id,
						source: connectingNodeId.current,
						target: id,
					} as Edge),
				);
			}
		},
		[screenToFlowPosition, isEdit, setEdges, setNodes],
	);

	return {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		reactFlowWrapper,
		onConnect,
		onConnectEnd,
		onConnectStart,
		onEdgeUpdate,
		nodeTypes,
		edgeTypes
	};
};
