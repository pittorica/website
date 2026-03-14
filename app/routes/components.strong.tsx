import {
  Code,
  Flex,
  Heading,
  Section,
  Strong,
  Table,
  Text,
} from 'pittorica/react';

export default function StrongPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Strong
        </Heading>
        <Text size="4">
          Strong component for bold text emphasis. It defaults to a span tag
          with bold font weight.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Strong } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Text>
          This is a <Strong>strongly emphasized</Strong> piece of text.
        </Text>

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
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaSize&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The size of the text.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>weight</Table.Cell>
              <Table.Cell>
                <Code>'light' | 'regular' | 'medium' | 'bold'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'bold'</Code>
              </Table.Cell>
              <Table.Cell>The font weight of the text.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The color of the text.</Table.Cell>
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
