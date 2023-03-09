import React from "react";
import "../Comp.css";

const Items = (props) => {
  const renderItems = (arr) => {
    return arr.map((entry) => {
      return (
        <div
          key={entry.id}
          className="item"
        >{`${entry.id}. ${entry.item}.\n`}</div>
      );
    });
  };
  return <div>{renderItems(props)}</div>;
};

export default Items;
