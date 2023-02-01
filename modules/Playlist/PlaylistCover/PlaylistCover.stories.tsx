import PlaylistCover from './PlaylistCover';
import { Meta, StoryObj } from '@storybook/react';
import { Default as PlaylistCollectionStory } from '../PlaylistCollection/PlaylistCollection.stories';
import { getHighResThumb } from '@lib/utils/getHighResThumb';

const meta:Meta<typeof PlaylistCover> = {
  title: 'Playlist/Cover',
  component: PlaylistCover,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PlaylistCover>;

const VideoItem = PlaylistCollectionStory.args!.collection![0];
const thumbnail = getHighResThumb(VideoItem.snippet.thumbnails);
const href = `/watch/${VideoItem.id}`;

export const Default:Story = {
  render: args => <PlaylistCover {...args} />,
  args: {
    cover: thumbnail,
    alt: 'Mocked Playlist Cover',
    href
  }
};
