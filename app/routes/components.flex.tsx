import { Flex, Heading, Section } from 'pittorica/react';

export default function FlexPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Flex
        </Heading>
        <Heading as="p" size="4">
          The Flex component.
        </Heading>
      </Flex>
    </Section>
  );
}
