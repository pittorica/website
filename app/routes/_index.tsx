import { Link as RouterLink } from 'react-router';

import { motion } from 'motion/react';
import {
  Avatar,
  BackgroundBeams,
  Badge,
  Box,
  Button,
  Card,
  Chip,
  Code,
  Container,
  Flex,
  Grid,
  Heading,
  HeroText,
  Section,
  Slider,
  Switch,
} from 'pittorica/react';

export default function Route() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <Section
        p="0"
        style={{
          minHeight: 'calc(100dvh - 56px)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <BackgroundBeams />
        <Container maxWidth="lg" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Flex direction="column" align="center" justify="center" gap="6">
              <motion.div variants={itemVariants}>
                <Avatar
                  src="/static/logo/square.png"
                  alt="Pittorica Logo"
                  fallback="P"
                  size="9"
                  style={{
                    boxShadow: 'var(--pittorica-shadow-6)',
                    border: '4px solid var(--pittorica-slate-3)',
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants} style={{ width: '100%' }}>
                <HeroText text="pittorica" />
              </motion.div>

              <motion.div variants={itemVariants} style={{ maxWidth: '600px' }}>
                <Heading
                  as="p"
                  size="4"
                  weight="regular"
                  align="center"
                  style={{ opacity: 0.8 }}
                >
                  Pittorica is a painterly, CSS-first UI framework that brings
                  elegant, lightweight structure to modern interfaces.
                </Heading>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  style={{
                    maxWidth: '400px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Code language="bash" copyable showLineNumbers={false}>
                    npm install pittorica
                  </Code>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button as={RouterLink} to="/docs" size="4" color="orange">
                  Quick Start
                </Button>
              </motion.div>
            </Flex>
          </motion.div>
        </Container>
      </Section>

      <Section p="9" style={{ backgroundColor: 'var(--pittorica-surface-1)' }}>
        <Container maxWidth="lg">
          <Flex direction="column" gap="8">
            <Flex direction="column" gap="2">
              <Heading size="8" weight="bold">
                Component Gallery
              </Heading>
              <Heading
                as="p"
                size="4"
                weight="regular"
                style={{ opacity: 0.6 }}
              >
                A collection of elegant, painterly components for your next
                project.
              </Heading>
            </Flex>

            <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="6">
              <Card>
                <Flex direction="column" gap="4">
                  <Heading size="4" weight="bold">
                    Interactive
                  </Heading>
                  <Flex direction="column" gap="6">
                    <Flex direction="column" gap="2">
                      <Heading as="span" size="2" weight="medium">
                        Volume Control
                      </Heading>
                      <Slider defaultValue={50} />
                    </Flex>
                    <Flex align="center" justify="between">
                      <Heading as="span" size="2" weight="medium">
                        Dark Mode
                      </Heading>
                      <Switch defaultChecked />
                    </Flex>
                  </Flex>
                </Flex>
              </Card>

              <Card>
                <Flex direction="column" gap="4">
                  <Heading size="4" weight="bold">
                    Status & Labels
                  </Heading>
                  <Flex gap="2" wrap="wrap">
                    <Badge color="green">Success</Badge>
                    <Badge color="amber">Warning</Badge>
                    <Badge color="crimson">Error</Badge>
                    <Badge color="indigo">Info</Badge>
                  </Flex>
                  <Flex gap="2" wrap="wrap">
                    <Chip variant="tonal" color="orange">
                      React
                    </Chip>
                    <Chip variant="tonal" color="blue">
                      TypeScript
                    </Chip>
                    <Chip variant="tonal" color="pink">
                      CSS-First
                    </Chip>
                  </Flex>
                </Flex>
              </Card>

              <Card>
                <Flex direction="column" gap="4">
                  <Heading size="4" weight="bold">
                    Typography
                  </Heading>
                  <Flex direction="column" gap="2">
                    <Heading size="6">Heading 6</Heading>
                    <Heading size="3" weight="regular">
                      Body text with painterly details and elegant spacing.
                    </Heading>
                    <Box mt="2">
                      <Button variant="outlined" size="2">
                        Learn More
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
