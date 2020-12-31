import React from 'react';
import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import { AppLayout } from '@layouts';
import { AddIcon } from '@chakra-ui/icons';

export const QuickNotesView = () => {
    return (
        <AppLayout>
            <Box pt={1}>
                <Button
                    leftIcon={<AddIcon />}
                    variant="solid"
                    colorScheme="blue"
                >
                    Add a note
                </Button>

                <Box
                    my={10}
                    pb={3}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                >
                    <HStack mb={2} alignItems="center">
                        <Heading as="h1" fontSize="lg">
                            Today
                        </Heading>
                        <Text fontSize="sm">Thu Dec 31, 2020</Text>
                    </HStack>

                    <Heading as="h2" fontSize="2xl">
                        Learn Social auth in firebase
                    </Heading>
                </Box>

                <Box
                    my={10}
                    pb={3}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                >
                    <HStack mb={2} alignItems="center">
                        <Heading as="h1" fontSize="lg">
                            Yesterday
                        </Heading>
                        <Text fontSize="sm">Thu Dec 30, 2020</Text>
                    </HStack>

                    <Heading as="h2" fontSize="2xl">
                        Learn Social auth in firebase
                    </Heading>
                </Box>

                <Box
                    my={10}
                    pb={3}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                >
                    <HStack mb={2} alignItems="center">
                        <Heading as="h1" fontSize="lg">
                            Monday
                        </Heading>
                        <Text fontSize="sm">Thu Dec 31, 2020</Text>
                    </HStack>

                    <Heading as="h2" fontSize="2xl">
                        Learn Social auth in firebase
                    </Heading>
                </Box>
            </Box>
        </AppLayout>
    );
};
