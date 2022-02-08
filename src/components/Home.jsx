import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [checked, setChecked] = useState([]);
  const checkList = [
    "High",
    "Cruel",
    "Nappy",
    "Sable",
    "Mine",
    "Vagabond",
    "Sassy",
    "Steer",
    "Argument",
    "Unaccountable",
    "Tie",
    "Middle",
  ];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  return (
    <div className="checks">

      <p>Tick the box:)</p>
      {checkList.map((item, index) => (
        <div key={index}>
          <input value={item} type="checkbox" onChange={handleCheck} />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}

      <br />
      <br />
      <Link className="submit" to={"/favourite"} state={checkedItems}>
        Favourities
      </Link>
      <br />
      <br />

      {`Items checked are: ${checkedItems}`}
    </div>
  );
};
export default Home;
