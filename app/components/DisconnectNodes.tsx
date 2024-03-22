"use client";
import React from "react";
import "reactflow/dist/style.css";
import Checkbox from "./Checkbox";
import { useDisconnectNodes } from "../hooks/useDisconnectNodes";
import { useTheme } from "../context/ThemeContext";

export const DisconnectNodes = () => {
	const { edges, disconnectNodes, setSelectedItems } = useDisconnectNodes();
	const { getBG, getTextColor } = useTheme();

	return (
		<div className="flex flex-col gap-5">
			<div className="grid grid-cols-1 h-[300px] overflow-y-scroll pr-2   gap-2 ">
				{edges.map((edge, i) => (
					<div
						key={i}
						className="flex justify-between items-center p-1 gap-5 rounded-3xl"
						style={{
							backgroundColor: getBG({ defaultColor: "white" }).primary,
						}}
					>
						<div className="flex items-center gap-4 text-sm">
							<div
								className="h-6 w-6 rounded-full flex items-center justify-center"
								style={{
									backgroundColor: getBG({ defaultColor: "gray" }).secondary,
								}}
							>
								{edge.source}
							</div>
							<h1>---</h1>
							<div
								className="h-6 w-6 rounded-full flex items-center justify-center"
								style={{
									backgroundColor: getBG({ defaultColor: "gray" }).secondary,
								}}
							>
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
			<button
				className="p-2 rounded-3xl "
				onClick={disconnectNodes}
				style={{ backgroundColor: getBG({ defaultColor: "white" }).primary }}
			>
				Disconnect
			</button>
		</div>
	);
};
