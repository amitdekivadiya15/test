import React from "react";

const CatMenu = ({ filterItem, catItems }) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {catItems.map((curClem, index) => {
            return (
              <button
                className="btn-btn-warning"
                key={index}
                onClick={() => filterItem(curClem)}
              >
                {curClem}
              </button>
            );
          })}
          {/* <button
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
          </button> */}
          {/* <button className="btn-btn-warning" onClick={() => setItems(Menu)}>
            All
          </button> */}
        </div>
      </div>
    </>
  );
};

export default CatMenu;
