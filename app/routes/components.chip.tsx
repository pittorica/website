import {
  Chip,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function ChipPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Chip
        </Heading>
        <Text size="4">
          A compact element that represents an input, attribute, or action.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Chip } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4" wrap="wrap">
          <Chip variant="filled" color="indigo">
            Filled
          </Chip>
          <Chip variant="tonal" color="crimson">
            Tonal
          </Chip>
          <Chip variant="outlined" color="success">
            Outlined
          </Chip>
          <Chip variant="tonal" color="amber">
            Tonal 2
          </Chip>
          <Chip
            variant="filled"
            color="indigo"
            onDelete={() => console.log('delete')}
          >
            Deletable
          </Chip>
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
                <Code>PittoricaVariant</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'filled'</Code>
              </Table.Cell>
              <Table.Cell>The visual variant of the chip.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>PittoricaSize</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'3'</Code>
              </Table.Cell>
              <Table.Cell>The size of the chip.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the chip.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>startDecorator</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Element to display at the start of the chip.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>endDecorator</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Element to display at the end of the chip.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onDelete</Table.Cell>
              <Table.Cell>
                <Code>() =&gt; void</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Callback function called when the delete icon is clicked.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>deleteIcon</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Custom icon for the delete button.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>appearance</Table.Cell>
              <Table.Cell>
                <Code>'light' | 'dark' | 'inherit'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'inherit'</Code>
              </Table.Cell>
              <Table.Cell>The theme appearance of the chip.</Table.Cell>
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
