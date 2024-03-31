import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://task-manager-server-seven-plum.vercel.app",
    }), //the main url link
    tagTypes: ["tasks"],
    endpoints: (builder) => ({
        //getting data from database
        getTaskData: builder.query({
            query: () => ({
                url: `/api/v1/task/get`,
                method: "GET",
            }),
            providesTags: ["tasks"],
        }),

        //posting task / Create

        //updating task / Update

        //deleting task / Delete

    }),
});

//CRUD api hooks
export const {
    useGetTaskDataQuery,
} = baseApi;
