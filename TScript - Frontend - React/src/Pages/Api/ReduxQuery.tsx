import React from 'react'

import { Api } from '../../Api'


export function ReduxQuery() {
  
  const { data } = Api.jsonplaceholder2.client.useGetTodosQuery({})
  
  return (
    <>
      <h1>Api Redux Query</h1>

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
