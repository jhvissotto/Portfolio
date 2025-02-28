import React from 'react'

import type { Res } from '../../Api/jsonplaceholder1/todos'
import { Api } from '../../Api'


export function Fetch() {
  
  const [data, setData] = React.useState<Res[]>([])

  async function loadData() {
    const data = await Api.jsonplaceholder1.todos.request({})
    setData(data)
  }
  
  return (
    <>
      <h1>Api Fetch</h1>
      <button onClick={loadData}>Load Data</button>

      <table>
        <thead>
          <th>USER_ID</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>COMPLETED</th>
        </thead>
        <tbody>
          {data.map(x => (
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