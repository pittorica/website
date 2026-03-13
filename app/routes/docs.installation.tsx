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
  Text,
} from 'pittorica/react';

export default function InstallationPage() {
  return (
    <Flex direction="column" gap="6">
      <Section>
        <Flex direction="column" gap="2">
          <Heading size="8" weight="bold">
            Installation
          </Heading>
          <Heading as="p" size="4" weight="regular" style={{ opacity: 0.8 }}>
            Add Pittorica to your React project in minutes.
          </Heading>
        </Flex>
      </Section>

      <Divider variant="wave" />

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Package Manager
          </Heading>
          <Text as="p">
            Choose your favorite package manager to install the core library and
            React components:
          </Text>

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
              Pittorica requires **React 18** or newer. Ensure your project
              meets this dependency.
            </Callout.Text>
          </Callout>
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" gap="4">
          <Heading size="6" weight="bold">
            Peer Dependencies
          </Heading>
          <Text as="p">
            Pittorica relies on `framer-motion` (or `motion`) for its signature
            painterly animations. If you haven't already, install it:
          </Text>
          <Code language="bash" copyable>
            npm install motion
          </Code>
        </Flex>
      </Section>
    </Flex>
  );
}
