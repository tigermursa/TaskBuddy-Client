// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "https://task-manager-server-seven-plum.vercel.app",
//     }), //the main url link
//     tagTypes: ["tasks"],
//     endpoints: (builder) => ({
//         //getting data from database
//         getTaskData: builder.query({
//             query: () => ({
//                 url: `/api/v1/task/get`,
//                 method: "GET",
//             }),
//             providesTags: ["tasks"],
//         }),

//         //posting task / Create
//         addTask: builder.mutation({
//             query: (data) => ({
//                 url: `/api/v1/task/create`,
//                 method: "POST",
//                 body: data,
//             }),
//             invalidatesTags: ["tasks"], //for make fetch after the action
//         }),

//         //deleting task / Delete
//         deleteTask: builder.mutation({
//             query: (options) => ({
//                 url: `/api/v1/task/${options.id}`,
//                 method: "DELETE",
//                 body: options.data,
//             }),
//             invalidatesTags: ["tasks"], //for make fetch after the action
//         }),
//         //updating task / Update
//         updateTask: builder.mutation({
//             query: (options) => ({
//                 url: `/api/v1/task/${options.id}`,
//                 method: "PATCH",
//                 body: options.data,
//             }),
//             invalidatesTags: ["tasks"], //for make fetch after the action
//         }),

//     }),
// });

// //CRUD api hooks
// export const {
//     useGetTaskDataQuery,
//     useAddTaskMutation,
//     useDeleteTaskMutation,
//     useUpdateTaskMutation

// } = baseApi;
