import { Flex, Heading, Section } from 'pittorica/react';

export default function SelectPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Select
        </Heading>
        <Heading as="p" size="4">
          The Select component.
        </Heading>
      </Flex>
    </Section>
  );
}
