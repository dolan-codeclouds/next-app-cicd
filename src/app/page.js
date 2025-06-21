'use client';
import react, { createContext, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import A from "../components/a.js";
import B from "../components/b.js";
import C from "../components/c.js";
const FirstName= createContext();
export default function Home() {

  return (
    <FirstName.Provider value="Dolan">
    <div className={styles.page}>
      <h1>Demo Next Js App</h1>
      <A name="A" />
      <B name="B" />
       <C />
    </div>
    </FirstName.Provider>
  );
}
export {FirstName};