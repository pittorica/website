import { Flex, Heading, Section } from 'pittorica/react';

export default function HoverCardPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          HoverCard
        </Heading>
        <Heading as="p" size="4">
          The HoverCard component.
        </Heading>
      </Flex>
    </Section>
  );
}
