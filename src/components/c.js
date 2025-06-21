'use client';
import React,{ useContext } from 'react'
import { FirstName } from "../app/page.js";


export default function C() {
    const name = useContext(FirstName);
  return (
    <div>TEST COMPONENT {name}</div>
  )
}
