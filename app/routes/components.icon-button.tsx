import { IconPlus } from '@tabler/icons-react';

import {
  Code,
  Flex,
  Heading,
  IconButton,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function IconButtonPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          IconButton
        </Heading>
        <Text size="4">
          A button component optimized for displaying a single icon.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { IconButton } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4" wrap="wrap">
          <IconButton variant="filled">
            <IconPlus size={18} />
          </IconButton>
          <IconButton variant="tonal">
            <IconPlus size={18} />
          </IconButton>
          <IconButton variant="outlined">
            <IconPlus size={18} />
          </IconButton>
          <IconButton variant="text">
            <IconPlus size={18} />
          </IconButton>
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
              <Table.Cell>variant</Table.Cell>
              <Table.Cell>
                <Code>
                  'filled' | 'tonal' | 'outlined' | 'elevated' | 'text' |
                  'surface'
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'filled'</Code>
              </Table.Cell>
              <Table.Cell>The visual variant of the button.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'source'</Code>
              </Table.Cell>
              <Table.Cell>The color of the button.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>'1' | '2' | '3' | '4'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'3'</Code>
              </Table.Cell>
              <Table.Cell>The size of the button.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>disabled</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>Whether the button is disabled.</Table.Cell>
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
