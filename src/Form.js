import React, { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    if (!description) return;

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div className=" w-full h-24 bg-orange-400 flex items-center  justify-center">
      <h2 className=" font-semibold font-sans text-lg">
        What do you need for your 😍 trip ?
      </h2>
      <form
        className="flex items-center space-x-8 ml-10 font-sans"
        onSubmit={handleSubmit}
      >
        <select
          className=" rounded-full font-bold text-sm bg-yellow-100 cursor-pointer"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="itemName"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="item..."
          className="rounded-full font-bold text-sm bg-yellow-100 px-6"
        />
        <button className=" rounded-full text-sm font-bold font-sans py-2 px-6 bg-teal-400">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Form;
