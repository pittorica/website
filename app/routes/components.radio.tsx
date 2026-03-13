import { Flex, Heading, Section } from 'pittorica/react';

export default function RadioPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Radio
        </Heading>
        <Heading as="p" size="4">
          The Radio component.
        </Heading>
      </Flex>
    </Section>
  );
}
