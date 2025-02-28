import { EndpointBuilder } from '@reduxjs/toolkit/query/react'


export type Req = {
    todoId: number, 
}

export type Res = {
    userId:     number,
    id:         number,
    title:      string,
    completed:  boolean, 
}


export const endpoint = (builder: EndpointBuilder<any, any, any>) => ({
    getTodo: builder.query<Res[], Req>({
        query: ({ todoId }) => `/todos/{todoId}`,
    }),
})
  