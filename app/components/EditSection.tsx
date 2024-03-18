import { ReactNode, useState } from "react";
import { AddNode } from "./AddNode";
import { DeleteNode } from "./DeleteNode";
import { ConnectNodes } from "./ConnectNodes";
import { DisconnectNodes } from "./DisconnectNodes";

type LookupType = {
  [key: string]: ReactNode;
};

const lookup: LookupType = {
  "add-node": <AddNode />,
  "delete-node": <DeleteNode />,
  "connect-nodes": <ConnectNodes />,
  "disconnect-nodes": <DisconnectNodes />,
};
export const EditSection = () => {
  const [selected, setSelected] = useState("add-node");
  return (
    <div className=" bg-teal-500 z-10 absolute top-3 left-3 rounded-md p-5 gap-5 flex flex-col">
      <div className="flex gap-10">
        <button
          onClick={() => setSelected("add-node")}
          className="px-3 py-1 rounded-md bg-teal-300"
        >
          Add Node
        </button>
        <button
          onClick={() => setSelected("delete-node")}
          className="px-3 py-1 rounded-md bg-teal-300"
        >
          Delete Node
        </button>
        <button
          onClick={() => setSelected("connect-nodes")}
          className="px-3 py-1 rounded-md bg-teal-300"
        >
          Connect Nodes
        </button>
        <button
          onClick={() => setSelected("disconnect-nodes")}
          className="px-3 py-1 rounded-md bg-teal-300"
        >
          Disconnect Nodes
        </button>
      </div>
      {lookup[selected]}
    </div>
  );
};
