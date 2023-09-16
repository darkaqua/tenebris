import React from "react";
import { createRoot } from "react-dom";

// @ts-ignore
import "./main.module.scss";

import { Screen } from "modules/screen";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<Screen />);
