import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-buddy-server.vercel.app",
    // baseUrl: 'http://localhost:5000',
    credentials: "same-origin",
  }),
  tagTypes: ["tasks"],

  endpoints: () => ({}),
});
