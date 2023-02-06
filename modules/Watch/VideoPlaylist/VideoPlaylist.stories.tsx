import VideoPlaylist from './VideoPlaylist';
import { Meta, StoryObj } from '@storybook/react';
import { PlaylistDataProvider } from '@lib/providers/playlist-api';

const meta:Meta<typeof VideoPlaylist> = {
  title: 'Watch/VideoPlaylist',
  component: VideoPlaylist,
};

export default meta;

type Story = StoryObj<typeof VideoPlaylist>;

export const Default:Story = {
  render: args => <VideoPlaylist {...args} />,
  decorators: [
    (Story) => (
      <PlaylistDataProvider>
        <Story />
      </PlaylistDataProvider>
    )
  ],
  args: {}
};
