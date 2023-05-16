import {  createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axios,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                data: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),
    }),
});

// Export actions for components
export const { useLoginMutation, useLogoutMutation } = userApi;
