import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DocumentHead } from '@components';

import 'typeface-inter'; // main font
import 'typeface-pacifico'; // logo font
import { theme } from '@theme';

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <DocumentHead />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
