import { Flex, Heading, Section } from 'pittorica/react';

export default function AvatarPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Avatar
        </Heading>
        <Heading as="p" size="4">
          The Avatar component.
        </Heading>
      </Flex>
    </Section>
  );
}
