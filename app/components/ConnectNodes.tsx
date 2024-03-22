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

	const { getTheme } = useTheme();
	return (
		<form className="flex gap-10 flex-col" onSubmit={connectNodes}>
			<h1
				className=" border-b-2  font-semibold pb-3"
				style={{
					color: getTheme().primary.textColor,
					borderColor: getTheme().primary.textColor,
				}}
			>
				CONNECT NODES
			</h1>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h1>Select Source</h1>
					<InputSelect item={option} options={options} onChange={setOption} />
				</div>
				<div className="flex flex-col gap-4">
					<h1>Select Targets</h1>

					<div className="custom-scrollbar grid grid-cols-1 h-[300px] overflow-y-scroll pr-2   gap-2 ">
						{nodes.map((node, i) => (
							<div
								key={i}
								className="flex justify-between items-center p-1  rounded-3xl"
								style={{
									backgroundColor: getTheme().primary.backgroundColor,
								}}
							>
								<h1
									className=" w-6 text-xs flex justify-center items-center h-6 rounded-full "
									style={{
										backgroundColor: getTheme().secondary.backgroundColor,
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
				style={{
					backgroundColor: getTheme().button.backgroundColor,
					color: getTheme().button.textColor,
				}}
			>
				Connect
			</button>
		</form>
	);
};
