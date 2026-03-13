import { Flex, Heading, Section } from 'pittorica/react';

export default function PopoverPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Popover
        </Heading>
        <Heading as="p" size="4">
          The Popover component.
        </Heading>
      </Flex>
    </Section>
  );
}
