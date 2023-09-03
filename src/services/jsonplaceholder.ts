import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const jsonplaceholderApi = createApi({
  reducerPath: "jsonplaceholder",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], string>({
      query: (searchedValue) => {
        if (searchedValue) {
          return `posts?title_like=${searchedValue}`;
        } else return `/posts`;
      },
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = jsonplaceholderApi;
