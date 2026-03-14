import {
  Button,
  Code,
  DropdownMenu,
  DropdownMenuItem,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from 'pittorica/react';

export default function DropdownMenuPage() {
  return (
    <Section>
      <Flex direction="column" gap="4">
        <Heading size="8" weight="bold">
          DropdownMenu
        </Heading>
        <Text size="4">
          A menu that appears when the user clicks a trigger element.
        </Text>

        <Heading size="6" weight="bold" mt="6">
          Import
        </Heading>
        <Code p="3" style={{ width: '100%' }}>
          {`import { DropdownMenu, DropdownMenuItem } from 'pittorica/react';`}
        </Code>

        <Heading size="6" weight="bold" mt="6">
          Examples
        </Heading>
        <Flex gap="4">
          <DropdownMenu
            itemCount={3}
            renderTrigger={({ ref, onClick }) => (
              <Button ref={ref as never} onClick={onClick} variant="tonal">
                Open Menu
              </Button>
            )}
          >
            <DropdownMenuItem index={0} onClick={() => alert('Profile')}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem index={1} onClick={() => alert('Settings')}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              index={2}
              color="red"
              onClick={() => alert('Logout')}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenu>
        </Flex>

        <Heading size="6" weight="bold" mt="6">
          API Reference
        </Heading>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Prop</Table.ColumnHeader>
              <Table.ColumnHeader>Type</Table.ColumnHeader>
              <Table.ColumnHeader>Default</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>renderTrigger</Table.Cell>
              <Table.Cell>
                <Code>
                  {
                    '(props: { ref: RefObject<HTMLElement | null>, onClick: () => void }) => ReactNode'
                  }
                </Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                A function that returns the trigger element.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>itemCount</Table.Cell>
              <Table.Cell>
                <Code>number</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>Total number of items in the menu.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                colSpan={4}
                style={{
                  textAlign: 'center',
                  color: 'var(--pittorica-gray-10)',
                  fontSize: 'var(--pittorica-font-size-2)',
                  padding: 'var(--pittorica-space-4)',
                }}
              >
                This component also accepts all standard Box props.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>
    </Section>
  );
}
