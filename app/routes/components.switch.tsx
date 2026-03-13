import { Flex, Heading, Section } from 'pittorica/react';

export default function SwitchPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Switch
        </Heading>
        <Heading as="p" size="4">
          The Switch component.
        </Heading>
      </Flex>
    </Section>
  );
}
