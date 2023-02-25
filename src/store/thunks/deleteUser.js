import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const pause = (duration) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, duration);
  });
};

const deleteUser = createAsyncThunk("users/delete", async (id) => {
  const response = await axios.delete(`http://localhost:8000/api/posts/${id}`);
  return id;
});

export { deleteUser };
