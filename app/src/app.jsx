import React from "react";
import Hello from "../src/components/Hello"
import "./index.css";
import { Camera } from "lucide-react";

export default function MyApp() {
    const world = ", World"
    return (
        <>
            <h1 className="p-8 text-cyan-700">Hello {world}</h1>
            <Hello></Hello>
            <Camera color="red" size={48} />;
        </>
    )
}