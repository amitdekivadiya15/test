import React, { useState } from "react";
import todo from "../../assets/notes-app-icon-smartphone-vector-illustration-notes-app-icon-108113977.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const addItem = () => {
    if (!inputData) {
      alert("plz fill data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );

      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  //   delete items

  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  //   edit item
  //  when user click on edit button

  // 1: get the id and name of data which user clicked to edit
  // 2: set the toogle mode to change the submit button int edit button
  // 3: now update the value of the setinput with the new updated value to edit.
  // 4: to pass the current element id to new state variable for reference

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  //   remove all
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main_div" style={{ backgroundColor: "black" }}>
        <div className="child_div" style={{ textAlign: "center" }}>
          <figure>
            <img
              src={todo}
              alt="todo logo"
              style={{ height: "100px", width: "100px" }}
            />
            <figcaption style={{ color: "white" }}>
              Add Your List Here
            </figcaption>
          </figure>
          <div className="add_iteams">
            <input
              type="text"
              placeholder="Add Iteams..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <AddCircleIcon style={{ color: "white" }} onClick={addItem} />
            ) : (
              <EditIcon style={{ color: "white" }} onClick={addItem} />
            )}
          </div>

          <div className="showIteams">
            {items.map((elem) => {
              return (
                <div
                  className="eachItem"
                  style={{ color: "white" }}
                  key={elem.ind}
                >
                  <h3>
                    <EditIcon onClick={() => editItem(elem.id)} />
                    <DeleteIcon onClick={() => deleteItem(elem.id)} />
                    {elem.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* clear all button */}
          <div className="showItems">
            <Button variant="contained" onClick={removeAll}>
              Remove All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
