"use client";
import { MindMap } from "./components/MindMap";
import { NodeEdgeProvider } from "./context/NodeEdgeContext";
import { ModalProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";
import { EditProvider } from "./context/EditContext";
import { initialEdges, initialNodes } from "./lib/data";
import { Node } from "reactflow";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
	return (
		<ThemeProvider>
			<main className="px-[2vw] pt-[7vh] h-screen bg-neutral-900">
				<Navbar />
				<EditProvider>
					<ModalProvider>
						<NodeEdgeProvider
							initialEdges={initialEdges}
							initialNodes={initialNodes as Node[]}
						>
							<Modal />
							<MindMap />
						</NodeEdgeProvider>
					</ModalProvider>
				</EditProvider>
			</main>
		</ThemeProvider>
	);
}
