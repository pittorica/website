import {
  Code,
  Flex,
  Heading,
  InputOTP,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function InputOTPPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          InputOTP
        </Heading>
        <Text size="4">A customizable, accessible OTP input component.</Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { InputOTP } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex direction="column" gap="4">
          <InputOTP maxLength={6}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </Flex>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Text size="3" mb="2">
          The <Code>InputOTP</Code> component is a wrapper around{' '}
          <Code>input-otp</Code>.
        </Text>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Prop</Table.ColumnHeader>
              <Table.ColumnHeader>Type</Table.ColumnHeader>
              <Table.ColumnHeader>Default</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>maxLength</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The maximum length of the OTP.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>containerClassName</Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>ClassName for the container.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                colSpan={4}
                style={{
                  textAlign: 'center',
                  color: 'var(--pittorica-gray-10)',
                  fontSize: 'var(--pittorica-font-size-2)',
                  padding: 'var(--pittorica-space-4)',
                }}
              >
                This component also accepts all props from input-otp.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
