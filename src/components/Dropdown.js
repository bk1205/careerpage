import React, { useState } from "react";
import Select from "react-select";

import "./Dropdown.css";

export const Dropdown = ({ options, placeholder, customElement, elemNo }) => {
  const styles = {
    control: (base, state) => ({
      ...base,
      background: "#DCDCDC",
      border: 0,
      boxShadow: "none",
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      let color = null;
      if (elemNo === 1) {
        color = isFocused ? "#999999" : "#656463";
      } else {
        color = isFocused ? "#999999" : null;
      }
      return {
        ...styles,
        backgroundColor: color,
        color: elemNo === 1 ? "#fff" : null,
      };
    },
    placeholder: (style) => ({
      ...style,
      color: "black",
      fontSize: "0.9rem",
    }),
  };
  return (
    <div className="dropdown">
      <Select
        styles={styles}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        className="select"
        placeholder={placeholder}
        options={options}
        formatOptionLabel={customElement}
      />
    </div>
  );
};
