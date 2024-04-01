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
    }),
});

// api hooks
export const {

    useRegisterMutation,


} = authApi;