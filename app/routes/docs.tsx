import { Link as RouterLink, Outlet } from 'react-router';

import { Box, Container, Flex, Heading, Link, Section } from 'pittorica/react';

import type { Route } from './+types/docs';

export const meta: Route.MetaFunction = () => [
  { title: 'Documentation - Pittorica' },
];

export default function DocsLayout() {
  return (
    <Section p="0">
      <Container maxWidth="lg">
        <Flex gap="8">
          <Box
            as="aside"
            style={{
              width: '240px',
              flexShrink: 0,
              position: 'sticky',
              top: '56px',
              height: 'calc(100vh - 56px)',
              overflowY: 'auto',
              borderRight: '1px solid var(--pittorica-slate-3)',
              padding: 'var(--pittorica-space-6) 0',
            }}
          >
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="2">
                <Heading size="3" weight="bold" p="2">
                  Getting Started
                </Heading>
                <Flex direction="column">
                  <Link
                    as={RouterLink}
                    to="/docs"
                    color="indigo"
                    p="2"
                    style={{ textDecoration: 'none' }}
                  >
                    Introduction
                  </Link>
                  <Link
                    as={RouterLink}
                    to="/docs/installation"
                    color="indigo"
                    p="2"
                    style={{ textDecoration: 'none' }}
                  >
                    Installation
                  </Link>
                </Flex>
              </Flex>

              <Flex direction="column" gap="2">
                <Heading size="3" weight="bold" p="2">
                  Core Concepts
                </Heading>
                <Flex direction="column">
                  <Link
                    as={RouterLink}
                    to="/docs/theming"
                    color="indigo"
                    p="2"
                    style={{ textDecoration: 'none' }}
                  >
                    Theming
                  </Link>
                  <Link
                    as={RouterLink}
                    to="/docs/tokens"
                    color="indigo"
                    p="2"
                    style={{ textDecoration: 'none' }}
                  >
                    Design Tokens
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Box
            as="main"
            style={{
              flexGrow: 1,
              padding: 'var(--pittorica-space-9) 0',
              minWidth: 0,
            }}
          >
            <Outlet />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
