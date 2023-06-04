import React from "react";
import { createRoot } from "react-dom/client";
import MyApp from './app'

const container = document.getElementById("target");
const root = createRoot(container);

root.render(<React.Fragment><MyApp></MyApp></React.Fragment>);