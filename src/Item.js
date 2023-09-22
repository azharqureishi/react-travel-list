import React from "react";

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <div>
      <li className=" flex items-center justify-start min-w-full text-xl font-sans text-white mx-2 px-3">
        <input
          type="checkbox"
          className=" cursor-pointer"
          value={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        <span
          style={item.packed ? { textDecoration: "line-through" } : {}}
          className=" mx-3"
        >
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default Item;
