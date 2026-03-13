import { Flex, Heading, Section } from 'pittorica/react';

export default function ChipPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Chip
        </Heading>
        <Heading as="p" size="4">
          The Chip component.
        </Heading>
      </Flex>
    </Section>
  );
}
