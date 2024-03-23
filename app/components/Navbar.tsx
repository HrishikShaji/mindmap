"use client";
import { useTheme } from "../context/ThemeContext";
import { ModeButton } from "./ModeButton";

export const Navbar = () => {
	const { getTheme } = useTheme();

	return (
		<div
			style={{
				backgroundColor: getTheme().primary.backgroundColor,
				color: getTheme().primary.textColor,
			}}
			className=" w-full fixed top-0 left-0 py-2 px-5 flex justify-between z-[1000]"
		>
			<h1 className="text-xl font-semibold">MINDMAP</h1>
			<ModeButton />
		</div>
	);
};
