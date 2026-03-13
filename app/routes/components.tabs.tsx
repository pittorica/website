import { Flex, Heading, Section } from 'pittorica/react';

export default function TabsPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Tabs
        </Heading>
        <Heading as="p" size="4">
          The Tabs component.
        </Heading>
      </Flex>
    </Section>
  );
}
