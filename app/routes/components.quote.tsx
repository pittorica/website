import { Flex, Heading, Section } from 'pittorica/react';

export default function QuotePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Quote
        </Heading>
        <Heading as="p" size="4">
          The Quote component.
        </Heading>
      </Flex>
    </Section>
  );
}
