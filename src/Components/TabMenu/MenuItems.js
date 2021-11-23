import React from "react";

const MenuItems = ({ items }) => {
  return (
    <>
      <div className="menu-items container-fluid mt-5">
        <div className="col-11 mx-auto">
          <div className="row my-5">
            {items.map((elem) => {
              const { id, name, image, description, price, category } = elem;

              return (
                <div className="col-sm-4 my-5" key={id}>
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

export default MenuItems;
