import { Box, Heading } from '@chakra-ui/react';
import { AppLayout } from '@layouts';

export const AppView = () => {
    return (
        <AppLayout title="App">
            <Box>
                <Heading>App View</Heading>
            </Box>
        </AppLayout>
    );
};
