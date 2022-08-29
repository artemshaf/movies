import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store/store";
import App from "./App";
import "app/styles/index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
