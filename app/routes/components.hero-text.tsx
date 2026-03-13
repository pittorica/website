import { Flex, Heading, Section } from 'pittorica/react';

export default function HeroTextPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          HeroText
        </Heading>
        <Heading as="p" size="4">
          The HeroText component.
        </Heading>
      </Flex>
    </Section>
  );
}
