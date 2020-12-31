import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Link,
    useToast,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { db } from '@utils';
import { ChangeEvent, useEffect, useState } from 'react';

type Change = ChangeEvent<HTMLInputElement>;

const AppPage = () => {
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState([]);
    const toast = useToast();

    useEffect(() => {
        setNotes(db.getNotes());
    }, []);

    return (
        <Box>
            <Box w="900px" maxW="90%" m="0 auto">
                <Heading
                    textAlign="center"
                    fontFamily={`Pacifico, cursive`}
                    mt={10}
                    mb={5}
                    color="blue.600"
                >
                    devnote
                </Heading>
                <HStack>
                    <Input
                        placeholder="Add a note title"
                        size="lg"
                        defaultValue={title}
                        onChange={({ target }: Change) => {
                            setTitle(target.value);
                        }}
                    />
                    <Button
                        size="lg"
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => {
                            db.createNote({ title });
                            toast({
                                title: 'Note created',
                                description:
                                    'Click on a note title to start writting the content',
                                isClosable: true,
                            });
                            setTitle('');
                        }}
                    >
                        Add
                    </Button>
                </HStack>

                <Box my={10}>
                    {notes.map(({ id, title }) => (
                        <NextLink key={id} href={`/app/notes/${id}`}>
                            <Link
                                as="h3"
                                pb={3}
                                fontSize="2xl"
                                borderBottom="1px solid"
                                borderColor="gray.100"
                                _hover={{ textDecor: 'none' }}
                                _notLast={{ marginBottom: '50px' }}
                            >
                                {title}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default AppPage;
