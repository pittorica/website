import { Flex, Heading, Section } from 'pittorica/react';

export default function InputOTPPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          InputOTP
        </Heading>
        <Heading as="p" size="4">
          The InputOTP component.
        </Heading>
      </Flex>
    </Section>
  );
}
