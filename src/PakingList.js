import React, { useState } from "react";
import Item from "./Item";

function PakingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  // Sort by default input intery
  if (sortBy === "input") sortedItems = items;

  // Sort by the description of the item
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  //Sort by the packed items
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="h-4/6 bg-yellow-700 relative">
      <ul className=" p-8 grid grid-cols-4 gap-y-12 content-center">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className=" absolute bottom-10 right-1/3 flex gap-5">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-full font-bold text-sm font-sans cursor-pointer"
        >
          <option value="input" className=" font-bold text-sm font-sans">
            SORT BY INPUT ORDER
          </option>
          <option value="description" className=" font-bold text-sm font-sans">
            SORT BY DESCRIPTION
          </option>
          <option value="packed" className=" font-bold text-sm font-sans">
            SORT BY PACKED STATUS
          </option>
        </select>
        <button
          onClick={onClearList}
          className="rounded-full font-bold text-sm font-sans bg-white text-gray-950 py-2 px-6"
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}

export default PakingList;
