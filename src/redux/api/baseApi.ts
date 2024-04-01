import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://task-manager-server-seven-plum.vercel.app',
        credentials: 'same-origin',
    }),
    tagTypes: ["tasks"],


    endpoints: () => ({}),
});