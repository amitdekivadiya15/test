import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

// const User = ({ match }) => {
//   return <h1>This is {match.params.name} page </h1>;
// };

const User = () => {
  const { name } = useParams();
  const location = useLocation();
  const histroy = useHistory();
  console.log(location);
  console.log(histroy);

  return (
    <>
      <h1>This is {name} page </h1>
      <p> My current Location is {location.pathname} </p>
      {location.pathname == `/user/amit` ? (
        <button onClick={() => histroy.goBack()}> Go back </button>
      ) : null}
    </>
  );
};

export default User;
