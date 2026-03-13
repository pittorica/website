import { motion } from 'motion/react';
import {
  Avatar,
  Box,
  Code,
  Container,
  Flex,
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
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Flex direction="column" align="center" justify="center" gap="9">
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

            <motion.div variants={itemVariants}>
              <Box
                style={{
                  maxWidth: '400px',
                  width: '100%',
                  borderRadius: 'var(--pittorica-radius-3)',
                  overflow: 'hidden',
                  boxShadow: 'var(--pittorica-shadow-4)',
                  border: '1px solid var(--pittorica-slate-3)',
                }}
              >
                <Code language="bash" copyable showLineNumbers={false}>
                  npm install pittorica
                </Code>
              </Box>
            </motion.div>
          </Flex>
        </motion.div>
      </Container>
    </Section>
  );
}
