import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `api`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
