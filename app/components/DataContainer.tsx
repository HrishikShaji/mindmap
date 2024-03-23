import { Node } from "reactflow";
import BarChart from "./BarChart";
import { DataRow } from "./DataRow";

interface DataContainerProps {
  node: Node;
}

export const DataContainer: React.FC<DataContainerProps> = ({ node }) => {
  return (
    <div className="flex flex-col gap-4">
      <BarChart graphData={node?.data.graphData} />
      <div className="flex flex-col gap-2">
        <DataRow label="Label" value={node.data.label} />
        <DataRow label="Positive" value={node.data.graphData.positive} />
        <DataRow label="Negative" value={node.data.graphData.negative} />
        <DataRow label="Total" value={node.data.graphData.total} />
        <DataRow label="Comments" value={node.data.graphData.comments} />
      </div>
    </div>
  );
};
