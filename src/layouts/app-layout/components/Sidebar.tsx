import React from 'react';
import { Box, Icon, Stack } from '@chakra-ui/react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { chakra, PropsOf, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { tools } from '@config';

export const Sidebar = () => {
    return (
        <Box
            as="aside"
            bg="white"
            pos="fixed"
            top="70px"
            left="0"
            w="280px"
            overflowY="auto"
            boxShadow="1px 0 15px rgba(0,0,0,.04),1px 0 6px rgba(0,0,0,.04)"
            height="calc(100vh - 70px)"
            zIndex="0"
            display={{ base: 'none', md: 'block' }}
        >
            <PerfectScrollbar>
                <Stack spacing={6} p={5}>
                    <Box>
                        {tools.map(({ icon, title, path }, index) => {
                            return (
                                <Box
                                    as="li"
                                    key={title}
                                    display="flex"
                                    alignItems="center"
                                >
                                    <SidebarLink key={path} href={path}>
                                        <Icon mr={2} as={icon} />
                                        <Box>{title}</Box>
                                    </SidebarLink>
                                </Box>
                            );
                        })}
                    </Box>
                </Stack>
            </PerfectScrollbar>
        </Box>
    );
};

const StyledLink = React.forwardRef(function StyledLink(
    props: PropsOf<typeof chakra.a> & { isActive?: boolean },
    ref: React.Ref<any>
) {
    const { isActive, ...rest } = props;

    return (
        <chakra.a
            aria-current={isActive ? 'page' : undefined}
            width="100%"
            display="flex"
            alignItems="center"
            px="2"
            py="1"
            ref={ref}
            fontSize="sm"
            fontWeight="bold"
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            transition="all 0.2s"
            borderRadius={6}
            _hover={{
                bg: 'blue.100',
                color: 'blue.900',
                fontWeight: '600',
            }}
            _activeLink={{
                bg: 'blue.100',
                color: 'blue.900',
                fontWeight: '600',
            }}
            {...rest}
        />
    );
});

type SidebarLinkProps = PropsOf<typeof chakra.div> & {
    href?: string;
    icon?: React.ReactElement;
};

const SidebarLink = (props: SidebarLinkProps) => {
    const { href, icon, children, ...rest } = props;

    const { pathname } = useRouter();
    const isActive = pathname === href;

    return (
        <chakra.div
            userSelect="none"
            display="flex"
            width="full"
            alignItems="center"
            lineHeight="1.5rem"
            {...rest}
        >
            <NextLink href={href} passHref>
                <StyledLink isActive={isActive}>{children}</StyledLink>
            </NextLink>
        </chakra.div>
    );
};
