import type { AppProps } from 'next/app'
import { Fragment as MyDocument } from 'react'

import { TRPCNext } from '@/src/integration/TRPCNext'
import { Providers } from '@/src/frontend/Providers'
// import '@/src/frontend/design/styles/globals.css'


function App({ Component, pageProps }: AppProps) {
    return (
        <MyDocument>
            <Providers>
                <Component {...pageProps} />
            </Providers>
        </MyDocument>
    )
}

export default TRPCNext.withTRPC(App)