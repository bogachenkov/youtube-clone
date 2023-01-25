import VideoLike from './VideoLike';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoLike> = {
  title: 'Watch/VideoInfo/VideoLike',
  component: VideoLike,
};

export default meta;

type Story = StoryObj<typeof VideoLike>;

export const Default:Story = {
  render: args => <VideoLike {...args} />,
  args: {}
};
