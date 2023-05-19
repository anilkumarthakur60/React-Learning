import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    // takeEvery("blogs/createBlog", createBlogSaga),
    // takeEvery("blogs/readBlog", readBlogSaga),
    // takeEvery("blogs/updateBlog", updateBlogSaga),
    // takeEvery("blogs/deleteBlog", deleteBlogSaga),
  ]);
}
