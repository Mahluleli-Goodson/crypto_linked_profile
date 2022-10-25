import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import {MetamaskStateProvider} from "use-metamask";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <MetamaskStateProvider>
            <Component {...pageProps} />
        </MetamaskStateProvider>
    )
}

export default MyApp
