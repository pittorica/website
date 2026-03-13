import { Button, Flex, Heading, Section } from 'pittorica/react';

export default function ButtonPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Button
        </Heading>
        <Heading as="p" size="4">
          Interactive button component with multiple variants.
        </Heading>
        <Flex gap="4">
          <Button variant="filled">Filled</Button>
          <Button variant="tonal">Tonal</Button>
          <Button variant="outlined">Outlined</Button>
        </Flex>
      </Flex>
    </Section>
  );
}
