import { MdEdit } from "react-icons/md";
import { useEdit } from "../context/EditContext";
import { useModal } from "../context/ModalContext";

export const EditSection = () => {
  const { openModal } = useModal();
  const { isEdit, toggleEdit, setState } = useEdit();
  const { closeModal, isOpen } = useModal();
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
        className="absolute cursor-pointer z-20 top-5 left-5 rounded-full p-2 bg-teal-500 text-black  "
      >
        <MdEdit />
      </div>
      {isEdit ? (
        <div className="  z-10 absolute top-6 left-16 rounded-md   flex flex-col sm:flex-row gap-1  sm:gap-4">
          <button
            onClick={() => {
              setState("addNode");
              openModal();
            }}
            className="px-3 py-1 text-sm rounded-3xl bg-black text-teal-500"
          >
            Add Node
          </button>
          <button
            onClick={() => {
              setState("deleteNode");
              openModal();
            }}
            className="px-3 py-1 text-sm rounded-3xl bg-black text-teal-500"
          >
            Delete Node
          </button>
          <button
            onClick={() => {
              setState("connectNodes");
              openModal();
            }}
            className="px-3 py-1 text-sm rounded-3xl bg-black text-teal-500"
          >
            Connect Nodes
          </button>
          <button
            onClick={() => {
              setState("disconnectNodes");
              openModal();
            }}
            className="px-3 py-1 text-sm rounded-3xl bg-black text-teal-500"
          >
            Disconnect Nodes
          </button>
        </div>
      ) : null}
    </div>
  );
};
