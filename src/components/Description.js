import React from "react";

import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <h4>Add a job description</h4>
      <p>Description *</p>
      <ul>
        <img alt="bold" src={require("../images/bold.jpg")} />
        <img alt="italic" src={require("../images/italic.jpg")} />
        <img alt="underline" src={require("../images/underline.jpg")} />
        <img alt="ulist" src={require("../images/ulist.jpg")} />
        <img alt="olist" src={require("../images/olist.jpg")} />
      </ul>
      <textarea rows="8"></textarea>
      <div className="description__addskill">
        <h4>Add skills</h4>
        <p>
          Add skill keywords to make your job more visible to the right
          candidates (Select up to 10)
        </p>
      </div>
      <button>Add skill +</button>
    </div>
  );
};

export default Description;
