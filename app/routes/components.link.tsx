import {
  Code,
  Flex,
  Heading,
  Link,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function LinkPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Link
        </Heading>
        <Text size="4">A customizable link component for navigation.</Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Link } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="2">
          <Link href="#">Standard Link</Link>
          <Link href="#" underline="hover">
            Link with underline on hover
          </Link>
          <Link href="#" underline="none">
            Link without underline
          </Link>
          <Link href="#" color="crimson">
            Colored Link
          </Link>
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
              <Table.Cell>underline</Table.Cell>
              <Table.Cell>
                <Code>'always' | 'hover' | 'none'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'always'</Code>
              </Table.Cell>
              <Table.Cell>Controls the underline visibility.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'inherit'</Code>
              </Table.Cell>
              <Table.Cell>The color of the link.</Table.Cell>
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
                This component also accepts all standard Text and Box props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
