import type { AppProps } from 'next/app'

import { TRPCNext } from '@/src/integration/TRPCNext'
import { Providers } from '@/src/frontend/Providers'

// import '@/src/frontend/design/styles/globals.css'


function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
           <Component {...pageProps} />
        </Providers>
    )
}

export default TRPCNext.withTRPC(App)