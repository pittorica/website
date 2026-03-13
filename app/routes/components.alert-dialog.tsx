import { Flex, Heading, Section } from 'pittorica/react';

export default function AlertDialogPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          AlertDialog
        </Heading>
        <Heading as="p" size="4">
          The AlertDialog component.
        </Heading>
      </Flex>
    </Section>
  );
}
