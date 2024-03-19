import { useEdit } from "../context/EditContext";
import { useModal } from "../context/ModalContext";

export const EditSection = () => {
	const { setState } = useEdit();
	const { openModal } = useModal();
	return (
		<div className=" bg-teal-500 z-10 absolute top-3 left-3 rounded-md p-5 gap-5 flex flex-col">
			<div className="flex gap-10">
				<button
					onClick={() => {
						setState("addNode");
						openModal();
					}}
					className="px-3 py-1 rounded-md bg-teal-300"
				>
					Add Node
				</button>
				<button
					onClick={() => {
						setState("deleteNode");
						openModal();
					}}
					className="px-3 py-1 rounded-md bg-teal-300"
				>
					Delete Node
				</button>
				<button
					onClick={() => {
						setState("connectNodes");
						openModal();
					}}
					className="px-3 py-1 rounded-md bg-teal-300"
				>
					Connect Nodes
				</button>
				<button
					onClick={() => {
						setState("disconnectNodes");
						openModal();
					}}
					className="px-3 py-1 rounded-md bg-teal-300"
				>
					Disconnect Nodes
				</button>
			</div>
		</div>
	);
};
