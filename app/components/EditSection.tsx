import { MdEdit } from "react-icons/md";
import { EditState, useEdit } from "../context/EditContext";
import { useModal } from "../context/ModalContext";
import { useTheme } from "../context/ThemeContext";

const buttons = [
	{
		label: "Add Node",
		value: "addNode",
	},
	{
		label: "Delete Nodes",
		value: "deleteNodes",
	},
	{
		label: "Connect Nodes",
		value: "connectNodes",
	},
	{
		label: "Disconnect Nodes",
		value: "disconnectNodes",
	},
];

export const EditSection = () => {
	const { openModal } = useModal();
	const { isEdit, toggleEdit, setState } = useEdit();
	const { closeModal, isOpen } = useModal();
	const { getTextColor, getBG } = useTheme();
	function toggleEditSection() {
		toggleEdit();
		setState("");
		if (isOpen) {
			closeModal();
		}
	}

	return (
		<div className=" relative flex items-center">
			<div
				onClick={toggleEditSection}
				className="absolute cursor-pointer z-20 top-5 left-5 rounded-full border-2 border-black p-2 bg-teal-500 text-black  "
			>
				<MdEdit />
			</div>
			{isEdit ? (
				<div className="  z-10 absolute top-6 left-16 rounded-md   flex flex-col sm:flex-row gap-1  sm:gap-4">
					{buttons.map((button, i) => (
						<button
							key={i}
							onClick={() => {
								setState(button.value as EditState);
								openModal();
							}}
							className="px-3 py-1 text-sm rounded-3xl "
							style={{
								backgroundColor: getBG({ defaultColor: "gray" }).primary,
								color: getTextColor(),
							}}
						>
							{button.label}
						</button>
					))}
				</div>
			) : null}
		</div>
	);
};
