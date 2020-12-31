import React from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Text,
} from '@chakra-ui/react';
import { AppLayout } from '@layouts';
import { AddIcon } from '@chakra-ui/icons';

type QuickNote = {
    id: number;
    createdAt: { day: string; date: string };
    notes: [{ title: string; content: string }];
};

const notes = [
    {
        id: 1,
        createdAt: { day: 'December 31, 2020' },
        notes: [
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
        ],
    },

    {
        id: 2,
        createdAt: { day: 'December 30, 2020' },
        notes: [
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
        ],
    },

    {
        id: 3,
        createdAt: { day: 'Tuesday', date: 'Thu Dec 30,  2020' },
        notes: [
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
        ],
    },

    {
        id: 4,
        createdAt: { day: 'Monday', date: 'Thu Dec 30,  2020' },
        notes: [
            {
                title: 'Learn Social Auth with firebase',
                content: '<p>Content</p>',
            },
        ],
    },
];

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

                <Accordion allowMultiple mt={10}>
                    {notes.map(({ id, createdAt, notes }: QuickNote) => (
                        <AccordionItem
                            key={id}
                            bg="gray.100"
                            mt={2}
                            mb={10}
                            borderRadius="lg"
                        >
                            <AccordionButton
                                py={10}
                                borderRadius="lg"
                                border="2px solid"
                                borderColor="gray.100"
                                _hover={{ bg: 'gray.100' }}
                                _focus={{
                                    border: `2px solid`,
                                    borderColor: 'gray.100',
                                }}
                            >
                                <Box flex="1" textAlign="left">
                                    <HStack>
                                        <Heading
                                            fontSize="3xl"
                                            fontWeight="semibold"
                                        >
                                            {createdAt.day}
                                        </Heading>
                                    </HStack>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel
                                pb={4}
                                bg="white"
                                borderRadius="lg"
                                textAlign="left"
                                color="gray.700"
                                padding="30px 50px"
                                border={`2px solid #EDF2F7`}
                            >
                                <Box as="ul">
                                    {notes.map(({ title }, index) => (
                                        <Box
                                            as="li"
                                            key={index}
                                            fontSize="xl"
                                            listStyleType="none"
                                            borderBottom="1px solid"
                                            borderColor="gray.100"
                                            pb={2}
                                            mb={8}
                                            _hover={{ borderColor: 'gray.200' }}
                                        >
                                            <Box as="a" href="#">
                                                {title}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </AppLayout>
    );
};
