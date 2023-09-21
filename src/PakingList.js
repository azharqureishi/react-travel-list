import React from "react";
import Item from "./Item";

function PakingList({ items, onDeleteItems, onToggleItems }) {
  console.log(items);
  return (
    <div className="h-3/5 bg-yellow-700">
      <ul className=" p-8 grid grid-cols-4 gap-y-12 content-center">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}

export default PakingList;
