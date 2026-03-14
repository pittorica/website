import {
  Avatar,
  Code,
  Flex,
  Heading,
  HoverCard,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function HoverCardPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          HoverCard
        </Heading>
        <Text size="4">
          A card that appears when hovering over a trigger element, typically
          used for providing additional information.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { HoverCard } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <HoverCard
          renderTrigger={({ ref }) => (
            <Text
              ref={ref}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              @pittorica
            </Text>
          )}
        >
          <Flex gap="4">
            <Avatar
              src="https://github.com/pittorica.png"
              fallback="P"
              size="5"
            />
            <Flex direction="column" gap="1">
              <Heading size="3" weight="bold">
                Pittorica
              </Heading>
              <Text size="2" color="gray">
                @pittorica
              </Text>
              <Text size="2" mt="2">
                A design system foundation for building beautiful, accessible
                React applications.
              </Text>
            </Flex>
          </Flex>
        </HoverCard>

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
              <Table.Cell>renderTrigger</Table.Cell>
              <Table.Cell>
                <Code>(props: &#123; ref: Ref &#125;) =&gt; ReactNode</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                A function that returns the trigger element, receiving the ref.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>openDelay</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>500</Code>
              </Table.Cell>
              <Table.Cell>
                The duration from when the mouse enters the trigger until the
                card opens.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>closeDelay</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>300</Code>
              </Table.Cell>
              <Table.Cell>
                The duration from when the mouse leaves the trigger or card
                until it closes.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
