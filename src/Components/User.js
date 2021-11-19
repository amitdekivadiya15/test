import React from "react";
import { useParams, useLocation } from "react-router-dom";

// const User = ({ match }) => {
//   return <h1>This is {match.params.name} page </h1>;
// };

const User = () => {
  const { name } = useParams();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <h1>This is {name} page </h1>
      <p> My current Location is {location.pathname} </p>
      {location.pathname == `/user/amit` ? (
        <button onClick={() => alert("you are awesome")}> Click </button>
      ) : null}
    </>
  );
};

export default User;
