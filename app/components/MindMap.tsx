"use client";
import React, { ReactNode, useState } from "react";
import ReactFlow, { NodeTypes } from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { AddNode } from "./AddNode";
import { DeleteNode } from "./DeleteNode";
import { ConnectNodes } from "./ConnectNodes";
import { DisconnectNodes } from "./DisconnectNodes";

const nodeTypes: NodeTypes = {
	custom: CustomNode,
	start: StartNode,
	end: EndNode,
};

type LookupType = {
	[key: string]: ReactNode;
};

const lookup: LookupType = {
	"add-node": <AddNode />,
	"delete-node": <DeleteNode />,
	"connect-nodes": <ConnectNodes />,
	"disconnect-nodes": <DisconnectNodes />,
};

export const MindMap = () => {
	const { onNodesChange, onEdgesChange, nodes, edges } = useNodeEdgeContext();
	const [selected, setSelected] = useState("add-node");
	return (
		<div className="h-screen  flex flex-col">
			<div className=" bg-teal-500 p-5 gap-5 flex flex-col">
				<div className="flex gap-10">
					<button
						onClick={() => setSelected("add-node")}
						className="px-3 py-1 rounded-md bg-teal-300"
					>
						Add Node
					</button>
					<button
						onClick={() => setSelected("delete-node")}
						className="px-3 py-1 rounded-md bg-teal-300"
					>
						Delete Node
					</button>
					<button
						onClick={() => setSelected("connect-nodes")}
						className="px-3 py-1 rounded-md bg-teal-300"
					>
						Connect Nodes
					</button>
					<button
						onClick={() => setSelected("disconnect-nodes")}
						className="px-3 py-1 rounded-md bg-teal-300"
					>
						Disconnect Nodes
					</button>
				</div>
				{lookup[selected]}
			</div>
			<div style={{ width: "100vw", height: "90vh" }}>
				<ReactFlow
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					nodeTypes={nodeTypes}
					nodes={nodes}
					edges={edges}
				/>
			</div>
		</div>
	);
};
