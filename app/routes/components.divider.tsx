import { Flex, Heading, Section } from 'pittorica/react';

export default function DividerPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Divider
        </Heading>
        <Heading as="p" size="4">
          The Divider component.
        </Heading>
      </Flex>
    </Section>
  );
}
