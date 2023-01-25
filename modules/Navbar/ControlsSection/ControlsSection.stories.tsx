import ControlsSection from './ControlsSection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof ControlsSection> = {
  title: 'Navbar/ControlsSection',
  component: ControlsSection,
};

export default meta;

type Story = StoryObj<typeof ControlsSection>;

export const Default:Story = {
  render: args => <ControlsSection {...args} />,
  args: {}
};
