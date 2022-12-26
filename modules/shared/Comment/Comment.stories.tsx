import Comment from './Comment';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof Comment> = {
  title: 'Comment',
  component: Comment,
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Default:Story = {
  render: args => <Comment {...args} />,
  args: {}
};
