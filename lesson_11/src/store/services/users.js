import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://655655bc84b36e3a431f9829.mockapi.io/",
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'User', id })), 'User']
          : ['User'],
    }),
    addUser: builder.mutation({
        query(body) {
          return {
            url: `users`,
            method: 'POST',
            body,
          }
        },
        invalidatesTags: ['User'],
      }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;
