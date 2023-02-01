import Playlist from './Playlist';
import { Meta, StoryObj } from '@storybook/react';
import { MockedPlaylistData } from 'mocks/playlist';
import { Default as PlaylistCollectionStory } from './PlaylistCollection/PlaylistCollection.stories';

const meta:Meta<typeof Playlist> = {
  title: 'Playlist',
  component: Playlist,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Playlist>;

export const Default:Story = {
  render: args => <Playlist {...args} />,
  args: {
    // @ts-ignore
    collection: PlaylistCollectionStory.args!.collection,
    isPrivate: true,
    lastUpdate: new Date().toISOString(),
    name: 'Mocked Playlist'
  }
};
