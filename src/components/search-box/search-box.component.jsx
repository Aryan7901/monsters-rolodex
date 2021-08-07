import React from "react";
import "./search-box.styles.css";

export const SearchBox = function ({ placeholder, handler }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handler}
    />
  );
};
