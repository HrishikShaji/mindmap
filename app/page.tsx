"use client";
import { MindMap } from "./components/MindMap";
import { NodeEdgeProvider } from "./context/NodeEdgeContext";
import { ModalProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";
import { EditProvider } from "./context/EditContext";
import { Navbar } from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
import { initialEdges, initialNodes } from "@/lib/utils";

export default function Home() {
	const { getTheme, theme } = useTheme();
	return (
		<main
			className={theme}
			style={{
				paddingRight: "2vw",
				paddingLeft: "2vw",
				paddingTop: "7vh",
				height: "100vh",
				backgroundColor: getTheme().primary.backgroundColor,
			}}
		>
			<Navbar />
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
