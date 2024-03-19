"use client";
import { Edge, Node } from "reactflow";
import { MindMap } from "./components/MindMap";
import { NodeEdgeProvider } from "./context/NodeEdgeContext";
import { data, edges, nodePositions } from "./components/data";
import { ModalProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";
import { EditProvider } from "./context/EditContext";

function coordinates({ id }: { id: string }) {
  const newId = parseInt(id);
  return { x: nodePositions[newId].x, y: nodePositions[newId].y };
}

function getRandomGraphData() {
  function randomInteger({ min, max }: { min: number; max: number }) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const total = randomInteger({ min: 0, max: 1000 });
  const positive = randomInteger({ min: 0, max: total });
  const negative = total - positive;
  const comments = randomInteger({ min: 0, max: 1000 });

  return [
    {
      label: "positive",
      value: positive,
    },
    {
      label: "negative",
      value: negative,
    },
    {
      label: "total",
      value: total,
    },
    {
      label: "comments",
      value: comments,
    },
  ];
}

function getNodes({ nodes }: { nodes: any[] }) {
  return nodes.map((node) => {
    return {
      id: node.id,
      type: node.type,
      position: coordinates({ id: node.id }),
      data: { label: node.label, id: node.id, graphData: getRandomGraphData() },
    };
  });
}

export default function Home() {
  const initialNodes: Node[] = getNodes({ nodes: data });
  const initialEdges: Edge[] = edges;

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
