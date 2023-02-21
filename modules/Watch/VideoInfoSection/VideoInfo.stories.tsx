import VideoInfo from './VideoInfo';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta:Meta<typeof VideoInfo> = {
  title: 'Watch/VideoInfo',
  component: VideoInfo,
  render: args => <VideoInfo {...args} />,
};

export default meta;

type Story = StoryObj<typeof VideoInfo>;

export const Default:Story = {
  args: {}
};

export const ExpandDescription:Story = {
  args: {}
}

ExpandDescription.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  const expandButton = await canvas.findByRole('button', { name: 'Show More' });

  await userEvent.click(expandButton);

  await expect(expandButton).toHaveTextContent('Show Less')
}

export const Subscribe:Story = {
  args: {}
}

Subscribe.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);

  const subscribeButton = await canvas.findByRole('button', { name: 'SUBSCRIBE' });

  await userEvent.click(subscribeButton);

  await expect(subscribeButton).toHaveTextContent('SUBSCRIBED')
}
