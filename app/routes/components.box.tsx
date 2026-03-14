import {
  Box,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function BoxPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Box
        </Heading>
        <Text size="4">The foundational primitive for layout and styling.</Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Box } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4">
          <Box
            p="4"
            style={{
              backgroundColor: 'var(--pittorica-gray-4)',
              borderRadius: 'var(--pittorica-radius-medium)',
            }}
          >
            Box with padding
          </Box>
          <Box
            as="span"
            p="4"
            style={{
              backgroundColor: 'var(--pittorica-indigo-4)',
              borderRadius: 'var(--pittorica-radius-medium)',
            }}
          >
            Box as span
          </Box>
        </Flex>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Prop</Table.ColumnHeader>
              <Table.ColumnHeader>Type</Table.ColumnHeader>
              <Table.ColumnHeader>Default</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>as</Table.Cell>
              <Table.Cell>
                <Code>ElementType</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'div'</Code>
              </Table.Cell>
              <Table.Cell>The HTML tag or component to render as.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>display</Table.Cell>
              <Table.Cell>
                <Code>PittoricaDisplay</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The CSS display property.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>m, mt, mr, mb, ml, mx, my</Table.Cell>
              <Table.Cell>
                <Code>PittoricaSpace</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Margin props (top, right, bottom, left, horizontal, vertical).
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>p, pt, pr, pb, pl, px, py</Table.Cell>
              <Table.Cell>
                <Code>PittoricaSpace</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Padding props (top, right, bottom, left, horizontal, vertical).
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>width, height</Table.Cell>
              <Table.Cell>
                <Code>string | object</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Responsive width and height.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>position</Table.Cell>
              <Table.Cell>
                <Code>PittoricaPosition</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The CSS position property.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>disabled</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Whether the element is disabled.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
