import React from "react";

import "./ListItem.css";

const ListItem = (props) => {
  const typeColor = props.type === "$ Paid" ? "#78FF49" : "red";
  return (
    <div className="listitem">
      <p className="listitem__title">{props.title}</p>
      <div className="listitem__content">
        <p className="listitem__shortdesc">{props.shortDesc}</p>
        <p className="listitem__type" style={{ color: typeColor }}>
          {props.type}
        </p>
      </div>
      <p className="listitem__workplacetype">{props.workplace}</p>
    </div>
  );
};

export default ListItem;
