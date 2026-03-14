import {
  Code,
  DataList,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function DataListPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          DataList
        </Heading>
        <Text size="4">
          A component for displaying a list of key-value pairs, typically used
          for metadata or properties.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { DataList } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <DataList>
          <DataList.Item>
            <DataList.Label>Status</DataList.Label>
            <DataList.Value>Active</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Role</DataList.Label>
            <DataList.Value>Administrator</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Email</DataList.Label>
            <DataList.Value>john@example.com</DataList.Value>
          </DataList.Item>
        </DataList>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Heading size="4" weight="bold" mt="4">
          DataList.Root
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
              <Table.Cell>orientation</Table.Cell>
              <Table.Cell>
                <Code>'horizontal' | 'vertical'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'horizontal'</Code>
              </Table.Cell>
              <Table.Cell>The layout orientation of the data list.</Table.Cell>
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

        <Heading size="4" weight="bold" mt="4">
          DataList.Item, Label, Value
        </Heading>
        <Text>These components accept all standard Box props.</Text>
      </Flex>
    </Section>
  );
}
