import {
  Box,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Tabs,
  Text,
} from 'pittorica/react';

export default function TabsPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Tabs
        </Heading>
        <Text size="4">
          Tabs component for organizing content into multiple views that can be
          toggled via a navigation bar.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Tabs } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Tabs.Root defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
          </Tabs.List>
          <Box mt="4">
            <Tabs.Content value="tab1">
              <Text>Manage your account settings here.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Text>Change your password here.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <Text>Configure your preferences here.</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Text weight="bold">Tabs.Root</Text>
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
              <Table.Cell>defaultValue</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The initial tab value.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>value</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The controlled value of the active tab.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onValueChange</Table.Cell>
              <Table.Cell>
                <Code>(value: string) =&gt; void</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Callback when the active tab changes.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the tabs.</Table.Cell>
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
                All Tabs components also accept standard Box props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
