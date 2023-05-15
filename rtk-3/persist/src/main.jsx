import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import {Provider} from "react-redux";
import store from "./store/store.js";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistStore(store)}>

                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)
