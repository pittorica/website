import {
  Box,
  Code,
  Flex,
  Heading,
  Section,
  Stack,
  Table,
  Text,
} from 'pittorica/react';

export default function StackPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Stack
        </Heading>
        <Text size="4">
          Stack component for vertical or horizontal linear layouts. It
          simplifies common flexbox patterns, defaulting to a vertical column.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Stack } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="9">
          <Flex direction="column" gap="2">
            <Text weight="bold">Vertical (Default)</Text>
            <Stack gap="2">
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 'var(--pittorica-radius-small)',
                }}
              >
                Item 1
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 'var(--pittorica-radius-small)',
                }}
              >
                Item 2
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 'var(--pittorica-radius-small)',
                }}
              >
                Item 3
              </Box>
            </Stack>
          </Flex>

          <Flex direction="column" gap="2">
            <Text weight="bold">Horizontal</Text>
            <Stack direction="row" gap="2">
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 'var(--pittorica-radius-small)',
                }}
              >
                Item 1
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 'var(--pittorica-radius-small)',
                }}
              >
                Item 2
              </Box>
              <Box
                p="3"
                style={{
                  background: 'var(--pittorica-indigo-3)',
                  borderRadius: 'var(--pittorica-radius-small)',
                }}
              >
                Item 3
              </Box>
            </Stack>
          </Flex>
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
                <Code>'column'</Code>
              </Table.Cell>
              <Table.Cell>The direction of the stack.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>align</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaFlexAlign&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Alignment of items along the cross axis.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>justify</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaFlexJustify&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Justification of items along the main axis.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>gap</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaSpace&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The space between items in the stack.</Table.Cell>
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
