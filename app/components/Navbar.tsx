"use client";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
	const { setTheme, getTheme } = useTheme();
	return (
		<div
			style={{
				backgroundColor: getTheme().primary.backgroundColor,
				color: getTheme().primary.textColor,
			}}
			className=" w-full fixed top-0 left-0 py-2 px-5 flex justify-between"
		>
			<h1 className="">MINDMAP</h1>
			<div className="flex gap-4">
				<button onClick={() => setTheme("light")} className="">
					Light
				</button>
				<button onClick={() => setTheme("default")} className="">
					Default
				</button>
				<button onClick={() => setTheme("dark")} className="">
					Dark
				</button>
			</div>
		</div>
	);
};
