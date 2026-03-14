import {
  Badge,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function BadgePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Badge
        </Heading>
        <Text size="4">
          A small visual indicator for notifications, status, or counts.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Badge } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="6" wrap="wrap" align="center">
          <Badge badgeContent={4} color="indigo">
            <div
              style={{
                width: 40,
                height: 40,
                background: 'var(--pittorica-gray-4)',
                borderRadius: 'var(--pittorica-radius-medium)',
              }}
            />
          </Badge>
          <Badge badgeContent={99} color="crimson" max={10}>
            <div
              style={{
                width: 40,
                height: 40,
                background: 'var(--pittorica-gray-4)',
                borderRadius: 'var(--pittorica-radius-medium)',
              }}
            />
          </Badge>
          <Badge variant="dot" color="success">
            <div
              style={{
                width: 40,
                height: 40,
                background: 'var(--pittorica-gray-4)',
                borderRadius: 'var(--pittorica-radius-medium)',
              }}
            />
          </Badge>
          <Badge badgeContent="New" color="amber">
            <div
              style={{
                width: 40,
                height: 40,
                background: 'var(--pittorica-gray-4)',
                borderRadius: 'var(--pittorica-radius-medium)',
              }}
            />
          </Badge>
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
              <Table.Cell>badgeContent</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The content to display inside the badge.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>variant</Table.Cell>
              <Table.Cell>
                <Code>'standard' | 'dot'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'standard'</Code>
              </Table.Cell>
              <Table.Cell>The visual variant of the badge.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the badge.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>invisible</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>If true, the badge will be hidden.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>max</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>99</Code>
              </Table.Cell>
              <Table.Cell>
                Max value to display. If badgeContent is a number and greater
                than max, it shows "max+".
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
