import movieReducer from "./feature/movieSlice";
import createSagaMiddleware from "redux-saga";

import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
