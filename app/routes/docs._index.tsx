import { Link as RouterLink } from 'react-router';

import { Card, Flex, Grid, Heading, Link } from 'pittorica/react';

export default function DocsIndex() {
  const sections = [
    {
      title: 'Getting Started',
      links: [
        {
          label: 'Introduction',
          to: '/docs/get-started',
          description: 'Learn what Pittorica is and how it works.',
        },
        {
          label: 'Installation',
          to: '/docs/installation',
          description: 'Add Pittorica to your project via npm, pnpm or yarn.',
        },
      ],
    },
    {
      title: 'Core Concepts',
      links: [
        {
          label: 'Theming',
          to: '/docs/theming',
          description: 'Customize colors, radius and appearance.',
        },
        {
          label: 'Design Tokens',
          to: '/docs/tokens',
          description: 'Explore the CSS variables driving the framework.',
        },
      ],
    },
  ];

  return (
    <Flex direction="column" gap="8">
      <Heading size="9" weight="bold">
        Documentation
      </Heading>

      <Grid columns={{ initial: '1', sm: '2' }} gap="6">
        {sections.map((section) => (
          <Flex key={section.title} direction="column" gap="4">
            <Heading size="6" weight="bold">
              {section.title}
            </Heading>
            <Flex direction="column" gap="3">
              {section.links.map((link) => (
                <Card key={link.to} p="2">
                  <Link
                    as={RouterLink}
                    to={link.to}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Flex direction="column" gap="1">
                      <Heading size="4" color="indigo" weight="bold">
                        {link.label}
                      </Heading>
                      <Heading
                        as="p"
                        size="2"
                        weight="regular"
                        style={{ opacity: 0.6 }}
                      >
                        {link.description}
                      </Heading>
                    </Flex>
                  </Link>
                </Card>
              ))}
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
}
