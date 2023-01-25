import VideoProgress from './VideoProgress';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoProgress> = {
  title: 'VideoPlayer/VideoControls/VideoProgress',
  component: VideoProgress,
};

export default meta;

type Story = StoryObj<typeof VideoProgress>;

export const Default:Story = {
  render: args => <VideoProgress {...args} />,
  args: {}
};
