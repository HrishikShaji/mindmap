"use client";
import React from "react";
import "reactflow/dist/style.css";
import Checkbox from "./Checkbox";
import { useDisconnectNodes } from "../hooks/useDisconnectNodes";

export const DisconnectNodes = () => {
	const { edges, disconnectNodes, setSelectedItems } = useDisconnectNodes();
	return (
		<div className="flex flex-col gap-5">
			<div className="grid grid-cols-5 gap-5">
				{edges.map((edge, i) => (
					<div
						key={i}
						className="flex justify-between gap-10 p-1 items-center rounded-3xl bg-teal-500"
					>
						<div className="flex items-center">
							<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
								{edge.source}
							</div>
							<h1>---</h1>
							<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
								{edge.target}
							</div>
						</div>
						<Checkbox
							source={edge.source}
							target={edge.target}
							onChange={setSelectedItems}
						/>
					</div>
				))}
			</div>
			<button className="p-2 rounded-3xl bg-white" onClick={disconnectNodes}>
				Disconnect
			</button>
		</div>
	);
};
