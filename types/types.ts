export type GraphData = {
	[key: string]: number;
};

export type NodeOption = {
	label: string;
	id: string;
};
export type NodeData = {
	label: string;
	id: string;
	color: string;
	graphData: GraphData;
};

export type NodeType = "custom" | "start" | "end";

export type EdgeOption = {
	source: string;
	target: string;
};

export type EdgeInitialData = {
	id: string;
	source: string;
	target: string;
	type: string;
	animated: boolean;
};

export type NodeInitialData = {
	id: string;
	label: string;
	type: string;
	color: string;
};
