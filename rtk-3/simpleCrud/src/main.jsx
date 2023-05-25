import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./store/store.js";

import 'antd/dist/reset.css'

import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>

            <StyledEngineProvider injectFirst>

                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    </React.StrictMode>,
)
