import React, { createContext, useContext, useState, ReactNode } from "react";

type EditData = {
	isEdit: boolean;
	toggleEdit: () => void;
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
	const toggleEdit = () => {
		setIsEdit(!isEdit);
	};

	const editData = {
		isEdit,
		toggleEdit,
	};

	return (
		<EditContext.Provider value={editData}>{children}</EditContext.Provider>
	);
};
