import { Code, Flex, Heading, Section, Table, Text } from 'pittorica/react';

export default function SectionPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Section
        </Heading>
        <Text size="4">
          A high-level layout component to group related content.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Section } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Section
          size="1"
          style={{ backgroundColor: 'var(--pittorica-gray-2)' }}
        >
          <Text>Section Size 1</Text>
        </Section>
        <Section
          size="2"
          style={{ backgroundColor: 'var(--pittorica-gray-3)' }}
        >
          <Text>Section Size 2</Text>
        </Section>
        <Section
          size="3"
          style={{ backgroundColor: 'var(--pittorica-gray-4)' }}
        >
          <Text>Section Size 3</Text>
        </Section>

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
                <Code>'1' | '2' | '3' | '4'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'3'</Code>
              </Table.Cell>
              <Table.Cell>Vertical padding size.</Table.Cell>
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
