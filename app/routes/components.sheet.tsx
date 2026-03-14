import { useState } from 'react';

import {
  Button,
  Code,
  Flex,
  Heading,
  Section,
  Sheet,
  Table,
  Text,
} from 'pittorica/react';

export default function SheetPage() {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Sheet
        </Heading>
        <Text size="4">
          Sheet component following MD3 guidelines for modal panels. Displays a
          side panel for contextual content.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Sheet } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4">
          <Button onClick={() => setOpen(true)}>Open Sheet</Button>
          <Sheet
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Example Sheet"
          >
            <Flex direction="column" gap="4" p="4">
              <Text>This is a sheet component.</Text>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Flex>
          </Sheet>
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
              <Table.Cell>isOpen</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Whether the sheet is open.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onClose</Table.Cell>
              <Table.Cell>
                <Code>() =&gt; void</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Callback called when the sheet should close.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>side</Table.Cell>
              <Table.Cell>
                <Code>'top' | 'right' | 'bottom' | 'left'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'right'</Code>
              </Table.Cell>
              <Table.Cell>
                The direction from which the sheet appears.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>title</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                An optional title displayed in the sheet header.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>appearance</Table.Cell>
              <Table.Cell>
                <Code>'light' | 'dark' | 'inherit'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'inherit'</Code>
              </Table.Cell>
              <Table.Cell>The theme appearance of the sheet.</Table.Cell>
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
