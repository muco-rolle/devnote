import { ArrowLeftIcon, RepeatIcon, ArrowBackIcon } from '@chakra-ui/icons';
import {
    Box,
    IconButton,
    Text,
    Heading,
    Flex,
    HStack,
    Button,
} from '@chakra-ui/react';
import { db } from '@utils';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MarkdownEditor from 'rich-markdown-editor';

import React, { useEffect, useState } from 'react';

const WriteNotePage = () => {
    const { query } = useRouter();
    const [note, setNote] = useState({
        id: '',
        title: '',
        content: '',
    });

    const [content, setContent] = useState('');

    useEffect(() => {
        const { noteId } = query;
        setNote(db.getNote(noteId as string));
    }, []);

    console.log(content);

    return (
        <Box>
            <Box width="1024px" maxW="90%" m="0 auto" my={10}>
                {note ? (
                    <Box>
                        <Box as="header">
                            <Flex justifyContent="space-between">
                                <HStack>
                                    <NextLink href="/app">
                                        <IconButton
                                            cursor="pointer"
                                            size="sm"
                                            as={ArrowBackIcon}
                                            aria-label="back button"
                                        />
                                    </NextLink>
                                    <Heading as="h3">
                                        {(note as any).title}
                                    </Heading>
                                </HStack>

                                <Button leftIcon={<RepeatIcon />}>
                                    Save changes
                                </Button>
                            </Flex>
                        </Box>

                        <Box mx={10} my={10}>
                            <MarkdownEditor
                                defaultValue={content ?? ''}
                                onChange={(getValue) => {
                                    setContent(getValue());
                                }}
                            />
                        </Box>
                    </Box>
                ) : (
                    <Text>Loading...</Text>
                )}
            </Box>
        </Box>
    );
};

export default WriteNotePage;
