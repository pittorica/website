import { Flex, Heading, Section } from 'pittorica/react';

export default function TextFieldPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          TextField
        </Heading>
        <Heading as="p" size="4">
          The TextField component.
        </Heading>
      </Flex>
    </Section>
  );
}
