import Comment from './Comment';
import { Meta, StoryObj } from '@storybook/react';
import { WithReplies } from '../CommentsThread/CommentsThread.stories';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    comment: WithReplies.args!.thread!.replies!.comments[0]
  }
};

export const LikeComment:Story = {
  args: {
    ...Default.args
  }
}

LikeComment.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Waiting for zustand hydration
  await new Promise((resolve) => setTimeout(resolve, 500));

  const likeButton = await canvas.findByTestId('like-button');
  const isLiked = likeButton.innerText === '1';

  await userEvent.click(likeButton);
  await expect(likeButton).toHaveTextContent(isLiked ? '0' : '1');
}

export const DislikeComment:Story = {
  args: {
    ...Default.args,
  }
}

DislikeComment.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Waiting for zustand hydration
  await new Promise((resolve) => setTimeout(resolve, 500));

  const likeButton = await canvas.findByTestId('like-button');
  const dislikeButton = await canvas.findByTestId('dislike-button');

  await userEvent.click(dislikeButton);
  await expect(likeButton).toHaveTextContent('0');
}

export const ReplyComment:Story = {
  args: {
    ...Default.args
  }
}

ReplyComment.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const replyButton = await canvas.findByRole('button', { name: 'Reply' });
  await userEvent.click(replyButton);

  const form = await canvas.findByRole('form');
  await expect(form).toBeVisible();
}