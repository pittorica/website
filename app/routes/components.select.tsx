import {
  Code,
  Flex,
  Heading,
  Section,
  Select,
  Table,
  Text,
} from 'pittorica/react';

export default function SelectPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Select
        </Heading>
        <Text size="4">A component to pick an option from a list.</Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Select } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Select.Root label="Pick a color">
          <Select.Content>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </Select.Content>
        </Select.Root>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>

        <Heading size="5" weight="bold" mt="4">
          Select.Root
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
              <Table.Cell>label</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The label for the select.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>helperText</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The helper text for the select.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>error</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>Whether the select is in an error state.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'sm'</Code>
              </Table.Cell>
              <Table.Cell>The size of the select.</Table.Cell>
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
