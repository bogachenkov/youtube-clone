import PlaylistMeta from './PlaylistMeta';
import { Meta, StoryObj } from '@storybook/react';
import { Default as PlaylistCollectionStory } from '../PlaylistCollection/PlaylistCollection.stories';

const meta:Meta<typeof PlaylistMeta> = {
  title: 'Playlist/Meta',
  component: PlaylistMeta,
  tags: ['autodocs'],
  render: args => <PlaylistMeta {...args} />,
};

export default meta;

type Story = StoryObj<typeof PlaylistMeta>;

export const Default:Story = {
  args: {
    isPrivate: true,
    totalVideos: PlaylistCollectionStory.args?.collection?.length,
    totalViews: 5
  }
};

export const NoViews:Story = {
  args: {
    ...Default.args,
    totalViews: 0
  }
}

export const IsPublic:Story = {
  args: {
    ...Default.args,
    isPrivate: false
  }
}


export const UpdateDate:Story = {
  args: {
    ...Default.args,
    lastUpdate: new Date('01-01-2023').toISOString()
  }
}