import { Flex, Heading, Section } from 'pittorica/react';

export default function SectionPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Section
        </Heading>
        <Heading as="p" size="4">
          The Section component.
        </Heading>
      </Flex>
    </Section>
  );
}
