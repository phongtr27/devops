import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<App />
			<ToastContainer autoClose={2000} />
		</BrowserRouter>
	</React.StrictMode>
);
