import {
  Code,
  DataList,
  Divider,
  Flex,
  Heading,
  Section,
  Text,
} from 'pittorica/react';

export default function DesignTokensPage() {
  return (
    <Flex direction="column" gap="6">
      <Section>
        <Flex direction="column" gap="2">
          <Heading size="8" weight="bold">
            Design Tokens
          </Heading>
          <Heading as="p" size="4" weight="regular" style={{ opacity: 0.8 }}>
            Pure CSS variables at the heart of everything.
          </Heading>
        </Flex>
      </Section>

      <Divider variant="wave" />

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            What are Design Tokens?
          </Heading>
          <Text as="p">
            Pittorica exposes its entire design system via CSS custom
            properties. This allows you to use the framework's values directly
            in your own styles, ensuring consistency even outside of React
            components.
          </Text>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Common Tokens
          </Heading>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-source-color</Code>
              </DataList.Label>
              <DataList.Value>
                The base color for the dynamic theme.
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-radius-md</Code>
              </DataList.Label>
              <DataList.Value>
                The standard painterly border radius.
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-heading</Code>
              </DataList.Label>
              <DataList.Value>The primary heading font family.</DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Usage in CSS
          </Heading>
          <Text as="p">
            You can access these tokens in any CSS file after importing the core
            styles:
          </Text>
          <Code language="css">{`
.my-custom-component {
  background-color: var(--pittorica-indigo-3);
  border: 1px solid var(--pittorica-indigo-6);
  border-radius: var(--pittorica-radius-lg);
  padding: var(--pittorica-space-4);
}
`}</Code>
        </Flex>
      </Section>
    </Flex>
  );
}
