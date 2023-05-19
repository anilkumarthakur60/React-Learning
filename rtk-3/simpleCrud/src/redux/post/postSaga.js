import { postApi, useFetchPostsQuery } from "./postApi";
import { call, put, takeLatest, fork } from "redux-saga/effects";

function* onLoadPostsAsync(action) {
  try {
    const response = yield call(
      postApi.endpoints.fetchPosts.initiate,
      action.payload
    );
    yield put(postApi.endpoints.fetchPosts.fulfilled(response));
  } catch (error) {
    yield put(postApi.endpoints.fetchPosts.rejected(error));
  }
}

function* onLoadPosts(action) {
  yield takeLatest(useFetchPostsQuery, onLoadPostsAsync);
}

export const postSaga = [fork(onLoadPosts)];
