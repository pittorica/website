import {
  Button,
  Code,
  Flex,
  Heading,
  Popover,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function PopoverPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Popover
        </Heading>
        <Text size="4">
          A floating panel that appears when a trigger element is clicked.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Popover } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Popover.Root>
          <Popover.Trigger>
            <Button>Click me</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Flex direction="column" gap="2" p="3">
              <Text weight="bold">Popover Content</Text>
              <Text size="2">This is some content inside a popover.</Text>
            </Flex>
          </Popover.Content>
        </Popover.Root>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>

        <Heading size="5" weight="bold" mt="4">
          Popover.Root
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
              <Table.Cell>placement</Table.Cell>
              <Table.Cell>
                <Code>Placement</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'bottom'</Code>
              </Table.Cell>
              <Table.Cell>The preferred placement of the popover.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>appearance</Table.Cell>
              <Table.Cell>
                <Code>'light' | 'dark' | 'inherit'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'inherit'</Code>
              </Table.Cell>
              <Table.Cell>The theme appearance of the popover.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>

        <Heading size="5" weight="bold" mt="4">
          Popover.Content
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
              <Table.Cell
                colSpan={4}
                style={{
                  textAlign: 'center',
                  color: 'var(--pittorica-gray-10)',
                  fontSize: 'var(--pittorica-font-size-2)',
                  padding: 'var(--pittorica-space-4)',
                }}
              >
                This component accepts all standard Box props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
