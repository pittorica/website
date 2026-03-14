import { Code, Flex, Heading, Section, Table, Text } from 'pittorica/react';

export default function TablePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Table
        </Heading>
        <Text size="4">
          Table component for displaying structured data. Includes support for
          headers, rows, and cells.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Table } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Role</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Danilo De Caprio</Table.Cell>
              <Table.Cell>danilo@example.com</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John Doe</Table.Cell>
              <Table.Cell>john@example.com</Table.Cell>
              <Table.Cell>Designer</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Text weight="bold">Table.Root</Text>
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
              <Table.Cell>variant</Table.Cell>
              <Table.Cell>
                <Code>'surface' | 'ghost' | 'outline'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'ghost'</Code>
              </Table.Cell>
              <Table.Cell>The visual variant of the table.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>'1' | '2' | '3'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'2'</Code>
              </Table.Cell>
              <Table.Cell>The size of the table.</Table.Cell>
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
                All Table components also accept standard Box props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
