import { Flex, Heading, Section } from 'pittorica/react';

export default function CheckboxCardPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          CheckboxCard
        </Heading>
        <Heading as="p" size="4">
          The CheckboxCard component.
        </Heading>
      </Flex>
    </Section>
  );
}
