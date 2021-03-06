import React from "react";
import "./search-box.styles.css";

export function SearchBox(props) {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handler}
    />
  );
}
