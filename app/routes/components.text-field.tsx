import { IconMail, IconSearch } from '@tabler/icons-react';

import {
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
  TextField,
} from 'pittorica/react';

export default function TextFieldPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          TextField
        </Heading>
        <Text size="4">
          A single-line text input component with support for icons, labels, and
          helper text.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { TextField } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex
          direction="column"
          gap="4"
          width="100%"
          style={{ maxWidth: '400px' }}
        >
          <TextField.Root
            label="Email"
            helperText="We'll never share your email."
          >
            <TextField.Slot>
              <IconMail size={18} />
            </TextField.Slot>
            <TextField.Input placeholder="Enter your email" type="email" />
          </TextField.Root>

          <TextField.Root label="Search">
            <TextField.Input placeholder="Search components..." />
            <TextField.Slot>
              <IconSearch size={18} />
            </TextField.Slot>
          </TextField.Root>

          <TextField.Root label="Error State" error helperText="Invalid input.">
            <TextField.Input placeholder="Type something..." />
          </TextField.Root>
        </Flex>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Heading size="4" weight="bold" mt="4">
          TextField.Root
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
              <Table.Cell>The label for the text field.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>helperText</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                The helper text displayed below the text field.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>error</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Whether the text field is in an error state.
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
              <Table.Cell>The semantic color of the text field.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>'sm' | 'md' | 'lg'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'sm'</Code>
              </Table.Cell>
              <Table.Cell>The size of the text field.</Table.Cell>
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
          TextField.Input
        </Heading>
        <Table.Root>
          <Table.Body>
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
                This component accepts all standard HTML input props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
