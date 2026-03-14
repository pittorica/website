import { Code, Flex, Heading, Section, Table, Text } from 'pittorica/react';

export default function CodePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Code
        </Heading>
        <Text size="4">
          A component for displaying inline or multi-line code snippets with
          syntax highlighting.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Code } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <Code>console.log("Hello, World!");</Code>
          <Code color="crimson">npm install pittorica</Code>
          <Code
            language="typescript"
            showLineNumbers
            copyable
            filename="hello.ts"
          >
            {`const hello = () => {
  console.log("Hello from Pittorica!");
};`}
          </Code>
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
              <Table.Cell>language</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The language for syntax highlighting.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>showLineNumbers</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Whether to show line numbers in multi-line blocks.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>filename</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Optional filename to display above the code block.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>copyable</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>Whether to show a copy button.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>PittoricaSize</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The size of the text.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The semantic color of the code component.</Table.Cell>
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
