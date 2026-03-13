import { Flex, Heading, Section } from 'pittorica/react';

export default function TablePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Table
        </Heading>
        <Heading as="p" size="4">
          The Table component.
        </Heading>
      </Flex>
    </Section>
  );
}
