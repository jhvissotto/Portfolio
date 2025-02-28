import { useState } from 'react'
import { integration } from '@/integration'


export default function ApiRest() {

  const [data, setData] = useState('')

  async function load() {
    const { greetings } = await integration.welcome1.request({})
    return setData(greetings)
  }

  return (
    <>
      <h1>Api Rest</h1>
      
      <button onClick={load} >Load</button>
      
      <h2>{data}</h2>
    </>
  )
}
