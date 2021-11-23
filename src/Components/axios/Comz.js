import React, { useState } from "react";
import axios from "axios";

const Comz = () => {
  const [num, setNum] = useState();
  const [sData, setSdata] = useState();
  const submit = () => {
      if(!sData){
          alert("plz fill data");
      }
      else{
          const allData= {
            axios.get(`http://192.168.0.110:8081/api/products/list/${num}`);
          }
      }
  };

  return (
    <>
      <h1>axios</h1>
      <div className="main-div">
        <input
          type="text"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
      </div>
      <br />
      <div className="button">
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Comz;
