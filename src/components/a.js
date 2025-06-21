'use client';
import react, { createContext, useState } from "react";
import HOC from "./HOC";    
const FirstName= createContext();
function A(props) {
    const { count, increment, name } = props;
    return (
        <div>
            <button onClick={increment}>{name} {count} Click</button>
        </div>
    );
}
export default HOC(A, 2);

