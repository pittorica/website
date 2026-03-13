import { Flex, Heading, Section } from 'pittorica/react';

export default function InsetPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Inset
        </Heading>
        <Heading as="p" size="4">
          The Inset component.
        </Heading>
      </Flex>
    </Section>
  );
}
