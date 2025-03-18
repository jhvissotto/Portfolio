import { EndpointBuilder } from '@reduxjs/toolkit/query/react'


export type Req = {}

export type Res = {
    userId:     number,
    id:         number,
    title:      string,
    completed:  boolean, 
}


export const endpoint = (builder: EndpointBuilder<any, any, any>) => ({
    getTodos: builder.query<Res[], Req>({
        query: () => '/todos',
    }),
})
  