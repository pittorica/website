import {
  Code,
  Flex,
  Heading,
  Section,
  Skeleton,
  Table,
  Text,
} from 'pittorica/react';

export default function SkeletonPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Skeleton
        </Heading>
        <Text size="4">
          Skeleton placeholder for loading states. Provides a visual indication
          that content is being loaded.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Skeleton } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <Skeleton loading={true} width="200px" height="20px" />
          <Skeleton
            loading={true}
            variant="circle"
            width="40px"
            height="40px"
          />
          <Skeleton loading={true} variant="text" width="150px" />
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
              <Table.Cell>loading</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>true</Code>
              </Table.Cell>
              <Table.Cell>
                If true, shows the skeleton. If false, shows the children.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>animated</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>true</Code>
              </Table.Cell>
              <Table.Cell>
                If true, shows the shimmer and pulse animation.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>variant</Table.Cell>
              <Table.Cell>
                <Code>'rect' | 'circle' | 'text'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'rect'</Code>
              </Table.Cell>
              <Table.Cell>The shape of the skeleton.</Table.Cell>
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
