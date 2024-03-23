"use client";
import { Dispatch, SetStateAction, useState } from "react";
import {
	IoIosArrowDropdownCircle,
	IoIosArrowDropupCircle,
} from "react-icons/io";
import { useTheme } from "../context/ThemeContext";
import { NodeOption } from "@/types/types";

interface InputSelectProps {
	item: NodeOption;
	onChange: Dispatch<SetStateAction<NodeOption>>;
	options: NodeOption[];
}

export const InputSelect: React.FC<InputSelectProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const { getTheme } = useTheme();

	return (
		<div className="flex flex-col w-full sm:w-[300px] gap-2 relative">
			<div
				className="flex rounded-3xl p-1  overflow-hidden  pl-4 pr-2 justify-between  z-0"
				style={{ backgroundColor: getTheme().primary.backgroundColor }}
			>
				<h1 className="text-sm">
					{props.item.id === "" ? "Select" : props.item.label}
				</h1>
				<button
					className="p-1 focus:outline-none "
					type="button"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
				</button>
			</div>
			{isOpen ? (
				<div className="flex h-[300px]   rounded-l-md overflow-x-hidden custom-scrollbar text-left overflow-y-scroll flex-col absolute mt-8 w-full z-10">
					<button
						type="button"
						onClick={() => props.onChange({ label: "", id: "" })}
						className=" border-b-2 border-black text-left px-4 py-1"
						style={{ backgroundColor: getTheme().ternary.backgroundColor }}
					>
						None
					</button>
					{props.options.map((option) => (
						<button
							style={{
								backgroundColor: getTheme().ternary.backgroundColor,
							}}
							className=" border-b-2 border-black text-left px-4 py-1"
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
