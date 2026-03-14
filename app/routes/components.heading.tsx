import { Code, Flex, Heading, Section, Table, Text } from 'pittorica/react';

export default function HeadingPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Heading
        </Heading>
        <Text size="4">
          A typography component for titles and headings, with responsive sizing
          and multiple variants.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Heading } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <Heading size="9">Heading 9</Heading>
          <Heading size="7">Heading 7</Heading>
          <Heading size="5">Heading 5</Heading>
          <Heading size="3" weight="bold">
            Heading 3 Bold
          </Heading>
          <Heading size="6" variant="outline">
            Heading Outline
          </Heading>
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
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;'1' | ... | '9'&gt;</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'6'</Code>
              </Table.Cell>
              <Table.Cell>Responsive font size.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>weight</Table.Cell>
              <Table.Cell>
                <Code>'light' | 'regular' | 'medium' | 'bold'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'bold'</Code>
              </Table.Cell>
              <Table.Cell>Font weight.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>variant</Table.Cell>
              <Table.Cell>
                <Code>'classic' | 'soft' | 'outline'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'classic'</Code>
              </Table.Cell>
              <Table.Cell>The visual style of the heading.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The semantic color of the text.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>as</Table.Cell>
              <Table.Cell>
                <Code>'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'h1'</Code>
              </Table.Cell>
              <Table.Cell>The HTML tag to render.</Table.Cell>
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
