import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        //create user
        register: builder.mutation({
            query: (data) => ({
                url: `/api/v2/user/create`,
                method: "POST",
                body: data,
            }),
        }),

        //get user
        getUser: builder.query({
            query: () => ({
                url: `/api/v2/user/get`,
                method: "GET",
            }),
        }),

        //login user
        login: builder.mutation({
            query: (data) => ({
                url: `/user/login`,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

// api hooks
export const { useRegisterMutation, useLoginMutation, useGetUserQuery } = authApi;