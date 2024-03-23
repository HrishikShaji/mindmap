import React, { ChangeEvent, FormEvent } from "react";
import "reactflow/dist/style.css";
import { useTheme } from "../context/ThemeContext";
import { FormHeading } from "./FormHeading";
import { FormButton } from "./FormButton";

type InitialFormData = {
	label: string;
	name: string;
	value: string | number;
	placeholder: string;
};

interface InputFormProps {
	formTitle: string;
	initialInputs: InitialFormData[];
	handleSubmit: (e: FormEvent) => void;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm: React.FC<InputFormProps> = ({
	initialInputs,
	handleChange,
	handleSubmit,
	formTitle,
}) => {
	const { getTheme } = useTheme();

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-10 sm:gap-4">
			<FormHeading>{formTitle}</FormHeading>
			<div className="flex flex-col gap-2">
				{initialInputs.map((input, i) => (
					<div
						className="sm:grid  sm:grid-cols-2 flex flex-col gap-2 items-center  sm:gap-10"
						key={i}
					>
						<label
							style={{ color: getTheme().secondary.textColor }}
							className=" text-sm"
						>
							{input.label}
						</label>
						<input
							{...input}
							onChange={handleChange}
							className="py-1 px-3 w-full rounded-3xl focus:outline-none text-sm"
							style={{
								backgroundColor: getTheme().primary.backgroundColor,
								color: getTheme().primary.textColor,
							}}
						/>
					</div>
				))}
			</div>
			<FormButton>SUBMIT</FormButton>
		</form>
	);
};
