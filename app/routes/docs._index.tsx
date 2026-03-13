import { Link } from 'react-router';

import { IconInfoCircle } from '@tabler/icons-react';

import {
  Callout,
  Card,
  Code,
  Divider,
  Flex,
  Grid,
  Heading,
  Section,
  Strong,
  Text,
} from 'pittorica/react';

const fonts = `npm install @fontsource-variable/inter @fontsource/momo-trust-display @fontsource/iosevka-etoile`;

const appCss = `:root {
  --font-inter-variable:
    'Inter Variable', Inter, system-ui, -apple-system, sans-serif;
  --font-momo-trust-display: 'Momo Trust Display', sans-serif;
  --font-iosevka-etoile: 'Iosevka Etoile', monospace;

  --pittorica-font-family: var(--font-inter-variable);
  --pittorica-font-heading: var(--font-momo-trust-display);
  --pittorica-font-code: var(--font-iosevka-etoile);
  --pittorica-font-strong: inherit;
  --pittorica-font-em: inherit;
  --pittorica-font-quote: var(--font-iosevka-etoile);
  --pittorica-font-mono: var(--font-iosevka-etoile);

  --pittorica-source-color: #29294b;
}

.pittorica-theme {
  --pittorica-source-color: #29294b;
}
`;

const app = `import { PittoricaTheme } from 'pittorica/react';
import 'pittorica';
import '@fontsource-variable/inter';
import '@fontsource/momo-trust-display';
import '@fontsource/iosevka-etoile';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="pittorica-theme" data-appearance="light">
        <PittoricaTheme appearance="light" sourceColor="#29294b">
          {children}
        </PittoricaTheme>
      </body>
    </html>
  );
}`;

export default function DocsIndex() {
  return (
    <Flex direction="column" gap="6">
      <Section>
        <Flex direction="column" gap="2">
          <Heading size="8" weight="bold">
            Introduction
          </Heading>
          <Heading as="p" size="4" weight="regular" style={{ opacity: 0.8 }}>
            Pittorica is a painterly, CSS-first UI framework designed for
            elegance and speed. It combines the flexibility of design tokens
            with the power of modern CSS.
          </Heading>
        </Flex>
      </Section>

      <Divider variant="wave" />

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Installation
          </Heading>
          <Heading as="p" size="3" weight="regular">
            Install Pittorica via your favorite package manager:
          </Heading>

          <Card p="2">
            <Grid columns={{ initial: '1', sm: '2' }} gap="2">
              <Code language="bash" copyable>
                npm install pittorica
              </Code>
              <Code language="bash" copyable>
                pnpm add pittorica
              </Code>
              <Code language="bash" copyable>
                yarn add pittorica
              </Code>
              <Code language="bash" copyable>
                bun add pittorica
              </Code>
            </Grid>
          </Card>

          <Callout color="info">
            <Callout.Icon>
              <IconInfoCircle />
            </Callout.Icon>
            <Callout.Text>
              Hint: you can click on the code block to copy the command to the
              clipboard! ;)
            </Callout.Text>
          </Callout>
        </Flex>
      </Section>

      <Divider variant="scallop" />

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Configure the Theme
          </Heading>
          <Text>
            Pittorica uses a dynamic system based on a source color. Choose a
            source color and apply it to the <Code>PittoricaTheme</Code>{' '}
            component. Here's how to do it:
          </Text>

          <Text>
            <Strong>Firstly</Strong>, install your desired fonts from{' '}
            <Link to="https://fontsource.org/">Fontsource</Link> or another
            provider. Pittorica comes with some predefined fonts, but those must
            be installed and imported into your app.
          </Text>

          <Code language="bash" copyable showLineNumbers>
            {fonts}
          </Code>

          <Text>
            In your <Code>root.tsx</Code>, <Code>app.tsx</Code>, or{' '}
            <Code>index.tsx</Code>, import the <Code>pittorica</Code> package
            and the fonts you chose.
          </Text>

          <Code language="typescript" filename="index.tsx">{`
import 'pittorica';
import '@fontsource-variable/inter';
import '@fontsource/momo-trust-display';
import '@fontsource/iosevka-etoile';
`}</Code>

          <Text>
            Create an <Code>app.css</Code> file and override defaults:
          </Text>

          <Code language="css" filename="app.css">{`
${appCss}
`}</Code>

          <Text>
            Return to <Code>root.tsx</Code>, <Code>app.tsx</Code>, or{' '}
            <Code>index.tsx</Code> to apply the theme with the{' '}
            <Code>PittoricaTheme</Code> provider.
          </Text>

          <Code language="typescript" filename="root.tsx">
            {app}
          </Code>

          <Text>
            Now you are ready to go and create your pages with Pittorica's
            components!
          </Text>
        </Flex>
      </Section>
    </Flex>
  );
}
