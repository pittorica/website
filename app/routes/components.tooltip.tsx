import { Flex, Heading, Section } from 'pittorica/react';

export default function TooltipPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Tooltip
        </Heading>
        <Heading as="p" size="4">
          The Tooltip component.
        </Heading>
      </Flex>
    </Section>
  );
}
