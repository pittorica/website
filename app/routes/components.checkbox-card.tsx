import {
  CheckboxCard,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function CheckboxCardPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          CheckboxCard
        </Heading>
        <Text size="4">A group of cards that act as checkboxes.</Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { CheckboxCard } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <CheckboxCard
            orientation="horizontal"
            color="indigo"
            defaultValue={['1']}
          >
            <CheckboxCard.Item value="1" style={{ flex: 1 }}>
              <Text weight="bold">Option 1</Text>
              <Text size="2" color="gray">
                Description for option 1
              </Text>
            </CheckboxCard.Item>
            <CheckboxCard.Item value="2" style={{ flex: 1 }}>
              <Text weight="bold">Option 2</Text>
              <Text size="2" color="gray">
                Description for option 2
              </Text>
            </CheckboxCard.Item>
          </CheckboxCard>
        </Flex>

        <Heading size="6" weight="bold" mt="6">
          API Reference (CheckboxCard.Root)
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
                <Code>string[]</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                The controlled value of the selected cards.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>defaultValue</Table.Cell>
              <Table.Cell>
                <Code>string[]</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The initial value of the selected cards.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onValueChange</Table.Cell>
              <Table.Cell>
                <Code>(value: string[]) =&gt; void</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Callback function called when the value changes.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>orientation</Table.Cell>
              <Table.Cell>
                <Code>'horizontal' | 'vertical'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'vertical'</Code>
              </Table.Cell>
              <Table.Cell>The orientation of the cards.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the selected cards.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>translucent</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                If true, applies glassmorphism to the cards.
              </Table.Cell>
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

        <Heading size="6" weight="bold" mt="6">
          API Reference (CheckboxCard.Item)
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
              <Table.Cell>The unique value of the card.</Table.Cell>
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
                This component also accepts all standard Card props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
