import VideoMetadata from './VideoMetadata';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { sleep } from '@lib/utils/sleep';

const meta:Meta<typeof VideoMetadata> = {
  title: 'Watch/VideoMetadata',
  component: VideoMetadata,
  render: args => <VideoMetadata {...args} />,
};

export default meta;

type Story = StoryObj<typeof VideoMetadata>;

export const Default:Story = {
  args: {
    views: 152000,
    likes: 78,
    published: new Date().toISOString()
  }
};

export const SetLike:Story = {
  args: Default.args
}

SetLike.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  const likeButton = await canvas.findByRole('button', { name: `${SetLike.args!.likes!}` });

  await userEvent.click(likeButton);

  await sleep(100);

  await expect(likeButton).toHaveTextContent(`${SetLike.args!.likes! + 1}`)
}

export const AddToPlaylist:Story = {
  args: Default.args
}

AddToPlaylist.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  const addButton = await canvas.findByTestId('add-to-playlist');

  await userEvent.click(addButton);

  await sleep(100);

  await expect(addButton.getAttribute('data-tooltip-content')).toBe('Remove from playlist')
}