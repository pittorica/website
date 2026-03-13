import { Flex, Heading, Section } from 'pittorica/react';

export default function SheetPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Sheet
        </Heading>
        <Heading as="p" size="4">
          The Sheet component.
        </Heading>
      </Flex>
    </Section>
  );
}
