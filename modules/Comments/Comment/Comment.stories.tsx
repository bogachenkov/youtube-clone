import Comment from './Comment';
import { Meta, StoryObj } from '@storybook/react';
import { WithReplies } from '../CommentsThread/CommentsThread.stories';

const meta:Meta<typeof Comment> = {
  title: 'Comments/Comment',
  component: Comment,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Comment>;

export const Default:Story = {
  render: args => <Comment {...args} />,
  args: {
    comment: WithReplies.args!.thread!.replies!.comments[0] }
};
