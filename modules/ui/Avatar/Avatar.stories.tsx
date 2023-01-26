import Avatar from './Avatar';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default:Story = {
  render: args => <Avatar {...args} />,
  args: {
    name: 'John Doe',
  },
};

export const WithCustomSize:Story = {
  render: args => <Avatar {...args} />,
  args: {
    ...Default.args,
    size: 64
  }
};

export const WithAnotherNameProp:Story = {
  render: args => <Avatar {...args} />,
  args: {
    ...WithCustomSize.args,
    name: 'John'
  }
};