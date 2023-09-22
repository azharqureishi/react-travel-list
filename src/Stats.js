import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <em className=" h-20 py-11 bg-teal-400 flex items-center justify-center  font-semibold text-lg">
        <p>Start adding some items to your packing list 🚀</p>
      </em>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  console.log(packedItems);
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className=" h-20 py-11 bg-teal-500 flex items-center justify-center  font-semibold text-lg">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `👜 You have ${numItems} items on your list, and you already packed
            ${packedItems} ( ${percentage} %)`}
      </em>
    </footer>
  );
}

export default Stats;
