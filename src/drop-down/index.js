import "./style.css";

import { setupDropDownSystem } from "drop-down-system";

const menuBar = document.querySelector(".menu-bar");

setupDropDownSystem(Array.from(menuBar.children), "drop-down", "visible");