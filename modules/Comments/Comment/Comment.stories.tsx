import Comment from './Comment';
import { Meta, StoryObj } from '@storybook/react';
import { WithReplies } from '../CommentsThread/CommentsThread.stories';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { useLayoutEffect } from 'react';
import { useStore } from '@lib/providers/GlobalStoreProvider';
import { sleep } from '@lib/utils/sleep';

const meta:Meta<typeof Comment> = {
  title: 'Comments/Comment',
  component: Comment,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { authStore: { signIn } } = useStore();

      useLayoutEffect(() => {
        signIn();
      }, [signIn]);

      return <Story />
    }
  ]
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

  // Waiting for hydration
  await sleep(200);

  const likeButton = await canvas.findByTestId('like-button');

  await userEvent.click(likeButton);
  await expect(likeButton).toHaveTextContent('1');
}

export const DislikeComment:Story = {
  args: {
    ...Default.args,
  }
}

DislikeComment.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Waiting for hydration
  await sleep(200);

  const likeButton = await canvas.findByTestId('like-button');
  const dislikeButton = await canvas.findByTestId('dislike-button');

  await userEvent.click(dislikeButton);
  await expect(likeButton).toHaveTextContent('0');

  // Transition?
  await sleep(300);
  await expect(dislikeButton).toHaveStyle('color: rgb(255, 0, 0)')
}

export const ReplyComment:Story = {
  args: {
    ...Default.args
  }
}

ReplyComment.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Waiting for hydration
  await sleep(200);

  const replyButton = await canvas.findByRole('button', { name: 'Reply' });
  await userEvent.click(replyButton);

  const form = await canvas.findByTestId('comment-form');
  await expect(form).toBeInTheDocument();
}