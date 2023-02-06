import PlaylistItem from './PlaylistItem';
import { Meta, StoryObj } from '@storybook/react';
import { MockedPlaylistData } from 'mocks/playlist';

const meta:Meta<typeof PlaylistItem> = {
  title: 'Watch/VideoPlaylist/Item',
  component: PlaylistItem,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PlaylistItem>;

export const Default:Story = {
  render: args => <PlaylistItem {...args} />,
  args: {
    item: MockedPlaylistData[0],
    index: 0,
    isActive: false
  }
};

export const IsPlayingNow:Story = {
  render: args => <PlaylistItem {...args} />,
  args: {
    item: MockedPlaylistData[0],
    index: 0,
    isActive: true
  }
};