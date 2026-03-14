import {
  Box,
  Code,
  Flex,
  Grid,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function GridPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Grid
        </Heading>
        <Text size="4">
          A layout component for creating two-dimensional grid layouts using CSS
          Grid.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Grid } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Grid columns="3" gap="4">
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-teal-3)',
            }}
          >
            1
          </Box>
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-teal-4)',
            }}
          >
            2
          </Box>
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-teal-5)',
            }}
          >
            3
          </Box>
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-teal-6)',
            }}
          >
            4
          </Box>
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-teal-7)',
            }}
          >
            5
          </Box>
          <Box
            style={{
              padding: '1rem',
              backgroundColor: 'var(--pittorica-teal-8)',
            }}
          >
            6
          </Box>
        </Grid>

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
              <Table.Cell>columns</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaGridRepeat&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Number of columns in the grid.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>rows</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaGridRepeat&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Number of rows in the grid.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>gap</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaSpace&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Space between grid items (both rows and columns).
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>flow</Table.Cell>
              <Table.Cell>
                <Code>
                  PittoricaResponsive&lt;'row' | 'column' | 'dense' |
                  'row-dense' | 'column-dense'&gt;
                </Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'row'</Code>
              </Table.Cell>
              <Table.Cell>
                Controls how the auto-placement algorithm works.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>align</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaGridAlign&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Alignment of items along the block axis.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>justify</Table.Cell>
              <Table.Cell>
                <Code>PittoricaResponsive&lt;PittoricaGridJustify&gt;</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Alignment of items along the inline axis.</Table.Cell>
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
                This component also accepts all standard Box props (except
                'display', which is forced to 'grid').
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
