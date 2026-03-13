import { Flex, Heading, Section } from 'pittorica/react';

export default function CardPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Card
        </Heading>
        <Heading as="p" size="4">
          The Card component.
        </Heading>
      </Flex>
    </Section>
  );
}
