import React from "react";
import "./searchbox.css";
export const SearchBox = (props) => {
  return (
    <React.Fragment>
      <h1>Monster</h1>
      <input type="text" placeholder="search here" onChange={props.onChange} />
    </React.Fragment>
  );
};
