import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DocumentHead } from '@components';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <DocumentHead />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
