import Avatar from './Avatar';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default:Story = {
  render: args => <Avatar {...args} />,
  args: {}
};
