import { Position } from "postcss";
import { CoordinateExtent, XYPosition } from "reactflow";

export type GraphData = {
	[key: string]: number;
};

export type NodeData = {
	label: string;
	id: string;
	graphData: GraphData;
};

export type EdgeOption = {
	source: string;
	target: string;
};

export type Node = {
	id: string;
	position: XYPosition;
	data: NodeData;
	type?: string;
	sourcePosition?: Position;
	targetPosition?: Position;
	hidden?: boolean;
	selected?: boolean;
	dragging?: boolean;
	draggable?: boolean;
	selectable?: boolean;
	connectable?: boolean;
	resizing?: boolean;
	deletable?: boolean;
	dragHandle?: string;
	width?: number | null;
	height?: number | null;
	parentNode?: string;
	zIndex?: number;
	extent?: "parent" | CoordinateExtent;
	expandParent?: boolean;
	positionAbsolute?: XYPosition;
	ariaLabel?: string;
	focusable?: boolean;
	style?: React.CSSProperties;
	className?: string;
};
