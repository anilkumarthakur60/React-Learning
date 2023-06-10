import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseUrl } from "../common/commonApi";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseUrl}/posts`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = localStorage.getItem("access_token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
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
      providesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (formData) => ({
        url: "",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...post }) => ({
        url: `${id}`,
        method: "PUT",
        body: post,
      }),

      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `${id}`,
        method: "DELETE",
      }),
    }),

    invalidatesTags: ["Post"],
  }),
});

export const {
  useFetchPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
