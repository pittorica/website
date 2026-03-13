import { Link as RouterLink } from 'react-router';

import { IconInfoCircle, IconMail, IconSearch } from '@tabler/icons-react';

import { motion } from 'motion/react';
import {
  Avatar,
  BackgroundBeams,
  Badge,
  Box,
  Button,
  Callout,
  Card,
  Carousel,
  Checkbox,
  Chip,
  Code,
  Container,
  DataList,
  Flex,
  Grid,
  Heading,
  HeroText,
  Kbd,
  Progress,
  Section,
  SegmentedControl,
  Slider,
  Switch,
  TextField,
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
                <Flex gap="4" wrap="wrap" justify="center">
                  <Button
                    as={RouterLink}
                    to="/docs/get-started"
                    size="4"
                    color="orange"
                  >
                    Quick Start
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/components"
                    variant="tonal"
                    size="4"
                    color="indigo"
                  >
                    Browse Components
                  </Button>
                </Flex>
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
                A collection of elegant, painterly components and visual
                examples for your next project.
              </Heading>
            </Flex>

            <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="6">
              <Card p="2">
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

              <Card p="2">
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

              <Card p="2">
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

              <Card p="2">
                <Flex direction="column" gap="4">
                  <Heading size="4" weight="bold">
                    Information
                  </Heading>
                  <Flex direction="column" gap="4">
                    <Callout color="info" size="sm">
                      <Callout.Icon>
                        <IconInfoCircle />
                      </Callout.Icon>
                      <Callout.Text>
                        Tip: You can use Pittorica tokens directly in your CSS.
                      </Callout.Text>
                    </Callout>
                    <Flex direction="column" gap="2">
                      <Flex justify="between" align="center">
                        <Heading as="span" size="2">
                          Installation
                        </Heading>
                        <Heading as="span" size="2" color="slate">
                          75%
                        </Heading>
                      </Flex>
                      <Progress value={75} color="indigo" />
                    </Flex>
                    <Flex gap="2" align="center">
                      <Heading as="span" size="2">
                        Shortcut:
                      </Heading>
                      <Kbd>⌘ K</Kbd>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>

              <Card p="2">
                <Flex direction="column" gap="4">
                  <Heading size="4" weight="bold">
                    Forms
                  </Heading>
                  <Flex direction="column" gap="4">
                    <TextField.Root label="Search" size="sm">
                      <TextField.Slot>
                        <IconSearch size={16} />
                      </TextField.Slot>
                      <TextField.Input placeholder="Find components..." />
                    </TextField.Root>
                    <TextField.Root label="Email" size="sm" error>
                      <TextField.Slot>
                        <IconMail size={16} />
                      </TextField.Slot>
                      <TextField.Input placeholder="enter your email" />
                    </TextField.Root>
                    <Flex gap="4">
                      <Checkbox label="Accept terms" defaultChecked />
                      <Checkbox label="Newsletter" />
                    </Flex>
                  </Flex>
                </Flex>
              </Card>

              <Card p="2">
                <Flex direction="column" gap="4">
                  <Heading size="4" weight="bold">
                    Advanced
                  </Heading>
                  <Flex direction="column" gap="4">
                    <SegmentedControl.Root defaultValue="all" color="orange">
                      <SegmentedControl.Item value="all">
                        All
                      </SegmentedControl.Item>
                      <SegmentedControl.Item value="new">
                        New
                      </SegmentedControl.Item>
                      <SegmentedControl.Item value="pro">
                        Pro
                      </SegmentedControl.Item>
                    </SegmentedControl.Root>

                    <DataList orientation="vertical">
                      <DataList.Item>
                        <DataList.Label>Version</DataList.Label>
                        <DataList.Value>
                          <Badge>v0.28.0</Badge>
                        </DataList.Value>
                      </DataList.Item>
                      <DataList.Item>
                        <DataList.Label>License</DataList.Label>
                        <DataList.Value>MIT</DataList.Value>
                      </DataList.Item>
                    </DataList>
                  </Flex>
                </Flex>
              </Card>
            </Grid>

            <Carousel.Root defaultIndex={0}>
              <Carousel.Item
                src="/static/gallery/jc-gellidon-vP3ORiYUBTY-unsplash.jpg"
                alt="Gallery Image 1"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Abstract Forms
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/john-zhou-o_u0XTbvrPc-unsplash.jpg"
                alt="Gallery Image 2"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Natural Textures
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/julien-BAR9_WJTcNI-unsplash.jpg"
                alt="Gallery Image 3"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Urban Perspective
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/land-o-lakes-inc-1w3tO5F8HYY-unsplash.jpg"
                alt="Gallery Image 4"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Rural Serenity
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/mitchell-orr-7eFWNqPToxk-unsplash.jpg"
                alt="Gallery Image 5"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Geometric Harmony
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/nir-himi-w_rVpVZGa3g-unsplash.jpg"
                alt="Gallery Image 6"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Ethereal Glow
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/patrick-untersee-j3f1lwXBuAI-unsplash.jpg"
                alt="Gallery Image 7"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Mountain Majesty
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/petar-avramoski-YKTIzSSd4ug-unsplash.jpg"
                alt="Gallery Image 8"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Architectural Depth
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
              <Carousel.Item
                src="/static/gallery/willian-justen-de-vasconcellos-jxnHGSSQENo-unsplash.jpg"
                alt="Gallery Image 9"
              >
                <Carousel.Description>
                  <Heading size="3" weight="bold">
                    Dynamic Motion
                  </Heading>
                </Carousel.Description>
              </Carousel.Item>
            </Carousel.Root>

            <Flex justify="center" mt="4">
              <Heading
                as="p"
                size="4"
                weight="regular"
                style={{ opacity: 0.6 }}
              >
                ...and many more components
              </Heading>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
