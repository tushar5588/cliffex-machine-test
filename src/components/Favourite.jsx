import React from "react";
import { useLocation } from "react-router";
import {Link} from "react-router-dom"

const Favourite = () => {
  const location = useLocation();
  const data = [location.state];

  return (
    <div className="checks">
      <h1>Favourite-Items:</h1>
      <br />
      <p>Selected items are: {data}</p>
      <br/>
      <Link className="submit" to={"/"}>
        Homepage
      </Link>
    </div>
  );
};

export default Favourite;
