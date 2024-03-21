"use client";

import { useEditNode } from "../hooks/useEditNode";

export const EditNode = () => {
  const { handleChange, data, editNode } = useEditNode();
  const inputs = [
    {
      name: "label",
      value: data.label,
      placeholder: "label...",
    },
    {
      name: "positive",
      value: data.positive,
      placeholder: "label...",
    },
    {
      name: "negative",
      value: data.negative,
      placeholder: "Negative...",
    },
    {
      name: "total",
      value: data.total,
      placeholder: "Total...",
    },
    {
      name: "comments",
      value: data.comments,
      placeholder: "Comments...",
    },
  ];

  return (
    <form onSubmit={editNode} className="flex flex-col gap-4">
      {inputs.map((input, i) => (
        <input
          key={i}
          {...input}
          onChange={handleChange}
          className="p-1 rounded-md"
        />
      ))}
      <button
        className="bg-white text-black py-1 px-3 rounded-md"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};
