import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const client = new QueryClient()


export function ReactQuery({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}