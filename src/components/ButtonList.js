import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valenties",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((data) => (
        <Button key={data} name={data} />
      ))}
    </div>
  );
};

export default ButtonList;
