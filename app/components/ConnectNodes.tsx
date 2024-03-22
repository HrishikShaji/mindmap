"use client";
import React from "react";
import "reactflow/dist/style.css";
import { InputSelect } from "./InputSelect";
import NodeCheckbox from "./NodeCheckBox";
import { useConnectNodes } from "../hooks/useConnectNodes";
import { useTheme } from "../context/ThemeContext";

export const ConnectNodes = () => {
	const { connectNodes, option, options, reset, nodes, setOption, setTargets } =
		useConnectNodes();

	const { getBG } = useTheme();
	return (
		<form className="flex gap-10 flex-col" onSubmit={connectNodes}>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h1>Select Source</h1>
					<InputSelect item={option} options={options} onChange={setOption} />
				</div>
				<div className="flex flex-col gap-4">
					<h1>Select Targets</h1>

					<div className="grid grid-cols-1 h-40 sm:h-full overflow-scroll sm:overflow-visible sm:grid-cols-5 bg-white sm:bg-transparent rounded-3xl sm:rounded-none    sm:gap-4">
						{nodes.map((node, i) => (
							<div
								key={i}
								className="flex justify-between items-center sm:p-1 px-3 py-1  sm:rounded-3xl "
								style={{
									backgroundColor: getBG({ defaultColor: "white" }).primary,
								}}
							>
								<h1
									className="sm:w-6 text-xs flex justify-center items-center sm:h-6  sm:rounded-full "
									style={{
										backgroundColor: getBG({ defaultColor: "gray" }).secondary,
									}}
								>
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
			<button
				className="p-3 rounded-3xl"
				style={{ backgroundColor: getBG({ defaultColor: "white" }).primary }}
			>
				Connect
			</button>
		</form>
	);
};
