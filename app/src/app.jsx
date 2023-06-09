import React from "react";
import Hello from "./components/Hello"
import "./index.css";

export default function MyApp() {
    const world = ", World!!"
    return (
        <>
            <h1 className="p-8 text-cyan-700">Hello {world}</h1>
            <Hello></Hello>
        </>
    )
}