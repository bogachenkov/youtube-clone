import VideoInfo from './VideoInfo';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoInfo> = {
  title: 'Watch/VideoInfo',
  component: VideoInfo,
};

export default meta;

type Story = StoryObj<typeof VideoInfo>;

export const Default:Story = {
  render: args => <VideoInfo {...args} />,
  args: {}
};
