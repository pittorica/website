import {
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function ContainerPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Container
        </Heading>
        <Text size="4">
          A component to center and constrain content horizontally within a
          layout.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Container } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Container
          maxWidth="sm"
          style={{
            backgroundColor: 'var(--pittorica-indigo-2)',
            border: '1px solid var(--pittorica-indigo-6)',
            padding: '1rem',
          }}
        >
          Small Container (max-width: sm)
        </Container>
        <Container
          maxWidth="md"
          style={{
            backgroundColor: 'var(--pittorica-teal-2)',
            border: '1px solid var(--pittorica-teal-6)',
            padding: '1rem',
          }}
        >
          Medium Container (max-width: md)
        </Container>
        <Container
          maxWidth="lg"
          style={{
            backgroundColor: 'var(--pittorica-amber-2)',
            border: '1px solid var(--pittorica-amber-6)',
            padding: '1rem',
          }}
        >
          Large Container (max-width: lg)
        </Container>

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
              <Table.Cell>maxWidth</Table.Cell>
              <Table.Cell>
                <Code>'xs' | 'sm' | 'md' | 'lg' | 'xl' | false</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'lg'</Code>
              </Table.Cell>
              <Table.Cell>
                The maximum width of the container. Use false for a fluid width.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>fixed</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Whether the container adapts its max-width to the current
                breakpoint instead of being fluid.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>disableGutters</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Removes the default left and right padding.
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
