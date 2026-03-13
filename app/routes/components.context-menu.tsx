import { Flex, Heading, Section } from 'pittorica/react';

export default function ContextMenuPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          ContextMenu
        </Heading>
        <Heading as="p" size="4">
          The ContextMenu component.
        </Heading>
      </Flex>
    </Section>
  );
}
