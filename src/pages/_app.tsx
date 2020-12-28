import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DocumentHead } from '@components';

import 'typeface-inter'; // main font
import 'typeface-pacifico'; // logo font

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <DocumentHead />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
