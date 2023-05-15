import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../utils/api";

export const rtkquerySlice = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}` }),
  endpoints: (builder) => ({
    // Get all categories
    getCategories: builder.query({
      query: () => "/posts",
      providesTags: ["Todos"],
    }),

    // Get a single category by ID
    getCategoryById: builder.query({
      query: (id) => `/posts/${id}`,

      providesTags: ["Todos"],
    }),

    // Create a new category
    createCategory: builder.mutation({
      query: (payload) => ({
        url: "/posts",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Todos"],
    }),

    // Update an existing category by ID
    updateCategory: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Todos"],
    }),

    // Delete a category by ID
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = rtkquerySlice;
