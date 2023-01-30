import CommentsThread from './CommentsThread';
import { Meta, StoryObj } from '@storybook/react';
import { MockedComments } from 'mocks/apiResponses';

const meta:Meta<typeof CommentsThread> = {
  title: 'Comments/CommentsThread',
  component: CommentsThread,
  tags: ['autodocs'],
  render: args => <CommentsThread {...args} />,
};

export default meta;

type Story = StoryObj<typeof CommentsThread>;

export const Default:Story = {
  args: {
    thread: MockedComments.items[0]
  }
}

export const WithReplies:Story = {
  args: {
    thread: MockedComments.items[1]
  }
};
