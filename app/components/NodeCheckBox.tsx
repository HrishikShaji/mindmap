import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface NodeCheckBoxProps {
	id: string;
	reset: boolean;
	onChange: Dispatch<SetStateAction<string[]>>;
}

const NodeCheckbox: React.FC<NodeCheckBoxProps> = ({ reset, id, onChange }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.checked = false;
		}
	}, [reset]);

	function handleChange() {
		if (inputRef.current?.checked) {
			onChange((prev) => [...prev, id]);
		} else {
			onChange((prev) => prev.filter((item) => item !== id));
		}
	}

	return (
		<div className="checkbox-wrapper">
			<label>
				<input
					defaultChecked={false}
					ref={inputRef}
					onChange={handleChange}
					type="checkbox"
				/>
			</label>
		</div>
	);
};
export default NodeCheckbox;
