"use client";
import React from "react";
import "reactflow/dist/style.css";
import { useAddNode } from "../hooks/useAddNode";
import { InputForm } from "./InputForm";

export const AddNode = () => {
	const { addNode, data, handleChange } = useAddNode();

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
			handleSubmit={addNode}
			handleChange={handleChange}
			formTitle="ADD NODE"
		/>
	);
};
