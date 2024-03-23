"use client";
import { Dispatch, SetStateAction, useState } from "react";
import {
	IoIosArrowDropdownCircle,
	IoIosArrowDropupCircle,
} from "react-icons/io";
import { NodeOption } from "@/types/types";

interface InputSelectProps {
	item: NodeOption;
	onChange: Dispatch<SetStateAction<NodeOption>>;
	options: NodeOption[];
	none: boolean;
}

export const InputSelect: React.FC<InputSelectProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col w-full sm:w-[300px] gap-2 relative">
			<div className="flex rounded-3xl p-1 text-black overflow-hidden  pl-4 bg-teal-500  pr-2 justify-between  z-0">
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
				<div className="flex max-h-[200px]   rounded-l-md overflow-x-hidden custom-scrollbar text-left overflow-y-scroll flex-col absolute mt-10 w-full z-[99px]">
					{props.none && (
						<button
							type="button"
							onClick={() => props.onChange({ label: "", id: "" })}
							className="text-black border-b-2 bg-teal-500 hover:bg-teal-300 border-black text-left px-4 py-1"
						>
							None
						</button>
					)}
					{props.options.map((option) => (
						<button
							className=" border-b-2 text-black  bg-teal-500 hover:bg-teal-300 border-black text-left px-4 py-1"
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
