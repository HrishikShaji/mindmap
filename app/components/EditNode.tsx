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
		<InputForm
			initialInputs={inputs}
			handleChange={handleChange}
			handleSubmit={editNode}
			formTitle="UPDATE NODE"
		/>
	);
};
