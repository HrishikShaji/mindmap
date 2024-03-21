import { IoMdCloseCircle } from "react-icons/io";
import { ReactNode, useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { useEdit } from "../context/EditContext";
import { BarChart } from "./BarChart";
import { Node } from "reactflow";
import { AddNode } from "./AddNode";
import { DeleteNode } from "./DeleteNode";
import { ConnectNodes } from "./ConnectNodes";
import { DisconnectNodes } from "./DisconnectNodes";
import { EditNode } from "./EditNode";

type LookupType = {
	[key: string]: ReactNode;
};

const lookup: LookupType = {
	editNode: <EditNode />,
	addNode: <AddNode />,
	deleteNode: <DeleteNode />,
	connectNodes: <ConnectNodes />,
	disconnectNodes: <DisconnectNodes />,
};
export const Modal = () => {
	const { isOpen, closeModal, id } = useModal();
	const { nodes } = useNodeEdgeContext();
	const [currentNode, setCurrentNode] = useState<Node | null>(null);
	const { isEdit, state, setState } = useEdit();
	useEffect(() => {
		const currentNode = nodes.filter((item) => item.id === id);
		if (currentNode.length !== 0) {
			setCurrentNode(currentNode[0]);
		}
	}, [id, nodes]);
	if (!isOpen) return null;
	return (
		<div className="h-screen w-full flex  items-center z-10 bg-black/50 justify-center fixed top-0 left-0 rounded-md ">
			<div className="p-10  relative flex flex-col items-center justify-center gap-10 rounded-md bg-neutral-600">
				<button
					onClick={() => {
						closeModal();
						setState("");
					}}
					className="absolute top-2 right-2"
				>
					<IoMdCloseCircle />
				</button>
				{isEdit ? lookup[state] : null}
				{!isEdit && state === "" && currentNode ? (
					<BarChart graphData={currentNode?.data.graphData} />
				) : null}
			</div>
		</div>
	);
};
