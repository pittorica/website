import {
  Code,
  Flex,
  Heading,
  RadioGroup,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function RadioPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Radio
        </Heading>
        <Text size="4">
          A set of checkable buttons where only one can be checked at a time.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { RadioGroup } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <RadioGroup defaultValue="1">
          <Flex direction="column" gap="2">
            <Flex gap="2" align="center">
              <RadioGroup.Item value="1" />
              <Text size="2">Option 1</Text>
            </Flex>
            <Flex gap="2" align="center">
              <RadioGroup.Item value="2" />
              <Text size="2">Option 2</Text>
            </Flex>
            <Flex gap="2" align="center">
              <RadioGroup.Item value="3" />
              <Text size="2">Option 3</Text>
            </Flex>
          </Flex>
        </RadioGroup>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>

        <Heading size="5" weight="bold" mt="4">
          RadioGroup.Root
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
              <Table.Cell>defaultValue</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The default value of the radio group.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>value</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The controlled value of the radio group.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the radio items.</Table.Cell>
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

        <Heading size="5" weight="bold" mt="4">
          RadioGroup.Item
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
              <Table.Cell>value</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The value of the radio item.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>disabled</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>Whether the radio item is disabled.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
