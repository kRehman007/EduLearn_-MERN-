import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (userData) => ({
        url: "/user/signup",
        method: "POST",
        body: userData,
      }),
    }),
    userLogIn: builder.mutation({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
    }),
    userLogOut: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useUserLogInMutation,
  useUserSignupMutation,
  useUserLogOutMutation,
} = userApiSlice;
