import {
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
  TextArea,
} from 'pittorica/react';

export default function TextAreaPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          TextArea
        </Heading>
        <Text size="4">
          A multiline text input component with automatic resizing support.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { TextArea } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex
          direction="column"
          gap="4"
          width="100%"
          style={{ maxWidth: '400px' }}
        >
          <TextArea.Root
            label="Description"
            helperText="Enter a brief description."
          >
            <TextArea.Content placeholder="Type something..." />
          </TextArea.Root>

          <TextArea.Root
            label="Auto-resize"
            helperText="This textarea grows with its content."
          >
            <TextArea.Content autoResize placeholder="Type many lines..." />
          </TextArea.Root>

          <TextArea.Root
            label="Error State"
            error
            helperText="This field is required."
          >
            <TextArea.Content placeholder="Type something..." />
          </TextArea.Root>
        </Flex>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Heading size="4" weight="bold" mt="4">
          TextArea.Root
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
              <Table.Cell>The label for the textarea.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>helperText</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                The helper text displayed below the textarea.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>error</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Whether the textarea is in an error state.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The semantic color of the textarea.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>'sm' | 'md' | 'lg'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'sm'</Code>
              </Table.Cell>
              <Table.Cell>The size of the textarea.</Table.Cell>
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
          TextArea.Content
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
              <Table.Cell>autoResize</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Whether the textarea should automatically resize its height
                based on content.
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
                This component also accepts all standard HTML textarea props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
