import {call, fork, put, takeLatest} from "redux-saga/effects";
import {getMovie, getMovies, setFormData, setMovie} from "./feature/movieSlice";
import {fetchMovie, fetchMovies} from "./api";

function* onLoadMoviesAsync({payload}) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    console.log('---------data logging--------', response);
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

function* onLoadMovieAsync({payload}) {
  try {
    const movieId = payload;
    const response = yield call(fetchMovie, movieId);
    console.log('---------data logging--------', response);
    if (response.status === 200) {
      yield put(
          setFormData({
            ...response.data,
          })
      );
    }
  } catch (error) {
    console.log("----------logging data----error------", error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}


function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const movieSaga = [fork(onLoadMovies),fork(onLoadMovie)];
