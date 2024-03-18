"use client";
import React, { ReactNode, useState } from "react";
import ReactFlow, { NodeTypes } from "reactflow";
import CustomNode from "./Node";

import "reactflow/dist/style.css";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { MdEdit } from "react-icons/md";
import { useEdit } from "../context/EditContext";
import { EditSection } from "./EditSection";

const nodeTypes: NodeTypes = {
	custom: CustomNode,
	start: StartNode,
	end: EndNode,
};

export const MindMap = () => {
	const { onNodesChange, onEdgesChange, nodes, edges } = useNodeEdgeContext();
	const { isEdit, toggleEdit } = useEdit();
	return (
		<div className="h-screen relative flex flex-col w-screen">
			<div
				onClick={toggleEdit}
				className="absolute cursor-pointer z-20 top-5 left-5 rounded-full p-2 bg-neutral-500 text-white  "
			>
				<MdEdit />
			</div>
			{isEdit ? <EditSection /> : null}
			<div style={{ width: "100vw", height: "100vh" }}>
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
