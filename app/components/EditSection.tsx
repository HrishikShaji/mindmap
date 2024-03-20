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
    <div className=" relative flex flex-col">
      <div
        onClick={toggleEditSection}
        className="absolute cursor-pointer z-20 top-5 left-5 rounded-full p-2 bg-neutral-500 text-white  "
      >
        <MdEdit />
      </div>
      {isEdit ? (
        <div className="  z-10 absolute top-5 left-16 rounded-md  flex gap-4">
          <button
            onClick={() => {
              setState("addNode");
              openModal();
            }}
            className="px-3 py-1 rounded-3xl bg-teal-300"
          >
            Add Node
          </button>
          <button
            onClick={() => {
              setState("deleteNode");
              openModal();
            }}
            className="px-3 py-1 rounded-3xl bg-teal-300"
          >
            Delete Node
          </button>
          <button
            onClick={() => {
              setState("connectNodes");
              openModal();
            }}
            className="px-3 py-1 rounded-3xl bg-teal-300"
          >
            Connect Nodes
          </button>
          <button
            onClick={() => {
              setState("disconnectNodes");
              openModal();
            }}
            className="px-3 py-1 rounded-3xl bg-teal-300"
          >
            Disconnect Nodes
          </button>
        </div>
      ) : null}
    </div>
  );
};
