import {
  Card,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function CardPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Card
        </Heading>
        <Text size="4">
          A container for grouping related content and actions.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Card } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4" wrap="wrap">
          <Card style={{ width: 200, height: 100 }} variant="surface">
            Surface Card
          </Card>
          <Card style={{ width: 200, height: 100 }} variant="elevated">
            Elevated Card
          </Card>
          <Card style={{ width: 200, height: 100 }} variant="outlined">
            Outlined Card
          </Card>
          <Card
            style={{ width: 200, height: 100 }}
            variant="surface"
            translucent
          >
            Translucent Card
          </Card>
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
              <Table.Cell>variant</Table.Cell>
              <Table.Cell>
                <Code>
                  'filled' | 'tonal' | 'outlined' | 'elevated' | 'text' |
                  'surface'
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'surface'</Code>
              </Table.Cell>
              <Table.Cell>The visual variant of the card.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>translucent</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>If true, applies a glassmorphism effect.</Table.Cell>
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
