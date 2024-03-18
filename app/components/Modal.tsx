import { useModal } from "../context/ModalContext";

export const Modal = () => {
  const { isOpen, closeModal, id } = useModal();

  if (!isOpen) return null;
  return (
    <div className="h-screen w-full flex items-center z-10 bg-black/50 justify-center fixed top-0 left-0 rounded-md ">
      <div className="h-[500px] relative w-[500px] rounded-md bg-teal-500">
        <button onClick={() => closeModal()} className="absolute top-2 right-2">
          close
        </button>
        <h1>{id}</h1>
      </div>
    </div>
  );
};
