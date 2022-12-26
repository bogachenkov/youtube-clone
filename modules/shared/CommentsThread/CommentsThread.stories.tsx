import CommentsThread from './CommentsThread';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof CommentsThread> = {
  title: 'CommentsThread',
  component: CommentsThread,
};

export default meta;

type Story = StoryObj<typeof CommentsThread>;

export const Default:Story = {
  render: args => <CommentsThread {...args} />,
  args: {}
};
