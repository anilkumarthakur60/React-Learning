import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from "react-redux";
import store from "./redux/store/store.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Pages/Index.jsx";
import NavbarComponent from "./components/Navbar.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import About from "./Pages/About.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>

        <React.StrictMode>
            <BrowserRouter>
               <App/>
            </BrowserRouter>
        </React.StrictMode>,
    </Provider>
)
