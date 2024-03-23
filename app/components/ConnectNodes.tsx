"use client";
import React from "react";
import "reactflow/dist/style.css";
import { InputSelect } from "./InputSelect";
import NodeCheckbox from "./NodeCheckBox";
import { useConnectNodes } from "../hooks/useConnectNodes";
import { useTheme } from "../context/ThemeContext";
import { FormHeading } from "./FormHeading";
import { SecondaryHeading } from "./SecondaryHeading";
import { FormButton } from "./FormButton";

export const ConnectNodes = () => {
	const {
		newNodes,
		connectNodes,
		option,
		options,
		reset,
		setOption,
		setTargets,
	} = useConnectNodes();

	const { getTheme } = useTheme();
	return (
		<form className="flex gap-4 flex-col" onSubmit={connectNodes}>
			<FormHeading>CONNECT NODES</FormHeading>
			<div className="flex flex-col gap-4">
				<SecondaryHeading>Select Source</SecondaryHeading>
				<InputSelect item={option} options={options} onChange={setOption} />
			</div>
			<div className="flex flex-col gap-4">
				<SecondaryHeading>Select Targets</SecondaryHeading>

				<div className="custom-scrollbar grid grid-cols-1  h-[200px] overflow-y-scroll pr-2   gap-2 ">
					{newNodes.map((node, i) => (
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
							<NodeCheckbox id={node.id} reset={reset} onChange={setTargets} />
						</div>
					))}
				</div>
			</div>
			<FormButton>CONNECT</FormButton>
		</form>
	);
};
