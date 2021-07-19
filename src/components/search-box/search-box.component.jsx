import React from "react";

export const SearchBox = ({ placehalder, handleChange }) => (
  <input className="search-box" type="search" placeholder={placehalder} onChange={handleChange} />
);
