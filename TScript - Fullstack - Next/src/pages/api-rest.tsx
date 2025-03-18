import { Fragment as MyApp } from 'react'
import { useState } from 'react'
import { welcome } from '@/src/integration/components1'


export default function ApiRest() {

    const [data, setData] = useState('')

    async function load() {
        const { greetings } = await welcome.request({})
        return setData(greetings)
    }

    return (
        <MyApp>
            <h1>Api Rest</h1>
            
            <button onClick={load} >Load</button>
            
            <h2>{data}</h2>
        </MyApp>
    )
}
