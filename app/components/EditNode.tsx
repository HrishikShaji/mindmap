"use client";

import { useEditNode } from "../hooks/useEditNode";

export const EditNode = () => {
	const { handleChange, data, editNode } = useEditNode();
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
		<form onSubmit={editNode} className="flex flex-col gap-4">
			{inputs.map((input, i) => (
				<div className="grid grid-cols-2 items-center gap-10" key={i}>
					<label className=" ">{input.label}</label>
					<input
						{...input}
						onChange={handleChange}
						className="py-1 px-3 w-full rounded-3xl"
					/>
				</div>
			))}
			<button
				className="bg-white text-black py-1 px-3 rounded-3xl"
				type="submit"
			>
				Update
			</button>
		</form>
	);
};
