import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from "react-redux";
import {store} from "./store";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


//303 continue from 1:00:00
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);