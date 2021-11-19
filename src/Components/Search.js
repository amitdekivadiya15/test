import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setimg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setimg(data);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search Any"
          value={img}
          onChange={inputEvent}
        />

        {img === "" ? null : <Sresult name={img} />}
      </div>
    </>
  );
};

export default Search;
