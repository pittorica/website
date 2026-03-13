import { Flex, Heading, Section } from 'pittorica/react';

export default function KbdPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Kbd
        </Heading>
        <Heading as="p" size="4">
          The Kbd component.
        </Heading>
      </Flex>
    </Section>
  );
}
