import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getMovie, setMovie } from "./feature/movieSlice";
import { fetchMovies } from "./api";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    console.log('---------data logging--------',response);
    if (response.status === 200) {
      yield put(
        setMovie({
          ...response.data,
        })
      );
    }
  } catch (error) {
    console.log("----------logging data----error------", error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovie.type, onLoadMoviesAsync);
}

export const movieSaga = [fork(onLoadMovies)];
