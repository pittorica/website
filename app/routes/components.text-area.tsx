import { Flex, Heading, Section } from 'pittorica/react';

export default function TextAreaPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          TextArea
        </Heading>
        <Heading as="p" size="4">
          The TextArea component.
        </Heading>
      </Flex>
    </Section>
  );
}
