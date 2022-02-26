import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import { router } from "./Router/router";
import { store } from "./Store/store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                {router.map((route) => (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={<route.element />}
                    ></Route>
                ))}
            </Routes>
        </Router>
    </Provider>,

    document.getElementById("root")
);
