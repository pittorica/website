import { useState } from 'react';

import {
  Button,
  Code,
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Dialog
        </Heading>
        <Text size="4">
          A modal window that appears on top of the main content.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Dialog, DialogTitle, DialogDescription, DialogActions } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4">
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a standard dialog component with a title, description and
              actions.
            </DialogDescription>
            <DialogActions>
              <Button variant="text" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="tonal" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
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
              <Table.Cell>open</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Whether the dialog is open.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onClose</Table.Cell>
              <Table.Cell>
                <Code>{'() => void'}</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Callback function called when the dialog is closed.
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
              <Table.Cell>The theme appearance of the dialog.</Table.Cell>
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
