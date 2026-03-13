import { Flex, Heading, Section } from 'pittorica/react';

export default function ProgressPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Progress
        </Heading>
        <Heading as="p" size="4">
          The Progress component.
        </Heading>
      </Flex>
    </Section>
  );
}
