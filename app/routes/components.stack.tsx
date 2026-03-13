import { Flex, Heading, Section } from 'pittorica/react';

export default function StackPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Stack
        </Heading>
        <Heading as="p" size="4">
          The Stack component.
        </Heading>
      </Flex>
    </Section>
  );
}
