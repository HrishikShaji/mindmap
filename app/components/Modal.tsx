import { IoMdCloseCircle } from "react-icons/io";
import { ReactNode, useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { useEdit } from "../context/EditContext";
import { BarChart } from "./BarChart";
import { AddNode } from "./AddNode";
import { DeleteNode } from "./DeleteNode";
import { ConnectNodes } from "./ConnectNodes";
import { DisconnectNodes } from "./DisconnectNodes";
import { EditNode } from "./EditNode";
import { useTheme } from "../context/ThemeContext";
import { Node } from "reactflow";
import { DataRow } from "./DataRow";
import { DataContainer } from "./DataContainer";

type LookupType = {
	[key: string]: ReactNode;
};

const lookup: LookupType = {
	editNode: <EditNode />,
	addNode: <AddNode />,
	deleteNodes: <DeleteNode />,
	connectNodes: <ConnectNodes />,
	disconnectNodes: <DisconnectNodes />,
};
export const Modal = () => {
	const { isOpen, closeModal, id } = useModal();
	const { nodes } = useNodeEdgeContext();
	const [currentNode, setCurrentNode] = useState<Node | null>(null);
	const { isEdit, state, setState } = useEdit();
	const { getTheme } = useTheme();
	useEffect(() => {
		const currentNode = nodes.filter((item) => item.id === id);
		if (currentNode[0]) {
			setCurrentNode(currentNode[0]);
		}
	}, [id, nodes]);
	if (!isOpen) return null;
	return (
		<div className="h-screen w-full flex sm:p-0 p-10 items-center z-50 bg-black/70 justify-center fixed top-0 left-0 rounded-md ">
			<div
				className="p-10  relative flex flex-col items-center justify-center gap-10 rounded-3xl"
				style={{
					backgroundColor: getTheme().secondary.backgroundColor,
					color: getTheme().secondary.textColor,
				}}
			>
				<button
					onClick={() => {
						closeModal();
						setState("");
					}}
					className="absolute top-2 right-2 "
					style={{
						color: getTheme().button.backgroundColor,
					}}
				>
					<IoMdCloseCircle size={22} />
				</button>
				{isEdit ? lookup[state] : null}
				{!isEdit && state === "" && currentNode ? (
					<DataContainer node={currentNode} />
				) : null}
			</div>
		</div>
	);
};
