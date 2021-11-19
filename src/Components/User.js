import React from "react";
import { useParams } from "react-router-dom";

// const User = ({ match }) => {
//   return <h1>This is {match.params.name} page </h1>;
// };

const User = () => {
  const { name } = useParams();

  return <h1>This is {name} page </h1>;
};

export default User;
