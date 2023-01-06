import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = process.env.REACT_APP_API_URL;

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: `contacts`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = contactsApi;
