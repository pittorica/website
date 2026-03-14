import {
  AspectRatio,
  Box,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function AspectRatioPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          AspectRatio
        </Heading>
        <Text size="4">
          Component to maintain a consistent width-to-height ratio for its
          children.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { AspectRatio } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4" direction="column" style={{ maxWidth: '400px' }}>
          <Text size="2" weight="bold">
            16 / 9 Ratio
          </Text>
          <AspectRatio ratio={16 / 9}>
            <Box
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--pittorica-indigo-9)',
                borderRadius: 'var(--pittorica-radius-medium)',
              }}
            />
          </AspectRatio>

          <Text size="2" weight="bold" mt="4">
            1 / 1 Ratio
          </Text>
          <Box style={{ width: '200px' }}>
            <AspectRatio ratio={1}>
              <Box
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--pittorica-teal-9)',
                  borderRadius: 'var(--pittorica-radius-medium)',
                }}
              />
            </AspectRatio>
          </Box>
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
              <Table.Cell>ratio</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>1 / 1</Code>
              </Table.Cell>
              <Table.Cell>The desired aspect ratio.</Table.Cell>
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
