"use client";
import { MindMap } from "./components/MindMap";
import { NodeEdgeProvider } from "./context/NodeEdgeContext";
import { ModalProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";
import { EditProvider } from "./context/EditContext";
import { initialEdges, initialNodes } from "./lib/data";
import { Node } from "reactflow";
import { Navbar } from "./components/Navbar";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

export default function Home() {
	const { getBG, theme } = useTheme();
	return (
		<main
			className={theme}
			style={{
				paddingRight: "2vw",
				paddingLeft: "2vw",
				paddingTop: "7vh",
				height: "100vh",
				backgroundColor: getBG({ defaultColor: "gray" }).secondary,
			}}
		>
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
	);
}
