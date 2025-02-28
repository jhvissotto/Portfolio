import React from 'react'
import { useQuery } from '@tanstack/react-query'

import type { Res } from '../../Api/jsonplaceholder1/todos'
import { Api } from '../../Api'


export function ReactQuery() {
  
  const { data } = useQuery<Res[]>({ 
    queryKey: ['jsonplaceholder1.todos'], 
    queryFn: () => Api.jsonplaceholder1.todos.request({}), 
  })
  
  return (
    <>
      <h1>Api React Query</h1>

      <table>
        <thead>
          <th>USER_ID</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>COMPLETED</th>
        </thead>
        <tbody>
          {data?.map(x => (
            <tr>
              <td>{x.userId}</td>
              <td>{x.id}</td>
              <td>{x.title}</td>
              <td>{x.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
