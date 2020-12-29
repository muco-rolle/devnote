import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { AppLayout } from '@layouts';

export const AppView = () => {
    return (
        <AppLayout>
            <Box>
                <Heading>App view</Heading>
            </Box>
        </AppLayout>
    );
};
