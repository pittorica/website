import {
  Avatar,
  Code,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function AvatarPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Avatar
        </Heading>
        <Text size="4">
          Avatar component with automatic fallback handling for profile images
          and initials.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { Avatar } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4" align="center">
          <Avatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&dpr=2&q=80"
            alt="User avatar"
            fallback="JD"
          />
          <Avatar fallback="JD" color="orange" />
          <Avatar fallback="AB" color="crimson" radius="medium" />
          <Avatar fallback="CD" size="2" />
          <Avatar fallback="EF" size="6" />
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
              <Table.Cell>The alternative text for the image.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>fallback</Table.Cell>
              <Table.Cell>
                <Code>ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Content to show if the image fails to load.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>
                <Code>PittoricaSize</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'3'</Code>
              </Table.Cell>
              <Table.Cell>The size of the avatar.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>radius</Table.Cell>
              <Table.Cell>
                <Code>PittoricaRadius</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'full'</Code>
              </Table.Cell>
              <Table.Cell>The border radius of the avatar.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>color</Table.Cell>
              <Table.Cell>
                <Code>PittoricaColor</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'indigo'</Code>
              </Table.Cell>
              <Table.Cell>The color of the fallback background.</Table.Cell>
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
