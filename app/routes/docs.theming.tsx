import { Code, Divider, Flex, Heading, Section, Text } from 'pittorica/react';

const themeExample = `import { PittoricaTheme } from 'pittorica/react';

export default function Layout({ children }) {
  return (
    <PittoricaTheme 
      sourceColor="#29294b" 
      appearance="light" 
      radius="md"
    >
      {children}
    </PittoricaTheme>
  );
}`;

export default function ThemingPage() {
  return (
    <Flex direction="column" gap="6">
      <Section>
        <Flex direction="column" gap="2">
          <Heading size="8" weight="bold">
            Theming
          </Heading>
          <Heading as="p" size="4" weight="regular" style={{ opacity: 0.8 }}>
            Customize Pittorica's visual language to match your brand identity.
          </Heading>
        </Flex>
      </Section>

      <Divider variant="wave" />

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            The Source Color
          </Heading>
          <Text as="p">
            Pittorica is built on a dynamic color system. By providing a single
            `sourceColor`, the framework automatically generates a full palette
            of harmonious shades, including primary, surface, and semantic
            colors.
          </Text>
          <Code language="typescript">{themeExample}</Code>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Appearance
          </Heading>
          <Text as="p">
            Switch between `light` and `dark` modes effortlessly. The
            `PittoricaTheme` component handles all color transitions and surface
            adjustments for you.
          </Text>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Border Radius
          </Heading>
          <Text as="p">
            Adjust the framework's "painterly" curvature using the `radius`
            prop. Available values: `none`, `sm`, `md`, `lg`, `xl`, `full`.
          </Text>
        </Flex>
      </Section>
    </Flex>
  );
}
