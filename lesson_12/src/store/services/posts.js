import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://655655bc84b36e3a431f9829.mockapi.io/",
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Post'],
    }),
    addPost: builder.mutation({
      query: (patch) => ({
        url: `posts`,
        method: 'POST',
        body: patch,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetPostsQuery, useUpdatePostMutation, useAddPostMutation } = postsApi;