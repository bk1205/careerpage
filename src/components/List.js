import React from "react";
import ListItem from "./ListItem";
import { data } from "../data/data";
import "./List.css";

const List = (props) => {
  return (
    <div className="list">
      <p>{props.listtitle}</p>
      <ListItem
        title={data.title}
        shortDesc={data.shortDesc}
        type={data.type[1]}
        workplace={data.workplaceType[0]}
      />
    </div>
  );
};

export default List;
