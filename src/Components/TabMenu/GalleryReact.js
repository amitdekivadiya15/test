import React, { useState } from "react";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import CatMenu from "./CatMenu";

const allCatValues = [
  ...new Set(
    Menu.map((curelem) => {
      return curelem.category;
    })
  ),
  "all",
];

console.log(allCatValues);

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  const filterItem = (category) => {
    if (category === "all") {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setItems(updatedItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      {/* menu list */}
      <CatMenu filterItem={filterItem} catItems={catItems} />

      {/* my main items section */}

      <MenuItems items={items} />
    </>
  );
};

export default GalleryReact;
