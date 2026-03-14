import {
  Box,
  Carousel,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function CarouselPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Carousel
        </Heading>
        <Text size="4">
          A component for navigating through a collection of images or content.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Carousel } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Box style={{ width: '100%', maxWidth: 600 }}>
          <Carousel.Root>
            <Carousel.Item
              src="/static/gallery/jc-gellidon-vP3ORiYUBTY-unsplash.jpg"
              alt="Gallery image 1"
            >
              <Carousel.Description>Beautiful Landscape 1</Carousel.Description>
            </Carousel.Item>
            <Carousel.Item
              src="/static/gallery/john-zhou-o_u0XTbvrPc-unsplash.jpg"
              alt="Gallery image 2"
            >
              <Carousel.Description>Beautiful Landscape 2</Carousel.Description>
            </Carousel.Item>
            <Carousel.Item
              src="/static/gallery/julien-BAR9_WJTcNI-unsplash.jpg"
              alt="Gallery image 3"
            >
              <Carousel.Description>Beautiful Landscape 3</Carousel.Description>
            </Carousel.Item>
          </Carousel.Root>
        </Box>

        <Heading size="6" weight="bold" mt="6">
          API Reference (Carousel.Root)
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
              <Table.Cell>defaultIndex</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>0</Code>
              </Table.Cell>
              <Table.Cell>The initial slide index.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>appearance</Table.Cell>
              <Table.Cell>
                <Code>'light' | 'dark' | 'inherit'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'inherit'</Code>
              </Table.Cell>
              <Table.Cell>
                The theme appearance of the carousel controls.
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

        <Heading size="6" weight="bold" mt="6">
          API Reference (Carousel.Item)
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
              <Table.Cell>src</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The source URL of the image.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>alt</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The alt text for the image.</Table.Cell>
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
