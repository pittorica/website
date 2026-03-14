import {
  Blockquote,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function BlockquotePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Blockquote
        </Heading>
        <Text size="4">A stylized component for extended quotations.</Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Blockquote } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <Blockquote variant="classic">
            Classic: Logic will get you from A to B. Imagination will take you
            everywhere.
          </Blockquote>
          <Blockquote variant="soft" color="indigo">
            Soft: Logic will get you from A to B. Imagination will take you
            everywhere.
          </Blockquote>
          <Blockquote variant="solid" color="crimson">
            Solid: Logic will get you from A to B. Imagination will take you
            everywhere.
          </Blockquote>
          <Blockquote variant="outline" color="amber">
            Outline: Logic will get you from A to B. Imagination will take you
            everywhere.
          </Blockquote>
          <Blockquote variant="fancy" color="purple">
            Fancy: Logic will get you from A to B. Imagination will take you
            everywhere.
          </Blockquote>
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
                <Code>'classic' | 'soft' | 'solid' | 'outline' | 'fancy'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'classic'</Code>
              </Table.Cell>
              <Table.Cell>The visual style of the blockquote.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The semantic color of the blockquote.</Table.Cell>
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
                This component also accepts all standard Text (and Box) props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
