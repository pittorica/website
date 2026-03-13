import 'pittorica';
import '@fontsource-variable/inter';
import '@fontsource/momo-trust-display';
import '@fontsource/iosevka-etoile';

import { useState } from 'react';

import {
  isRouteErrorResponse,
  Link as RouterLink,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import {
  IconAlertTriangle,
  IconBrandGithub,
  IconComponents,
  IconHome,
  IconLayoutSidebarLeftExpand,
  IconMoon,
  IconPackage,
  IconRefresh,
  IconRocket,
  IconSun,
} from '@tabler/icons-react';

import { motion } from 'motion/react';
import {
  Avatar,
  Box,
  Button,
  Callout,
  Code,
  Container,
  Flex,
  Heading,
  HeroText,
  IconButton,
  PittoricaTheme,
  Progress,
  Section,
  Sheet,
} from 'pittorica/react';

import './app.css';

import type { Route } from './+types/root';
import { THEME_SOURCE_COLOR } from './consts/theme';

export const links: Route.LinksFunction = () => [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon-96x96.png',
  },
  { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
];

export const meta: Route.MetaFunction = () => [
  { title: 'Pittorica' },
  { property: 'og:title', content: 'Pittorica' },
  {
    property: 'og:image',
    content: 'https://pittorica.dcdavidev.me/og-image-20260222.png',
  },
  { property: 'og:type', content: 'website' },
  { name: 'theme-color', content: '#29294b' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const toggleAppearance = () => {
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="pittorica-theme" data-appearance={appearance}>
        <PittoricaTheme
          appearance={appearance}
          sourceColor={THEME_SOURCE_COLOR}
        >
          <Flex
            as="header"
            align="center"
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 100,
              height: '56px',
              backgroundColor:
                'color-mix(in srgb, var(--pittorica-surface-1) 80%, transparent)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--pittorica-slate-3)',
              padding: '0 var(--pittorica-space-4)',
            }}
          >
            <Flex justify="between" align="center" width="100%">
              <Flex align="center" gap="2">
                <IconButton variant="text" onClick={() => setIsSheetOpen(true)}>
                  <IconLayoutSidebarLeftExpand />
                </IconButton>
                <RouterLink
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--pittorica-space-3)',
                  }}
                >
                  <Avatar
                    src="/static/logo/square.png"
                    alt="Logo"
                    fallback="P"
                    size="2"
                  />
                  <Heading size="5" weight="bold" variant="classic">
                    PITTORICA
                  </Heading>
                </RouterLink>
              </Flex>

              <Flex align="center" gap="4">
                <IconButton
                  variant="text"
                  color="indigo"
                  size="3"
                  onClick={toggleAppearance}
                >
                  {appearance === 'light' ? (
                    <IconMoon size={20} />
                  ) : (
                    <IconSun size={20} />
                  )}
                </IconButton>
                <Button
                  as={RouterLink}
                  to="/components"
                  color="orange"
                  size="2"
                >
                  <IconComponents size={18} />
                  Components
                </Button>
                <IconButton
                  as="a"
                  href="https://github.com/pittorica/pittorica"
                  target="_blank"
                  variant="filled"
                  color="indigo"
                  size="3"
                >
                  <IconBrandGithub size={20} />
                </IconButton>
              </Flex>
            </Flex>
          </Flex>

          <Sheet
            isOpen={isSheetOpen}
            onClose={() => setIsSheetOpen(false)}
            side="left"
            title="Navigation"
          >
            <Flex direction="column" gap="2" p="4">
              <Button
                as={RouterLink}
                to="/"
                variant="tonal"
                onClick={() => setIsSheetOpen(false)}
                style={{ justifyContent: 'flex-start' }}
              >
                <IconHome size={18} />
                Home
              </Button>
              <Button
                as={RouterLink}
                to="/docs"
                variant="tonal"
                onClick={() => setIsSheetOpen(false)}
                style={{ justifyContent: 'flex-start' }}
              >
                <IconRocket size={18} />
                Quick start
              </Button>
              <Button
                as={RouterLink}
                to="/docs/installation"
                variant="tonal"
                onClick={() => setIsSheetOpen(false)}
                style={{ justifyContent: 'flex-start' }}
              >
                <IconPackage size={18} />
                Installation
              </Button>
              <Button
                as="a"
                href="https://github.com/pittorica/pittorica"
                target="_blank"
                variant="tonal"
                onClick={() => setIsSheetOpen(false)}
                style={{ justifyContent: 'flex-start' }}
              >
                <IconBrandGithub size={18} />
                GitHub
              </Button>
            </Flex>
          </Sheet>

          <Box id="top">{children}</Box>
        </PittoricaTheme>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;
  let status = 'ERROR';

  if (isRouteErrorResponse(error)) {
    status = String(error.status);
    message = error.status === 404 ? 'Page Not Found' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found. Please check the URL or return to the home page.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section as="main" style={{ minHeight: '100dvh' }}>
      <Container maxWidth="lg">
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="8"
          style={{ minHeight: 'calc(100dvh - 64px)' }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%' }}
          >
            <Flex direction="column" align="center" gap="8">
              <motion.div variants={itemVariants}>
                <HeroText text={status} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Flex direction="column" align="center" gap="4">
                  <Heading size="8" weight="bold" variant="classic">
                    {message}
                  </Heading>

                  <Callout color="danger" variant="soft" size="lg">
                    <Callout.Icon>
                      <IconAlertTriangle />
                    </Callout.Icon>
                    <Callout.Text>{details}</Callout.Text>
                  </Callout>
                </Flex>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Flex gap="4" wrap="wrap" justify="center">
                  <Button as={RouterLink} to="/" size="3" color="indigo">
                    <IconHome size={18} />
                    Back to Home
                  </Button>
                  <Button
                    variant="outlined"
                    size="3"
                    color="indigo"
                    onClick={() => globalThis.location.reload()}
                  >
                    <IconRefresh size={18} />
                    Try Again
                  </Button>
                </Flex>
              </motion.div>

              {stack && (
                <motion.div
                  variants={itemVariants}
                  style={{ width: '100%', maxWidth: '800px' }}
                >
                  <Box
                    style={{
                      overflow: 'hidden',
                      borderRadius: 'var(--pittorica-radius-3)',
                      border: '1px solid var(--pittorica-danger-alpha-3)',
                      backgroundColor: 'var(--pittorica-surface-1)',
                      boxShadow: 'var(--pittorica-shadow-5)',
                    }}
                  >
                    <Box
                      p="4"
                      style={{ backgroundColor: 'var(--pittorica-slate-2)' }}
                    >
                      <Heading size="3" weight="bold" color="danger">
                        Stack Trace (Development)
                      </Heading>
                    </Box>
                    <Box
                      p="4"
                      style={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                        textAlign: 'left',
                      }}
                    >
                      <Code
                        language="typescript"
                        showLineNumbers
                        filename="error-stack"
                      >
                        {stack}
                      </Code>
                    </Box>
                  </Box>
                </motion.div>
              )}
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </Section>
  );
}

export function HydrateFallback() {
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      p="4"
      style={{ minHeight: '100dvh' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Flex direction="column" align="center" gap="8">
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <HeroText text="PITTORICA" />
          </motion.div>

          <Box width="48">
            <Progress indeterminate />
          </Box>
        </Flex>
      </motion.div>
    </Flex>
  );
}
