"use client";
import React from "react";
import "reactflow/dist/style.css";
import { InputSelect } from "./InputSelect";
import NodeCheckbox from "./NodeCheckBox";
import { useConnectNodes } from "../hooks/useConnectNodes";

export const ConnectNodes = () => {
	const { connectNodes, option, options, reset, nodes, setOption, setTargets } =
		useConnectNodes();
	return (
		<form className="flex gap-10 flex-col" onSubmit={connectNodes}>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h1>Select Source</h1>
					<InputSelect item={option} options={options} onChange={setOption} />
				</div>
				<div className="flex flex-col gap-4">
					<h1>Select Targets</h1>

					<div className="grid grid-cols-5 gap-4">
						{nodes.map((node, i) => (
							<div
								key={i}
								className="flex justify-between items-center p-1 rounded-3xl bg-teal-500"
							>
								<h1 className="w-10 flex justify-center items-center h-10 rounded-full bg-white">
									{node.id}
								</h1>
								<h1 className="text-sm mx-2">{node.data.label}</h1>
								<NodeCheckbox
									id={node.id}
									reset={reset}
									onChange={setTargets}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<button className="px-3 py-1 rounded-3xl bg-white">Connect</button>
		</form>
	);
};
