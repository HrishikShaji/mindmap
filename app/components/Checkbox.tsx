import { EdgeOption } from "@/types/types";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface CheckBoxProps {
	source: string;
	target: string;
	onChange: Dispatch<SetStateAction<EdgeOption[]>>;
}

const Checkbox: React.FC<CheckBoxProps> = ({ source, target, onChange }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.checked = false;
		}
	}, [source, target]);

	function handleChange() {
		if (inputRef.current?.checked) {
			onChange((prev) => [...prev, { source: source, target: target }]);
		} else {
			onChange((prev) =>
				prev.filter(
					(item) => !(item.source === source && item.target === target),
				),
			);
		}
	}

	return (
		<div className="checkbox-wrapper">
			<label>
				<input
					defaultChecked={false}
					ref={inputRef}
					onChange={handleChange}
					className="checkbox-round"
					type="checkbox"
				/>
			</label>
		</div>
	);
};
export default Checkbox;
