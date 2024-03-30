
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// //import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: () => ({}),
})

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// // export const { useGetPokemonByNameQuery } = pokemonApi 