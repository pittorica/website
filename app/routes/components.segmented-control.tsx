import { Flex, Heading, Section } from 'pittorica/react';

export default function SegmentedControlPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          SegmentedControl
        </Heading>
        <Heading as="p" size="4">
          The SegmentedControl component.
        </Heading>
      </Flex>
    </Section>
  );
}
