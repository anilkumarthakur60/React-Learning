import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  {faker} from "@faker-js/faker";

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/',
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (post) => {
                    return {
                        url: '/albums/',
                        params: {
                            filters: JSON.stringify({postId: post.id}),
                        },
                        method: 'GET',
                    };
                },
            }),
            fetchAllAlbums: builder.query({
                query: () => {
                    return {
                        url: '/albums/',
                        method: 'GET',
                    };

                }
            }),
            createAlbum: builder.mutation({
                query: (post) => {
                    return {
                        url: '/albums/',
                        method: 'POST',
                        body: {
                            name: faker.commerce.productName(),
                            post_id: post.id,
                        },
                    };
                }
            }),
        };
    },
});

export const { useFetchAlbumsQuery,useFetchAllAlbumsQuery } = albumsApi;
export { albumsApi };