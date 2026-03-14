import {
  Card,
  Code,
  Flex,
  Heading,
  Inset,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function InsetPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Inset
        </Heading>
        <Text size="4">
          Inset is used to stretch content to the edges of its container,
          typically used within Cards.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Inset } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Card style={{ width: 300 }}>
          <Inset side="top" clip>
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 140,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </Inset>
          <Text as="p" size="3" p="3">
            The image above is wrapped in an Inset component, allowing it to
            bleed to the edges of the card.
          </Text>
        </Card>

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
              <Table.Cell>side</Table.Cell>
              <Table.Cell>
                <Code>'all' | 'x' | 'y' | 'top' | 'bottom'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'all'</Code>
              </Table.Cell>
              <Table.Cell>Which sides should be inset.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>clip</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>true</Code>
              </Table.Cell>
              <Table.Cell>
                If true, clips the content to the parent's border radius.
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
