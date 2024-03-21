"use client";

import { useTheme } from "../context/ThemeContext";
import { useEditNode } from "../hooks/useEditNode";

export const EditNode = () => {
	const { handleChange, data, editNode } = useEditNode();
	const { getBG, getTextColor } = useTheme();
	const inputs = [
		{
			label: "Label",
			name: "label",
			value: data.label,
			placeholder: "label...",
		},
		{
			label: "Positive",
			name: "positive",
			value: data.positive,
			placeholder: "label...",
		},
		{
			label: "Negative",
			name: "negative",
			value: data.negative,
			placeholder: "Negative...",
		},
		{
			label: "Total",
			name: "total",
			value: data.total,
			placeholder: "Total...",
		},
		{
			label: "Comment",
			name: "comments",
			value: data.comments,
			placeholder: "Comments...",
		},
	];

	return (
		<form onSubmit={editNode} className="flex flex-col gap-10 sm:gap-4">
			<div className="flex flex-col gap-2">
				{inputs.map((input, i) => (
					<div
						className="sm:grid  sm:grid-cols-2 flex flex-col items-center  sm:gap-10"
						key={i}
					>
						<label className=" ">{input.label}</label>
						<input
							{...input}
							onChange={handleChange}
							style={{
								backgroundColor: getBG({ defaultColor: "white" }).primary,
								color: getTextColor(),
							}}
							className="py-1 px-3 w-full rounded-3xl   focus:outline-none text-sm"
						/>
					</div>
				))}
			</div>
			<button
				className="py-1 px-3 rounded-3xl"
				type="submit"
				style={{
					backgroundColor: getBG({ defaultColor: "white" }).primary,
					color: getTextColor(),
				}}
			>
				Update
			</button>
		</form>
	);
};
