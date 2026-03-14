import {
  Button,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
  Tooltip,
} from 'pittorica/react';

export default function TooltipPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Tooltip
        </Heading>
        <Text size="4">
          A floating label that provides additional information when an element
          is hovered or focused.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Tooltip } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4">
          <Tooltip content="Add to library">
            <Button variant="outlined">Hover me</Button>
          </Tooltip>

          <Tooltip content="Settings" side="bottom">
            <Button variant="tonal">Bottom tooltip</Button>
          </Tooltip>
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
              <Table.Cell>content</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                The content to display inside the tooltip.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>side</Table.Cell>
              <Table.Cell>
                <Code>'top' | 'right' | 'bottom' | 'left'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'top'</Code>
              </Table.Cell>
              <Table.Cell>
                The side of the trigger where the tooltip should appear.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>openDelay</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>700</Code>
              </Table.Cell>
              <Table.Cell>
                The delay in milliseconds before the tooltip opens.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>closeDelay</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>300</Code>
              </Table.Cell>
              <Table.Cell>
                The delay in milliseconds before the tooltip closes.
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
