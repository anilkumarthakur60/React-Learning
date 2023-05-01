import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>

        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
