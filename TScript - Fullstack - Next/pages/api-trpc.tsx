import React from 'react'
import { trpc } from '@/trpc/utils/trpc'


export default function ApiTRPC() {

  const { data } = trpc.wellcome2.useQuery({ message: 'Welcome' })

  return (
    <>
      <h1>Api TRPC</h1>
      <h2>{data?.text}</h2>
    </>
  )
}
