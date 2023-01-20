import VideoPlaylist from './VideoPlaylist';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof VideoPlaylist> = {
  title: 'VideoPlaylist',
  component: VideoPlaylist,
};

export default meta;

type Story = StoryObj<typeof VideoPlaylist>;

export const Default:Story = {
  render: args => <VideoPlaylist {...args} />,
  args: {}
};
