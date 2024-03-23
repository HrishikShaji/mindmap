import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface SecondaryHeadingProps {
	children: ReactNode;
}

export const SecondaryHeading: React.FC<SecondaryHeadingProps> = ({
	children,
}) => {
	const { getTheme } = useTheme();
	return (
		<h1
			className="border-b-2 text-sm pb-1"
			style={{
				color: getTheme().primary.textColor,
				borderColor: getTheme().primary.textColor,
			}}
		>
			{children}
		</h1>
	);
};
