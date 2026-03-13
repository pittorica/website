import { Flex, Heading, Section } from 'pittorica/react';

export default function DataListPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          DataList
        </Heading>
        <Heading as="p" size="4">
          The DataList component.
        </Heading>
      </Flex>
    </Section>
  );
}
