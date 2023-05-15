import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import  "./App.css"
import { Provider } from "react-redux";
import store from "./store/store.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import { rtkquerySlice } from './redux/rtkquerySlice.js';
import {ApiProvider} from "@reduxjs/toolkit/query/react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Provider store={store}>
            <App/>
        </Provider> */}

        <ApiProvider api={rtkquerySlice}>
            <App />
        </ApiProvider>
    </React.StrictMode>,
)
