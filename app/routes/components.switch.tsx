import { useState } from 'react';

import {
  Code,
  Flex,
  Heading,
  Section,
  Switch,
  Table,
  Text,
} from 'pittorica/react';

export default function SwitchPage() {
  const [checked, setChecked] = useState(false);

  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Switch
        </Heading>
        <Text size="4">
          Switch component for binary toggling. It defaults to a button tag with
          an interactive thumb.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Switch } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <Flex align="center" gap="2">
            <Switch checked={checked} onCheckedChange={setChecked} />
            <Text>Checked: {checked ? 'Yes' : 'No'}</Text>
          </Flex>
          <Flex align="center" gap="2">
            <Switch defaultChecked color="indigo" />
            <Text>Colored (Indigo)</Text>
          </Flex>
          <Flex align="center" gap="2">
            <Switch disabled />
            <Text>Disabled</Text>
          </Flex>
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
              <Table.Cell>checked</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                The controlled checked state of the switch.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>defaultChecked</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The initial checked state.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onCheckedChange</Table.Cell>
              <Table.Cell>
                <Code>(checked: boolean) =&gt; void</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Callback called when the checked state changes.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'source'</Code>
              </Table.Cell>
              <Table.Cell>The color of the switch when checked.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>disabled</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>Whether the switch is disabled.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>name</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                The name of the switch for form submission.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>required</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Whether the switch is required for form submission.
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
