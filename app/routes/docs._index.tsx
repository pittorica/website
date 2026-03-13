import { Code, Flex, Heading } from 'pittorica/react';

export default function DocsIndex() {
  return (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="2">
        <Heading size="8" weight="bold">
          Introduction
        </Heading>
        <Heading as="p" size="4" weight="regular" style={{ opacity: 0.8 }}>
          Pittorica is a painterly, CSS-first UI framework designed for elegance
          and speed. It combines the flexibility of design tokens with the power
          of modern CSS.
        </Heading>
      </Flex>

      <Flex direction="column" gap="4">
        <Heading size="6" weight="bold">
          Quick Start
        </Heading>
        <Heading as="p" size="3" weight="regular">
          Install Pittorica via your favorite package manager:
        </Heading>
        <Code language="bash" copyable p="4">
          npm install pittorica
        </Code>
      </Flex>

      <Flex direction="column" gap="4">
        <Heading size="6" weight="bold">
          Core Features
        </Heading>
        <Heading as="p" size="3" weight="regular">
          - **Painterly Aesthetic:** Built-in support for hand-crafted, artistic
          visual details.
          <br />- **CSS-First:** Pure CSS tokens and utilities at the core.
          <br />- **Polymorphic:** Components that adapt to your needs without
          sacrificing type safety.
          <br />- **Lightweight:** Minimal bundle size with maximum impact.
        </Heading>
      </Flex>
    </Flex>
  );
}
