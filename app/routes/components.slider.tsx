import { Flex, Heading, Section } from 'pittorica/react';

export default function SliderPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Slider
        </Heading>
        <Heading as="p" size="4">
          The Slider component.
        </Heading>
      </Flex>
    </Section>
  );
}
