import IconButton from './IconButton';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default:Story = {
  render: args => <IconButton {...args} />,
  args: {}
};
