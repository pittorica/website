import { Flex, Heading, Section } from 'pittorica/react';

export default function AspectRatioPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          AspectRatio
        </Heading>
        <Heading as="p" size="4">
          The AspectRatio component.
        </Heading>
      </Flex>
    </Section>
  );
}
