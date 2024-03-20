"use client";
import { Dispatch, SetStateAction, useState } from "react";
import {
	IoIosArrowDropdownCircle,
	IoIosArrowDropupCircle,
} from "react-icons/io";
import { NodeOption } from "./ConnectNodes";

interface InputSelectProps {
	item: NodeOption;
	onChange: Dispatch<SetStateAction<NodeOption>>;
	options: NodeOption[];
}

export const InputSelect: React.FC<InputSelectProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col w-[300px] gap-2 relative">
			<div className="flex gap-2 justify-between bg-white z-0">
				<h1>{props.item.id === "" ? "Select" : props.item.label}</h1>
				<button
					className="p-1 bg-white"
					type="button"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
				</button>
			</div>
			{isOpen ? (
				<div className="flex h-[400px] overflow-y-scroll flex-col absolute mt-10 w-full z-10">
					<button
						type="button"
						onClick={() => props.onChange({ label: "", id: "" })}
						className="bg-neutral-300"
					>
						None
					</button>
					{props.options.map((option) => (
						<button
							className="bg-neutral-300"
							type="button"
							onClick={() => {
								props.onChange({ id: option.id, label: option.label });
								setIsOpen(!isOpen);
							}}
							key={option.id}
						>
							{option.label}
						</button>
					))}
				</div>
			) : null}
		</div>
	);
};
