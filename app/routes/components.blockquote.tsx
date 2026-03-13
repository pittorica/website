import { Flex, Heading, Section } from 'pittorica/react';

export default function BlockquotePage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Blockquote
        </Heading>
        <Heading as="p" size="4">
          The Blockquote component.
        </Heading>
      </Flex>
    </Section>
  );
}
