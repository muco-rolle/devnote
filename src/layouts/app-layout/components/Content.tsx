import { Box, BoxProps } from '@chakra-ui/react';
import { PageTransition } from '@components';

interface ContentProps extends BoxProps {}

export const Content = ({ children }: ContentProps) => {
    return (
        <Box
            mt="100px"
            mb="50px"
            flex="1 1 auto"
            overflowY="auto"
            minH="100vh"
            ml={{ base: '0', md: '280px' }}
        >
            <Box width="800px" margin="0 auto" maxW="100%">
                <PageTransition>{children}</PageTransition>
            </Box>
        </Box>
    );
};
