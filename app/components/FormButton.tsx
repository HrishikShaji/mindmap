import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface FormButtonProps {
	children: ReactNode
}

export const FormButton: React.FC<FormButtonProps> = ({ children }) => {
	const { getTheme } = useTheme();
	return (
		<button
			className=" py-3  rounded-3xl"
			type="submit"
			style={{
				backgroundColor: getTheme().button.backgroundColor,
				color: getTheme().button.textColor,
			}}
		>
			{children}
		</button>
	);
};
