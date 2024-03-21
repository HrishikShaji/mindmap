"use client";

import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";

type Theme = "dark" | "light" | "default";

type GetBGParams = {
	defaultColor?: string;
};
type ThemeColors = {
	primary: string;
	secondary: string;
	ternary: string;
};

type ThemeData = {
	setTheme: Dispatch<SetStateAction<Theme>>;
	getBG: ({ defaultColor }: GetBGParams) => ThemeColors;
	getTextColor: () => string;
};

const ThemeContext = createContext<ThemeData | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>("dark");

	const dark: ThemeColors = {
		primary: "black",
		secondary: "#171717",
		ternary: "#262626",
	};

	const light: ThemeColors = {
		primary: "white",
		secondary: "#e5e5e5",
		ternary: "#a1a1aa",
	};

	function getBG({ defaultColor }: GetBGParams) {
		let themeObj: ThemeColors = { primary: "", secondary: "", ternary: "" };
		if (theme === "dark") {
			themeObj = dark;
		} else if (theme === "light") {
			themeObj = light;
		} else if (theme === "default" && defaultColor) {
			themeObj = {
				primary: defaultColor,
				secondary: defaultColor,
				ternary: defaultColor,
			};
		}

		return themeObj;
	}

	function getTextColor() {
		let themeColor = "";
		if (theme === "dark") {
			themeColor = "#14b8a6";
		} else if (theme === "light") {
			themeColor = "black";
		} else if (theme === "default") {
			themeColor = "black";
		}
		return themeColor;
	}

	const themeData: ThemeData = {
		setTheme,
		getBG,
		getTextColor,
	};

	return (
		<ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
	);
};
