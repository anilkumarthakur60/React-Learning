import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseUrl } from "../common/commonApi";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseUrl}/posts`,
    prepareHeaders: (header) => {
      const token = localStorage.getItem("token");
      if (token) {
        header.set("Authorization", `Bearer ${token}`);
      }
      return header;
    },
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: ({ pagination, filters }) => ({
        url: "",
        params: {
          ...pagination,
          filters: JSON.stringify(filters),
        },
      }),
    }),
    createPost: builder.mutation({
      query: (post) => ({
        url: "",
        method: "POST",
        data: post,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, ...post }) => ({
        url: `${id}`,
        method: "PUT",
        data: post,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
