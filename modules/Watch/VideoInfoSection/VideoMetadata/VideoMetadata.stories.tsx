import VideoMetadata from './VideoMetadata';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoMetadata> = {
  title: 'Watch/VideoInfo/VideoMetadata',
  component: VideoMetadata,
};

export default meta;

type Story = StoryObj<typeof VideoMetadata>;

export const Default:Story = {
  render: args => <VideoMetadata {...args} />,
  args: {
    views: 152000,
    likes: 78,
    published: new Date().toISOString()
  }
};
