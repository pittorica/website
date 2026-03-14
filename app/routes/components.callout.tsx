import {
  Callout,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function CalloutPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Callout
        </Heading>
        <Text size="4">
          A component to highlight important information with an optional icon.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Callout } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <Callout color="indigo">
            <Callout.Text>
              Information: You can now use the new Callout component in your
              projects.
            </Callout.Text>
          </Callout>

          <Callout color="crimson" variant="outline">
            <Callout.Text>
              Warning: This action is irreversible. Please proceed with caution.
            </Callout.Text>
          </Callout>

          <Callout color="success" variant="soft">
            <Callout.Text>
              Success: Your changes have been saved successfully.
            </Callout.Text>
          </Callout>
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
                <Code>'soft' | 'outline'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'soft'</Code>
              </Table.Cell>
              <Table.Cell>The visual variant of the callout.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the callout.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>PittoricaScale</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'md'</Code>
              </Table.Cell>
              <Table.Cell>The size of the callout.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>direction</Table.Cell>
              <Table.Cell>
                <Code>'row' | 'column'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'row'</Code>
              </Table.Cell>
              <Table.Cell>The direction of the callout content.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>align</Table.Cell>
              <Table.Cell>
                <Code>'start' | 'center' | 'end'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'start'</Code>
              </Table.Cell>
              <Table.Cell>The alignment of the callout content.</Table.Cell>
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
