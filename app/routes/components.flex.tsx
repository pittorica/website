import {
  Box,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function FlexPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Flex
        </Heading>
        <Text size="4">
          A layout component for creating flexible one-dimensional layouts using
          Flexbox.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Flex } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4">
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-indigo-3)',
            }}
          >
            Item 1
          </Box>
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-indigo-4)',
            }}
          >
            Item 2
          </Box>
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-indigo-5)',
            }}
          >
            Item 3
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
              <Table.Cell>direction</Table.Cell>
              <Table.Cell>
                <Code>
                  PittoricaResponsive&lt;'row' | 'column' | 'row-reverse' |
                  'column-reverse'&gt;
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'row'</Code>
              </Table.Cell>
              <Table.Cell>The direction of the flex container.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>align</Table.Cell>
              <Table.Cell>
                <Code>
                  PittoricaResponsive&lt;'start' | 'center' | 'end' | 'baseline'
                  | 'stretch'&gt;
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'stretch'</Code>
              </Table.Cell>
              <Table.Cell>Alignment of items along the cross axis.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>justify</Table.Cell>
              <Table.Cell>
                <Code>
                  PittoricaResponsive&lt;'start' | 'center' | 'end' | 'between'
                  | 'around' | 'evenly'&gt;
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'start'</Code>
              </Table.Cell>
              <Table.Cell>Alignment of items along the main axis.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>wrap</Table.Cell>
              <Table.Cell>
                <Code>
                  PittoricaResponsive&lt;'nowrap' | 'wrap' | 'wrap-reverse'&gt;
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'nowrap'</Code>
              </Table.Cell>
              <Table.Cell>
                Whether items should wrap when they exceed the container size.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>gap</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaSpace&gt;</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'0'</Code>
              </Table.Cell>
              <Table.Cell>The space between flex items.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                colSpan={4}
                style={{
                  textAlign: 'center',
                  color: 'var(--pittorica-gray-10)',
                  fontSize: 'var(--pittorica-font-size-2)',
                  padding: 'var(--pittorica-space-4)',
                }}
              >
                This component also accepts all standard Box props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
