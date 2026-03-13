import { Flex, Heading, Section } from 'pittorica/react';

export default function SkeletonPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          Skeleton
        </Heading>
        <Heading as="p" size="4">
          The Skeleton component.
        </Heading>
      </Flex>
    </Section>
  );
}
