import { Flex, Heading, Section } from 'pittorica/react';

export default function HeadingPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Heading
        </Heading>
        <Heading as="p" size="4">
          The Heading component.
        </Heading>
      </Flex>
    </Section>
  );
}
