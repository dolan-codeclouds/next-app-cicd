"use client";
import react, { useState } from "react";
import HOC from "./HOC";
function B(props) {
  const { count, increment, name } = props;
  return (
    <div>
      <button onMouseOver={increment}>
        {name} {count} Mouseover
      </button>
    </div>
  );
}
export default HOC(B, 5);
