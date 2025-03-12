import React from 'react'
import { TRPCNext } from '@/src/integration/TRPCNext'
import { Fragment as Body } from 'react'


export default function ApiTRPC() {

  const { data } = TRPCNext.welcome.useQuery({ message: 'Welcome' })

  return (
    <Body>
      <h1>Api TRPC</h1>
      <h2>{data?.text}</h2>
    </Body>
  )
}
