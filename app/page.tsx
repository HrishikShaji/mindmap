"use client";
import { MindMap } from "./components/MindMap";
import { NodeEdgeProvider } from "./context/NodeEdgeContext";
import { ModalProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";
import { EditProvider } from "./context/EditContext";
import { initialEdges, initialNodes } from "./lib/data";

export default function Home() {
  return (
    <main className="px-[2vw] pt-[7vh]">
      <EditProvider>
        <ModalProvider>
          <NodeEdgeProvider
            initialEdges={initialEdges}
            initialNodes={initialNodes}
          >
            <Modal />
            <MindMap />
          </NodeEdgeProvider>
        </ModalProvider>
      </EditProvider>
    </main>
  );
}
