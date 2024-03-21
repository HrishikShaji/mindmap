import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	SetStateAction,
	Dispatch,
} from "react";

export type EditState =
	| "editNode"
	| "addNode"
	| "deleteNodes"
	| "connectNodes"
	| "disconnectNodes"
	| "";

type EditData = {
	isEdit: boolean;
	state: EditState;
	toggleEdit: () => void;
	setState: Dispatch<SetStateAction<EditState>>;
};

const EditContext = createContext<EditData | undefined>(undefined);

export const useEdit = () => {
	const context = useContext(EditContext);
	if (!context) {
		throw new Error("useEdit must be used within a EditProvider");
	}
	return context;
};

type EditProviderProps = {
	children: ReactNode;
};

export const EditProvider = ({ children }: EditProviderProps) => {
	const [isEdit, setIsEdit] = useState(false);
	const [state, setState] = useState<EditState>("");
	const toggleEdit = () => {
		setIsEdit(!isEdit);
	};

	const editData = {
		isEdit,
		state,
		toggleEdit,
		setState,
	};

	return (
		<EditContext.Provider value={editData}>{children}</EditContext.Provider>
	);
};
