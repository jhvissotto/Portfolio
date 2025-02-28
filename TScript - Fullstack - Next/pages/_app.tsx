import type { AppType, AppProps } from 'next/app'

import { trpc } from '@/trpc/utils/trpc'
import { Providers } from '@/providers'

import '@/styles/globals.css'


const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default trpc.withTRPC(App)