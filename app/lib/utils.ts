import { nodePositions } from "../components/data";

export function coordinates({ id }: { id: string }) {
	const newId = parseInt(id);
	return { x: nodePositions[newId].x, y: nodePositions[newId].y };
}

export function getRandomGraphData() {
	function randomInteger({ min, max }: { min: number; max: number }) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const total = randomInteger({ min: 0, max: 1000 });
	const positive = randomInteger({ min: 0, max: total });
	const negative = total - positive;
	const comments = randomInteger({ min: 0, max: 1000 });

	return {
		positive: positive,
		negative: negative,
		comments: comments,
		total: total,
	};
}

export function getNodes({ nodes }: { nodes: any[] }) {
	return nodes.map((node) => {
		return {
			id: node.id,
			type: node.type,
			position: coordinates({ id: node.id }),
			data: {
				label: node.label,
				id: node.id,
				graphData: getRandomGraphData(),
			},
		};
	});
}
