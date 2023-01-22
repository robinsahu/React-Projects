import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const categoryList = ["all", ...new Set(items.map((menu) => menu.category))];
//we are writing this ouside component because we want this data before component renders

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCatogories] = useState(categoryList);

  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newItem = menuItem.filter((item) => item.category === category);
    setMenuItem(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <Categories filteredItems={filteredItems} categories={categories} />
          <Menu menuItem={menuItem} />
        </div>
      </section>
    </main>
  );
}

export default App;
