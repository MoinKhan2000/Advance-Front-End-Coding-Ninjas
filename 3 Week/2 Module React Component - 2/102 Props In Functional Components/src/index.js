import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App name={"Pranav"} about={"Hii my nam eis Pranav Yeole."} />
  </StrictMode>
);
