import {
  Box,
  Code,
  ContextMenu,
  ContextMenuItem,
  ContextMenuSub,
  Divider,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function ContextMenuPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          ContextMenu
        </Heading>
        <Text size="4">
          A menu that appears upon right-clicking a trigger element.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { ContextMenu, ContextMenuItem, ContextMenuSub } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4">
          <ContextMenu
            itemCount={4}
            trigger={
              <Box
                p="9"
                style={{
                  border: '2px dashed var(--pittorica-slate-3)',
                  borderRadius: 'var(--pittorica-radius-3)',
                  backgroundColor: 'var(--pittorica-surface-1)',
                  cursor: 'context-menu',
                }}
              >
                <Text>Right-click me</Text>
              </Box>
            }
          >
            <ContextMenuItem index={0} onClick={() => alert('Edit')}>
              Edit
            </ContextMenuItem>
            <ContextMenuItem index={1} onClick={() => alert('Duplicate')}>
              Duplicate
            </ContextMenuItem>
            <Divider />
            <ContextMenuSub label="Share" index={2} itemCount={2}>
              <ContextMenuItem index={0}>Email</ContextMenuItem>
              <ContextMenuItem index={1}>Copy link</ContextMenuItem>
            </ContextMenuSub>
            <Divider />
            <ContextMenuItem
              index={3}
              color="red"
              onClick={() => alert('Delete')}
            >
              Delete
            </ContextMenuItem>
          </ContextMenu>
        </Flex>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Heading size="4" weight="bold" mt="4">
          ContextMenu
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
              <Table.Cell>trigger</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                The element that triggers the context menu.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>itemCount</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Total number of top-level items in the menu (used for
                positioning).
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

        <Heading size="4" weight="bold" mt="4">
          ContextMenuItem
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
              <Table.Cell>index</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The index of the item in the list.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onClick</Table.Cell>
              <Table.Cell>
                <Code>{'() => void'}</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Callback function called when the item is clicked.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
