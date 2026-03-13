import { Link as RouterLink } from 'react-router';

import { Card, Flex, Grid, Heading, Link, Section } from 'pittorica/react';

const components = [
  'AlertDialog',
  'AspectRatio',
  'Avatar',
  'Badge',
  'Blockquote',
  'Box',
  'Button',
  'Callout',
  'Card',
  'Carousel',
  'Checkbox',
  'CheckboxCard',
  'Chip',
  'Code',
  'Container',
  'ContextMenu',
  'DataList',
  'Dialog',
  'Divider',
  'DropdownMenu',
  'Flex',
  'Grid',
  'Heading',
  'HeroText',
  'HoverCard',
  'IconButton',
  'InputOTP',
  'Inset',
  'Kbd',
  'Link',
  'Popover',
  'Progress',
  'Quote',
  'Radio',
  'Section',
  'SegmentedControl',
  'Select',
  'Sheet',
  'Skeleton',
  'Slider',
  'Stack',
  'Strong',
  'Switch',
  'Table',
  'Tabs',
  'TextArea',
  'TextField',
  'Tooltip',
];

function toKebabCase(str: string) {
  return str.replaceAll(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export default function ComponentsIndex() {
  return (
    <Section>
      <Flex direction="column" gap="8">
        <Heading size="8" weight="bold">
          Component Gallery
        </Heading>
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
          {components.map((component: string) => (
            <Card key={component} p="2">
              <Link
                as={RouterLink}
                to={`/components/${toKebabCase(component)}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Flex direction="column" gap="1">
                  <Heading size="4" color="indigo" weight="bold">
                    {component}
                  </Heading>
                </Flex>
              </Link>
            </Card>
          ))}
        </Grid>
      </Flex>
    </Section>
  );
}
