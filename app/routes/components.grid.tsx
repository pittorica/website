import { Flex, Heading, Section } from 'pittorica/react';

export default function GridPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Grid
        </Heading>
        <Heading as="p" size="4">
          The Grid component.
        </Heading>
      </Flex>
    </Section>
  );
}
