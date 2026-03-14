import { useState } from 'react';

import {
  Checkbox,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Checkbox
        </Heading>
        <Text size="4">
          A control that allows the user to toggle between checked and unchecked
          states.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Checkbox } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Indigo (default)" color="indigo" defaultChecked />
          <Checkbox label="Crimson" color="crimson" defaultChecked />
          <Checkbox label="Disabled" disabled />
          <Checkbox
            label="Controlled"
            checked={checked}
            onChange={(val) => typeof val === 'boolean' && setChecked(val)}
          />
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
              <Table.Cell>label</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The label for the checkbox.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>checked</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The controlled checked state.</Table.Cell>
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
              <Table.Cell>onChange</Table.Cell>
              <Table.Cell>
                <Code>(checked: boolean) =&gt; void</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Callback function called when the state changes.
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
              <Table.Cell>The color of the checkbox.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>disabled</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>Whether the checkbox is disabled.</Table.Cell>
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
