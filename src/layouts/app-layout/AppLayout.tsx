import React, { Fragment } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Container, DocumentHead } from '@components';
import { Content, Header, Sidebar } from './components';

interface AppLayoutProps extends BoxProps {
    title?: string;
}

export const AppLayout = ({ children, title }: AppLayoutProps) => {
    return (
        <Fragment>
            <DocumentHead title={title} />
            <Box bg="gray.50">
                <Header />
                <Box as="main" overflow="hidden" mx={5}>
                    <Sidebar />
                    <Content>{children}</Content>
                </Box>

                {/* Footer */}
            </Box>
        </Fragment>
    );
};
