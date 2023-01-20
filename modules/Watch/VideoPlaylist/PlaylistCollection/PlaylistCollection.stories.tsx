import PlaylistCollection from './PlaylistCollection';
import { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof PlaylistCollection> = {
  title: 'PlaylistCollection',
  component: PlaylistCollection,
};

export default meta;

type Story = StoryObj<typeof PlaylistCollection>;

export const Default:Story = {
  render: args => <PlaylistCollection {...args} />,
  args: {}
};
