import { Link as RouterLink } from 'react-router';

import { motion } from 'motion/react';
import {
  Avatar,
  BackgroundBeams,
  Box,
  Button,
  Code,
  Container,
  Flex,
  Heading,
  HeroText,
  Section,
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
  );
}
