import Watch from './Watch';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Watch> = {
  title: 'Watch',
  component: Watch,
};

export default meta;

type Story = StoryObj<typeof Watch>;

export const Default:Story = {
  render: args => <Watch {...args} />,
  args: {}
};
