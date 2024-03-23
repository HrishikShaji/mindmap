"use client";
import { useState } from "react";
import {
	IoIosArrowDropdownCircle,
	IoIosArrowDropupCircle,
} from "react-icons/io";
import { Theme, useTheme } from "../context/ThemeContext";
import { NodeOption } from "@/types/types";

export const ModeButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { getTheme } = useTheme();
	const options: NodeOption[] = [
		{
			label: "Light",
			id: "light",
		},
		{
			label: "Dark",
			id: "dark",
		},
		{
			label: "System",
			id: "default",
		},
	];

	const [option, setOption] = useState<NodeOption>({
		label: "System",
		id: "default",
	});
	const { setTheme } = useTheme();

	return (
		<div className="flex flex-col w-[100px]  gap-2 relative">
			<div
				className="flex rounded-3xl p-1 items-center overflow-hidden  pl-4 pr-2 justify-between  z-0"
				style={{
					backgroundColor: getTheme().button.backgroundColor,
					color: getTheme().button.textColor,
				}}
			>
				<h1 className="text-sm">{option.label}</h1>
				<button
					className="p-1 focus:outline-none hover:opacity-50"
					type="button"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
				</button>
			</div>
			{isOpen ? (
				<div className="flex max-h-[300px] rounded-3xl divide-y-2 divide-white   text-left flex-col absolute mt-10 w-full  overflow-hidden">
					{options.map((option) => (
						<button
							className=" text-black bg-teal-500 hover:bg-teal-300 text-sm px-4 py-1"
							type="button"
							onClick={() => {
								setTheme(option.id as Theme);
								setOption({ id: option.id, label: option.label });
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
