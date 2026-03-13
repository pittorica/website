import { Outlet } from 'react-router';

import { Box, Container, Section } from 'pittorica/react';

import type { Route } from './+types/components';

export const meta: Route.MetaFunction = () => [
  { title: 'Components - Pittorica' },
];

export default function ComponentsLayout() {
  return (
    <Section p="0">
      <Container maxWidth="lg">
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
      </Container>
    </Section>
  );
}
