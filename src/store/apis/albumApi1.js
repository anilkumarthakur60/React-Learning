import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const albumApi = createApi({
    reducerPath: 'albumApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),



    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (user) =>{
                    return {
                        url: 'albums/',
                        params: {
                            userId: user.id
                        },
                        transformResponse: (response) => {
                            return response.results;

                        },
                        transformError: (error) => {
                            return error;
                        },
                        method: 'GET',

                    }
                }
            }),

        }
    }


})


export  const {useFetchAlbumsQuery} = albumApi;
export {albumApi}