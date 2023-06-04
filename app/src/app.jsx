import React from "react";
import Button from "../src/components/Button"
import "./index.css";

export default function MyApp() {
    const world = ", World"
    return (
        <>
            <h1 className="p-8 text-cyan-700">Hello {world}</h1>
        </>
    )
}