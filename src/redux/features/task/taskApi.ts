import { baseApi } from '../../api/baseApi';

const taskApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        //getting data from database
        getTaskData: builder.query({
            query: ({ page = 1, limit = 30 }) => ({
                url: `/api/v1/task/get?page=${page}&limit=${limit}`,
                method: "GET",
            }),
            providesTags: ["tasks"],
        }),

        //posting task / Create
        addTask: builder.mutation({
            query: (data) => ({
                url: `/api/v1/task/create`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["tasks"], //for make fetch after the action
        }),

        //deleting task / Delete
        deleteTask: builder.mutation({
            query: (options) => ({
                url: `/api/v1/task/${options.id}`,
                method: "DELETE",
                body: options.data,
            }),
            invalidatesTags: ["tasks"], //for make fetch after the action
        }),

        //important task / Delete
        important: builder.mutation({
            query: (options) => ({
                url: `/api/v1/task/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ["tasks"], //for make fetch after the action
        }),
        //Status task / Delete
        status: builder.mutation({
            query: (options) => ({
                url: `/api/v1/task/status/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ["tasks"], //for make fetch after the action
        }),

        //updating task / Update
        updateTask: builder.mutation({
            query: (options) => ({
                url: `/api/v1/task/${options.id}`,
                method: "PATCH",
                body: options.data,
            }),
            invalidatesTags: ["tasks"], //for make fetch after the action
        }),


    }),
});

//CRUD api hooks
export const {
    useGetTaskDataQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useUpdateTaskMutation,
    useImportantMutation,
    useStatusMutation
} = taskApi;