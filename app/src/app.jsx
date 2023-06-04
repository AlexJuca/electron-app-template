import React from "react";
import Button from "../src/components/Button"
import "./index.css";

export default function MyApp() {
    let x = 100;
    return (
        <>
            <h1 className="p-8 text-cyan-700">Hello {x}</h1>
            <Button></Button>
        </>
    )
}