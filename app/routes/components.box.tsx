import { Flex, Heading, Section } from 'pittorica/react';

export default function BoxPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Box
        </Heading>
        <Heading as="p" size="4">
          The Box component.
        </Heading>
      </Flex>
    </Section>
  );
}
