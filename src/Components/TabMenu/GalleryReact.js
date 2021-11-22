import React, { useState } from "react";
import Menu from "./Menu";
const GalleryReact = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn-btn-warning"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-btn-warning"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn-btn-warning"
            onClick={() => filterItem("launch")}
          >
            Launch
          </button>
          <button
            className="btn-btn-warning"
            onClick={() => filterItem("timepass")}
          >
            Timepass
          </button>
          <button className="btn-btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>

      {/* my main items section */}
      <div className="menu-items container-fluid mt-5">
        <div className="col-11 mx-auto">
          <div className="row my-5">
            {items.map((elem) => {
              const { id, name, image, description, price } = elem;

              return (
                <div className="col-sm-4 my-5">
                  {/* for cards */}
                  <div className="card">
                    <img src={image} className="card-img-top" alt="menupic" />
                    <div className="card-body ">
                      <h5 className="card-title">{name}</h5>
                      <p>{description}</p>
                      <h6 className="d-flex justify-content-between">
                        Price: {price}
                      </h6>
                      <p className="card-text d-flex justify-content-between">
                        *Prices may vary on selected date.
                      </p>
                      <a href="#" className="d-flex justify-content-between">
                        <button className="btn btn-primary d-flex justify-content-between">
                          Order Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
