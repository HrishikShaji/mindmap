import { useNodeId } from "reactflow";
import { useEdit } from "../context/EditContext";
import { useNodeEdgeContext } from "../context/NodeEdgeContext";
import { useModal } from "../context/ModalContext";

export const useCustomNode = () => {
  const node = useNodeId();
  const { isEdit, setState } = useEdit();
  const { setNodes } = useNodeEdgeContext();
  const { openModal } = useModal();

  function deleteNode() {
    setNodes((prev) => prev.filter((item) => item.id !== node));
  }

  function toggleModal() {
    if (!isEdit && node) {
      openModal(node);
    }
  }

  function toggleEdit() {
    if (!node) return null;
    openModal(node);
    setState("editNode");
  }

  return { deleteNode, toggleModal, toggleEdit, isEdit };
};
