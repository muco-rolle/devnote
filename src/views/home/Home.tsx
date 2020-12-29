import { Box, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

export const HomeView = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            maxW="90%"
            m="0 auto"
        >
            <Box textAlign="center">
                <Heading color="gray.700" fontFamily="pacifico" mb={6}>
                    devnote
                </Heading>
                <chakra.h1
                    maxW="680px"
                    mx="auto"
                    fontSize={{ base: '2.25rem', sm: '2.5rem', lg: '3rem' }}
                    fontFamily="heading"
                    letterSpacing="tight"
                    fontWeight="bold"
                    mb="16px"
                    lineHeight="1.2"
                >
                    The Note Taking App for Developers
                </chakra.h1>

                <Text
                    maxW="560px"
                    mx="auto"
                    opacity={0.7}
                    fontSize={{ base: 'lg', lg: 'xl' }}
                    mt="6"
                >
                    A beautiful web-based notes app for developers.
                </Text>

                <Stack
                    mt="10"
                    spacing="4"
                    justify="center"
                    alignItems="center"
                    direction={{ base: 'column', sm: 'row' }}
                >
                    <Button
                        h="4rem"
                        px="40px"
                        fontSize="1.2rem"
                        size="lg"
                        bg="gray.700"
                        color="white"
                        backgroundColor="gray.700"
                        _hover={{ bg: 'gray.600' }}
                        _active={{
                            bg: 'gray.600',
                            transform: 'scale(0.95)',
                        }}
                        leftIcon={<AiOutlineGithub />}
                    >
                        Sign in with Github
                    </Button>
                    <Text>or</Text>
                    <Button
                        size="lg"
                        h="4rem"
                        px="40px"
                        fontSize="1.2rem"
                        variant="outline"
                        leftIcon={<FcGoogle />}
                        _active={{ transform: 'scale(0.95)' }}
                    >
                        Sign in with Google
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};
