import { Flex, Heading, Section } from 'pittorica/react';

export default function CodePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Code
        </Heading>
        <Heading as="p" size="4">
          The Code component.
        </Heading>
      </Flex>
    </Section>
  );
}
