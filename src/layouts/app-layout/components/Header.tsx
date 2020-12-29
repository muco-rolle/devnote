import React from 'react';
import { Avatar, Box, Flex, HStack, IconButton } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon, Icon, MoonIcon } from '@chakra-ui/icons';

export const Header = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding={9}
            as="header"
            height="70px"
            boxShadow="sm"
            bg="white"
            position="fixed"
            width="100%"
            zIndex="10"
        >
            <Box>Logo</Box>
            {/* Search */}
            <Flex>
                <HStack spacing={5}>
                    <IconButton aria-label="theme mode" icon={<MoonIcon />} />
                    <IconButton aria-label="theme mode" icon={<BellIcon />} />

                    <Box display="flex" alignItems="center">
                        <Avatar
                            border="5px solid white"
                            boxShadow="xs"
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                            mr={1}
                        />

                        <Icon size="lg" as={ChevronDownIcon} />
                    </Box>
                </HStack>
            </Flex>
        </Box>
    );
};
