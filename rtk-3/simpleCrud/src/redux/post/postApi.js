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
      header.set("Content-Type", "application/json")
      header.set("Accept", "application/json")
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
