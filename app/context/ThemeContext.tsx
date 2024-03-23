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

type ThemeItem = {
	backgroundColor: string;
	textColor: string;
};

type ThemeColors = {
	primary: ThemeItem;
	secondary: ThemeItem;
	ternary: ThemeItem;
	button: ThemeItem;
};

interface ThemeData {
	setTheme: Dispatch<SetStateAction<Theme>>;
	getTheme: (color?: string) => ThemeColors;
	theme: Theme;
}

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

	const darkTheme: ThemeColors = {
		primary: { backgroundColor: "black", textColor: "#14b8a6" },
		secondary: { backgroundColor: "#171717", textColor: "white" },
		ternary: { backgroundColor: "#262626", textColor: "#9ca3af" },
		button: { backgroundColor: "#14b8a6", textColor: "black" },
	};
	const lightTheme: ThemeColors = {
		primary: { backgroundColor: "white", textColor: "black" },
		secondary: { backgroundColor: "#e5e5e5", textColor: "black" },
		ternary: { backgroundColor: "#9ca3af", textColor: "black" },
		button: { backgroundColor: "#14b8a6", textColor: "black" },
	};
	const defaultTheme: ThemeColors = {
		primary: { backgroundColor: "white", textColor: "black" },
		secondary: { backgroundColor: "#e5e5e5", textColor: "black" },
		ternary: { backgroundColor: "white", textColor: "black" },
		button: { backgroundColor: "#14b8a6", textColor: "black" },
	};

	function getTheme(color?: string) {
		let themeObj: ThemeColors = {
			primary: { backgroundColor: "", textColor: "" },
			secondary: { backgroundColor: "", textColor: "" },
			ternary: { backgroundColor: "", textColor: "" },
			button: { backgroundColor: "", textColor: "" },
		};
		if (theme === "dark") {
			themeObj = darkTheme;
		} else if (theme === "light") {
			themeObj = lightTheme;
		} else if (theme === "default" && color) {
			themeObj = {
				primary: { backgroundColor: color, textColor: color },
				secondary: { backgroundColor: color, textColor: color },
				ternary: { backgroundColor: color, textColor: color },
				button: { backgroundColor: color, textColor: color },
			};
		} else if (theme === "default" && !color) {
			themeObj = defaultTheme;
		}

		return themeObj;
	}

	const themeData: ThemeData = {
		setTheme,
		getTheme,
		theme,
	};

	return (
		<ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
	);
};
