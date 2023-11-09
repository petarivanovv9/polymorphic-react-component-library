import type { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args}>Default</Button>,
};

export const SolidVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="primary">
          Primary
        </Button>
        <Button {...args} variant="secondary">
          Secondary
        </Button>
        <Button {...args} variant="success">
          Success
        </Button>
        <Button {...args} variant="danger">
          Danger
        </Button>
        <Button {...args} variant="warning">
          Warning
        </Button>
        <Button {...args} variant="info">
          Info
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="primary" disabled>
          Primary
        </Button>
        <Button {...args} variant="secondary" disabled>
          Secondary
        </Button>
        <Button {...args} variant="success" disabled>
          Success
        </Button>
        <Button {...args} variant="danger" disabled>
          Danger
        </Button>
        <Button {...args} variant="warning" disabled>
          Warning
        </Button>
        <Button {...args} variant="info" disabled>
          Info
        </Button>
      </div>
    </div>
  ),
  name: 'Solid (Default) Variant',
};

export const OutlineVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="outline-primary">
          Outline Primary
        </Button>
        <Button {...args} variant="outline-secondary">
          Outline Secondary
        </Button>
        <Button {...args} variant="outline-success">
          Outline Success
        </Button>
        <Button {...args} variant="outline-danger">
          Outline Danger
        </Button>
        <Button {...args} variant="outline-warning">
          Outline Warning
        </Button>
        <Button {...args} variant="outline-info">
          Outline Info
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="outline-primary" disabled>
          Outline Primary
        </Button>
        <Button {...args} variant="outline-secondary" disabled>
          Outline Secondary
        </Button>
        <Button {...args} variant="outline-success" disabled>
          Outline Success
        </Button>
        <Button {...args} variant="outline-danger" disabled>
          Outline Danger
        </Button>
        <Button {...args} variant="outline-warning" disabled>
          Outline Warning
        </Button>
        <Button {...args} variant="outline-info" disabled>
          Outline Info
        </Button>
      </div>
    </div>
  ),
};

export const GhostVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="ghost-primary">
          Ghost Primary
        </Button>
        <Button {...args} variant="ghost-secondary">
          Ghost Secondary
        </Button>
        <Button {...args} variant="ghost-success">
          Ghost Success
        </Button>
        <Button {...args} variant="ghost-danger">
          Ghost Danger
        </Button>
        <Button {...args} variant="ghost-warning">
          Ghost Warning
        </Button>
        <Button {...args} variant="ghost-info">
          Ghost Info
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="ghost-primary" disabled>
          Ghost Primary
        </Button>
        <Button {...args} variant="ghost-secondary" disabled>
          Ghost Secondary
        </Button>
        <Button {...args} variant="ghost-success" disabled>
          Ghost Success
        </Button>
        <Button {...args} variant="ghost-danger" disabled>
          Ghost Danger
        </Button>
        <Button {...args} variant="ghost-warning" disabled>
          Ghost Warning
        </Button>
        <Button {...args} variant="ghost-info" disabled>
          Ghost Info
        </Button>
      </div>
    </div>
  ),
};

export const LinkVariant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="link-primary">
          Link Primary
        </Button>
        <Button {...args} variant="link-secondary">
          Link Secondary
        </Button>
        <Button {...args} variant="link-success">
          Link Success
        </Button>
        <Button {...args} variant="link-danger">
          Link Danger
        </Button>
        <Button {...args} variant="link-warning">
          Link Warning
        </Button>
        <Button {...args} variant="link-info">
          Link Info
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="link-primary" disabled>
          Link Primary
        </Button>
        <Button {...args} variant="link-secondary" disabled>
          Link Secondary
        </Button>
        <Button {...args} variant="link-success" disabled>
          Link Success
        </Button>
        <Button {...args} variant="link-danger" disabled>
          Link Danger
        </Button>
        <Button {...args} variant="link-warning" disabled>
          Link Warning
        </Button>
        <Button {...args} variant="link-info" disabled>
          Link Info
        </Button>
      </div>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-end gap-2">
      <Button {...args} size="extra-small">
        Extra Small
      </Button>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
      <Button {...args} size="extra-large">
        Extra Large
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: (args) => (
    <Button {...args} fullWidth>
      Full Width
    </Button>
  ),
};

export const AsHyperlink: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button as="a" href="https://random.com" {...args}>
        Link
      </Button>

      <Button as="a" target="_blank" href="https://random.com" {...args}>
        Link (new tab)
      </Button>
    </div>
  ),
};
