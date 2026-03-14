import {
  Code,
  Divider,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function DividerPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Divider
        </Heading>
        <Text size="4">
          A visual separator between content, with support for solid lines and
          SVG patterns.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Divider } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="6">
          <Text>Standard solid divider:</Text>
          <Divider />

          <Text>Solid divider with text:</Text>
          <Divider>OR</Divider>

          <Text>Wave pattern divider:</Text>
          <Divider variant="wave" color="indigo" />

          <Text>Zigzag pattern divider:</Text>
          <Divider variant="zigzag" color="crimson" />

          <Text>Dashed pattern divider:</Text>
          <Divider variant="dashed" color="teal" />
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
                  'solid' | 'wave' | 'zigzag' | 'square' | 'scallop' | 'dashed'
                  | 'double' | 'cross' | 'dots'
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'solid'</Code>
              </Table.Cell>
              <Table.Cell>The visual variant of the divider.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'slate'</Code>
              </Table.Cell>
              <Table.Cell>The semantic color of the divider.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>thickness</Table.Cell>
              <Table.Cell>
                <Code>string | number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'1px'</Code>
              </Table.Cell>
              <Table.Cell>
                Thickness of the line for the 'solid' variant.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>children</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Optional text or icon to display in the middle of a solid
                divider.
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
      </Flex>
    </Section>
  );
}
