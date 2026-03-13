import { Flex, Heading, Section } from 'pittorica/react';

export default function ContainerPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Container
        </Heading>
        <Heading as="p" size="4">
          The Container component.
        </Heading>
      </Flex>
    </Section>
  );
}
