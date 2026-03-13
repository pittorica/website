import { Flex, Heading, Section } from 'pittorica/react';

export default function LinkPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Link
        </Heading>
        <Heading as="p" size="4">
          The Link component.
        </Heading>
      </Flex>
    </Section>
  );
}
