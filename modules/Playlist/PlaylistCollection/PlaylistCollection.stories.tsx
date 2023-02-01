import PlaylistCollection from './PlaylistCollection';
import { Meta, StoryObj } from '@storybook/react';
import { MockedPlaylistData } from 'mocks/playlist';

const meta:Meta<typeof PlaylistCollection> = {
  title: 'Playlist/Collection',
  component: PlaylistCollection,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PlaylistCollection>;

export const Default:Story = {
  render: args => <PlaylistCollection {...args} />,
  args: {
    // @ts-ignore
    collection: MockedPlaylistData,
  }
};
