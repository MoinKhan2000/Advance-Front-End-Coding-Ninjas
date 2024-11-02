import { createRoot } from "react-dom/client";

import AppRoot from "./AppRoot";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<AppRoot />);
