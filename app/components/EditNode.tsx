"use client";

import { useEditNode } from "../hooks/useEditNode";
import { InputForm } from "./InputForm";

export const EditNode = () => {
	const { handleChange, data, editNode } = useEditNode();
	const inputs = [
		{
			label: "Label",
			name: "label",
			value: data.label,
			placeholder: "label...",
			type: "text",
		},
		{
			label: "Positive",
			name: "positive",
			value: data.positive,
			placeholder: "label...",
			type: "number",
		},
		{
			label: "Negative",
			name: "negative",
			value: data.negative,
			placeholder: "Negative...",
			type: "number",
		},
		{
			label: "Total",
			name: "total",
			value: data.total,
			placeholder: "Total...",
			type: "number",
		},
		{
			label: "Comment",
			name: "comments",
			value: data.comments,
			placeholder: "Comments...",
			type: "number",
		},
		{
			label: "Color",
			name: "color",
			value: data.color,
			placeholder: "Color...",
			type: "color",
		},
	];

	return (
		<InputForm
			initialInputs={inputs}
			handleChange={handleChange}
			handleSubmit={editNode}
			formTitle="UPDATE NODE"
		/>
	);
};
