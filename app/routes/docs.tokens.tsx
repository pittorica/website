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
  const colors = [
    'amber',
    'blue',
    'crimson',
    'gray',
    'indigo',
    'orange',
    'pink',
    'purple',
    'red',
    'slate',
    'teal',
  ];

  const semantics = ['info', 'success', 'warning', 'danger', 'error'];

  return (
    <Flex direction="column" gap="6">
      <Section>
        <Flex direction="column" gap="2">
          <Heading size="8" weight="bold">
            Design Tokens
          </Heading>
          <Heading as="p" size="4" weight="regular" style={{ opacity: 0.8 }}>
            A comprehensive reference of every CSS variable available in
            Pittorica.
          </Heading>
        </Flex>
      </Section>

      <Divider variant="wave" />

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Base Colors
          </Heading>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-white</Code>
              </DataList.Label>
              <DataList.Value>Primary light base (#edede9)</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-black</Code>
              </DataList.Label>
              <DataList.Value>Primary dark base (#000814)</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-source-color</Code>
              </DataList.Label>
              <DataList.Value>
                The user-defined base color for the theme.
              </DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Color Palettes
          </Heading>
          <Text as="p">
            Each color below has 10 steps (1-9, 11) and corresponding contrast
            tokens (e.g., <Code>--pittorica-indigo-1</Code> and{' '}
            <Code>--pittorica-on-indigo-1</Code>).
          </Text>
          <DataList orientation="vertical">
            {colors.map((color) => (
              <DataList.Item key={color}>
                <DataList.Label>
                  <Code>--pittorica-{color}-[1-11]</Code>
                </DataList.Label>
                <DataList.Value>
                  Full 10-step palette for {color}.
                </DataList.Value>
              </DataList.Item>
            ))}
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Semantic Tokens
          </Heading>
          <DataList orientation="vertical">
            {semantics.map((semantic) => (
              <DataList.Item key={semantic}>
                <DataList.Label>
                  <Code>--pittorica-{semantic}</Code>
                </DataList.Label>
                <DataList.Value>
                  The base semantic color for {semantic}.
                </DataList.Value>
              </DataList.Item>
            ))}
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Surface System
          </Heading>
          <Text as="p">
            Adaptive surface levels that handle background elevation and
            contrast automatically.
          </Text>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-surface-[0-9]</Code>
              </DataList.Label>
              <DataList.Value>
                Steps 0-9 of the adaptive surface background.
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-on-surface-[0-9]</Code>
              </DataList.Label>
              <DataList.Value>
                Adaptive content colors for each surface level.
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
              <DataList.Value>Inter Variable stack</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-heading</Code>
              </DataList.Label>
              <DataList.Value>Momo Trust Display stack</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-code</Code>
              </DataList.Label>
              <DataList.Value>Iosevka Etoile stack</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-font-size-[1-9]</Code>
              </DataList.Label>
              <DataList.Value>12px to 60px scale</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-line-height-[1-9]</Code>
              </DataList.Label>
              <DataList.Value>16px to 1.1 scale</DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Space & Layout
          </Heading>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-space-[0-9]</Code>
              </DataList.Label>
              <DataList.Value>0px to 96px proportional scale</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-bp-[xs-xl]</Code>
              </DataList.Label>
              <DataList.Value>520px to 1640px breakpoints</DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Radius & Shadows
          </Heading>
          <DataList orientation="vertical">
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-radius-[small-full]</Code>
              </DataList.Label>
              <DataList.Value>4px to 9999px curvature</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>
                <Code>--pittorica-shadow-[1-9]</Code>
              </DataList.Label>
              <DataList.Value>Adaptive elevation shadow scale</DataList.Value>
            </DataList.Item>
          </DataList>
        </Flex>
      </Section>
    </Flex>
  );
}
