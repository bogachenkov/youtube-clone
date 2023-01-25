import PlaylistCover from './PlaylistCover';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof PlaylistCover> = {
  title: 'Playlist/Cover',
  component: PlaylistCover,
};

export default meta;

type Story = StoryObj<typeof PlaylistCover>;

export const Default:Story = {
  render: args => <PlaylistCover {...args} />,
  args: {}
};
