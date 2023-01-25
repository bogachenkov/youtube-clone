import VideoPlayer from './VideoPlayer';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoPlayer> = {
  title: 'VideoPlayer',
  component: VideoPlayer,
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Default:Story = {
  render: args => <VideoPlayer {...args} />,
  args: {}
};
