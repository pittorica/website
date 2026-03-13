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
            Colors
          </Heading>
          <Text as="p">
            Pittorica uses a dynamic color system. Semantic tokens automatically
            adapt to the current appearance (light/dark).
          </Text>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-white</Code>
              </DataList.Label>
              <DataList.Value>The primary light base color.</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-black</Code>
              </DataList.Label>
              <DataList.Value>The primary dark base color.</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-source-color</Code>
              </DataList.Label>
              <DataList.Value>
                The base color driving the dynamic theme.
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-surface-[0-9]</Code>
              </DataList.Label>
              <DataList.Value>
                Layered surface colors based on the source color.
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-on-surface-[0-9]</Code>
              </DataList.Label>
              <DataList.Value>
                High-contrast text/icon colors for each surface level.
              </DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Typography
          </Heading>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-family</Code>
              </DataList.Label>
              <DataList.Value>The base interface font stack.</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-heading</Code>
              </DataList.Label>
              <DataList.Value>The primary font for headings.</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-code</Code>
              </DataList.Label>
              <DataList.Value>
                The monospace stack for code and UI elements.
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-size-[1-9]</Code>
              </DataList.Label>
              <DataList.Value>
                The 9-step responsive typographic scale.
              </DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Layout & Spacing
          </Heading>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-space-[0-9]</Code>
              </DataList.Label>
              <DataList.Value>
                The 10-step proportional spacing scale (4px base).
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-bp-[xs-xl]</Code>
              </DataList.Label>
              <DataList.Value>
                Responsive breakpoints for containers and grids.
              </DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Visual Style
          </Heading>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-radius-[none-full]</Code>
              </DataList.Label>
              <DataList.Value>
                The "painterly" curvature tokens for components.
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-shadow-[1-9]</Code>
              </DataList.Label>
              <DataList.Value>
                Elevation tokens that adapt to light/dark modes.
              </DataList.Value>
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
  background-color: var(--pittorica-surface-1);
  border: 1px solid var(--pittorica-slate-3);
  border-radius: var(--pittorica-radius-medium);
  padding: var(--pittorica-space-4);
  color: var(--pittorica-on-surface-1);
}
`}</Code>
        </Flex>
      </Section>
    </Flex>
  );
}
