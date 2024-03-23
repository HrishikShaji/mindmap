import { useTheme } from "../context/ThemeContext";

interface DataRowProps {
	label: string;
	value: string;
}

export const DataRow: React.FC<DataRowProps> = ({ label, value }) => {
	const { getTheme } = useTheme();

	return (
		<div
			style={{
				backgroundColor: getTheme().ternary.backgroundColor,
				color: getTheme().ternary.textColor,
			}}
			className="grid grid-cols-2 items-center  px-3 py-1 rounded-3xl"
		>
			<h1 className="">{label}</h1>
			<h1 className="text-sm">{value}</h1>
		</div>
	);
};
