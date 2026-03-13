import { Flex, Heading, Section } from 'pittorica/react';

export default function DropdownMenuPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          DropdownMenu
        </Heading>
        <Heading as="p" size="4">
          The DropdownMenu component.
        </Heading>
      </Flex>
    </Section>
  );
}
