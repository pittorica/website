import { Flex, Heading, Section } from 'pittorica/react';

export default function CarouselPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Carousel
        </Heading>
        <Heading as="p" size="4">
          The Carousel component.
        </Heading>
      </Flex>
    </Section>
  );
}
