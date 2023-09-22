import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PakingList from "./PakingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAdditems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure to delete all items ?");
    if (confirmed) setItems([]);
  }

  return (
    <div className=" w-full h-screen">
      <Logo />
      <Form onAddItems={handleAdditems} />
      <PakingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
