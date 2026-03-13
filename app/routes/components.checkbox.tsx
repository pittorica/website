import { Flex, Heading, Section } from 'pittorica/react';

export default function CheckboxPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Checkbox
        </Heading>
        <Heading as="p" size="4">
          The Checkbox component.
        </Heading>
      </Flex>
    </Section>
  );
}
