import { useState } from 'react';

import {
  Code,
  Flex,
  Heading,
  Section,
  Slider,
  Table,
  Text,
} from 'pittorica/react';

export default function SliderPage() {
  const [value, setValue] = useState(50);

  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Slider
        </Heading>
        <Text size="4">
          Slider component for numeric input via dragging. Allows users to
          select a value from a range.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Slider } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="6" style={{ width: '300px' }}>
          <Flex direction="column" gap="2">
            <Text>Value: {value}</Text>
            <Slider value={value} onValueChange={setValue} />
          </Flex>
          <Flex direction="column" gap="2">
            <Text>With Marks</Text>
            <Slider defaultValue={30} step={10} marks />
          </Flex>
          <Flex direction="column" gap="2">
            <Text>Colored (Crimson)</Text>
            <Slider defaultValue={70} color="crimson" />
          </Flex>
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
              <Table.Cell>value</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The controlled value of the slider.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>defaultValue</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The default value of the slider.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>min</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>0</Code>
              </Table.Cell>
              <Table.Cell>The minimum value of the slider.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>max</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>100</Code>
              </Table.Cell>
              <Table.Cell>The maximum value of the slider.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>step</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>1</Code>
              </Table.Cell>
              <Table.Cell>The step increment of the slider.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>onValueChange</Table.Cell>
              <Table.Cell>
                <Code>(value: number) =&gt; void</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Callback called when the value changes.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the slider track and thumb.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>marks</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Whether to display tick marks on the track.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>disabled</Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>Whether the slider is disabled.</Table.Cell>
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
