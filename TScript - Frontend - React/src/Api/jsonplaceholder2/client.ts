import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { todos, todo } from '.'

export const client = createApi({
  reducerPath: 'jsonplaceholder2',
  baseQuery: fetchBaseQuery({ baseUrl:'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    ...todos.endpoint(build),
    ...todo.endpoint(build),
  }),
})