import { Flex, Heading, Section } from 'pittorica/react';

export default function DialogPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Dialog
        </Heading>
        <Heading as="p" size="4">
          The Dialog component.
        </Heading>
      </Flex>
    </Section>
  );
}
